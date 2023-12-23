import { useState } from 'react'
import {
  useEditAdsMutation,
  useAddImgAdsMutation,
  useDelImgAdsMutation,
} from '../../../store/Service/Service'
import * as S from './EditModalStyle'

export const EditModal = ({ data, onClose,  updateAdData
}) => {
  // console.log('данные редактирования', data)
  const [title, setTitle] = useState(data.title)
  const [description, setDescription] = useState(data.description)
  const [price, setPrice] = useState(data.price)
  const [selectedImages, setSelectedImages] = useState([])
  const id = data.id //id объявления
  const [postAdsImage] = useAddImgAdsMutation(id)
  // console.log('url изображений', data.images)
  const [imagesFromInput, setImagesFromInput] = useState([])
  const [editAds, { isLoading, isError, isSuccess }] = useEditAdsMutation()
  const [delImgAds] = useDelImgAdsMutation()
  const [blurredIndexes, setBlurredIndexes] = useState([]);


  const handleFormSubmit = async () => {
    try {
      const result = await editAds({
        title,
        description,
        price: Number(price),
        id,
      })
      console.log('ответ сервера',result.data)
      updateAdData(result.data)
            //при добавлении можно записать в состояние т.к. ответ содержит новые изображения
      console.log(isLoading, isSuccess)
    } catch (error) {
      console.log(isError)
    }
  }

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files)
    setImagesFromInput(files)
    const reader = new FileReader()

    reader.onload = () => {
      const imagesData = files.map((file) => ({
        file,
        dataURL: reader.result,
      }))
      console.log('данные', imagesData)
      setSelectedImages((prevImages) => [...prevImages, ...imagesData])
    }
    files.forEach((file) => reader.readAsDataURL(file))
  }

  const submitAds = async (e) => {
    e.preventDefault()
    // console.log('REF', imagesFromInput)
    const formData = new FormData()
    formData.append('file', imagesFromInput[imagesFromInput.length - 1])
    await postAdsImage({ id, file: formData })
    setSelectedImages((prevImages) => [...prevImages, ...imagesFromInput]);
    // console.log(typeof price)
    handleFormSubmit()
    onClose()
  }

  const handleDeleteImage = async (index, image) => {
    try {
      await delImgAds({ id: data.id, image });
      setSelectedImages((prevImages) => {
        const newImages = [...prevImages];
        newImages.splice(index, 1);
        return newImages;
      });
    } catch (error) {
      console.log('Ошибка при удалении изображения:', error);
    }
    setBlurredIndexes((prevIndexes) => [...prevIndexes, index]);
  };
  return (
    <S.Wrapper>
      <S.ModalBlock>
        <S.ModalContent>
          <S.ModalTitle>Редактировать объявление</S.ModalTitle>
          <S.ModalBtnClose onClick={onClose}>
            <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
          </S.ModalBtnClose>

          <S.ModalFormNewArt>
          <S.FormNewArtBlock>
              <S.FormNewArtLabel htmlFor="text">Название</S.FormNewArtLabel>
              <S.FormNewArtInput
                type="text"
                name="name"
                id="formName"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></S.FormNewArtInput>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtLabel htmlFor="text">Описание</S.FormNewArtLabel>
              <S.FormNewArtArea
                name="text"
                id="formArea"
                cols="auto"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></S.FormNewArtArea>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtP>Фотографии товара</S.FormNewArtP>
              <S.FormNewArtSpan>не более 5 фотографий</S.FormNewArtSpan>
              <S.FormNewArtBarImg>
                {/* на отображение тех которые есть в объявлении */}
                {data &&
                  data.images.map((image, index) => (
                    <S.FormNewArtImg key={index}>
                      <S.DeleteImageBtn
                        onClick={(e) => {
                          e.preventDefault()
                          handleDeleteImage(index, image)
                        }}
                      >
                        x
                      </S.DeleteImageBtn>
                      {blurredIndexes.includes(index) ? (
              <S.BlurredImage
                src={!image ? '' : `http://localhost:8090/${image.url}`}
                alt=""
              />
            ) : (
              <S.FormNewArtImgImg
                src={!image ? '' : `http://localhost:8090/${image.url}`}
                alt=""
              />
            )}
          </S.FormNewArtImg>
                  ))}
                {/* добавление новых */}
                {[...Array(5 - data.images.length)].map((_, index) => (
                  <S.FormNewArtImg key={index}>
                    {selectedImages[index] ? (
                      <>
                        <S.DeleteImageBtn2
                          onClick={() => handleDeleteImage(index)}
                        >
                          x
                        </S.DeleteImageBtn2>
                        <S.FormNewArtImgImg2
                          src={selectedImages[index].dataURL}
                          alt="Выбранное изображение"
                        />
                      </>
                    ) : (
                      <S.FormNewArtImgImg src="" alt="" />
                    )}
                    <S.FormNewArtBarImgCover
                      onClick={() =>
                        document.getElementById(`fileInput${index}`).click()
                      }
                    ></S.FormNewArtBarImgCover>
                    <input
                      type="file"
                      id={`fileInput${index}`}
                      style={{ display: 'none' }}
                      onChange={handleFileSelect}
                    />
                  </S.FormNewArtImg>
                ))}
              </S.FormNewArtBarImg>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtiLabel>Цена</S.FormNewArtiLabel>
              <S.FormNewArtInputPrice
                type="number"
                name="price"
                id="formName"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </S.FormNewArtBlock>
            <S.FormNewArtBtnPub onClick={submitAds} id="btnPublish">
              Опубликовать
            </S.FormNewArtBtnPub>
          </S.ModalFormNewArt>
        </S.ModalContent>
      </S.ModalBlock>
    </S.Wrapper>
  )
}

export default EditModal