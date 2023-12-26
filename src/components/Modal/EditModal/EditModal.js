import { useState } from 'react'
import {
  useEditAdsMutation,
  useAddImgAdsMutation,
  useDelImgAdsMutation,
} from '../../../store/Service/Service'
import * as S from './EditModalStyle'
import useButtonState from '../../../hooks/uesButtonState'

export const EditModal = ({ data, onClose, updateAdData }) => {
  const [title, setTitle] = useState(data.title)
  const [description, setDescription] = useState(data.description)
  const [price, setPrice] = useState(data.price)
  const [selectedImages, setSelectedImages] = useState(data.images ?? [])
  const id = data.id
  const [postAdsImage] = useAddImgAdsMutation(id)
  // const [imagesFromInput, setImagesFromInput] = useState([])
  const [editAds, { isLoading, isError }] = useEditAdsMutation()
  const [delImgAds] = useDelImgAdsMutation()
  const [error, setError] = useState(null)
  const { isButtonDisabled, updateButtonState } = useButtonState()

  const handleFormSubmit = async () => {
    try {
      const result = await editAds({
        title,
        description,
        price: Number(price),
        id,
      })
      updateAdData(result.data)
    } catch (error) {
      setError(isError)
    }
  }

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files)
    console.log('Выбранные файлы:', files)
    // Отправка каждого файла на сервер сразу после выбора
    for (const file of files) {
      const formData = new FormData()
      formData.append('file', file)
      await postAdsImage({ id, file: formData })
        .unwrap()
        .then((updatedAdd) => setSelectedImages(updatedAdd.images))
    }
  }

  const submitAds = async (e) => {
    e.preventDefault()
    if (!title || !description || !price) {
      setError('Заполните все поля')
      return
    }
    // const formData = new FormData()
    // imagesFromInput.forEach((image) => {
    //   formData.append('file', image)
    // })
    handleFormSubmit()
    onClose()
  }

  const handleDeleteImage = async (index, image) => {
    console.log('данные', index)
    console.log('данные2', image)
    try {
      await delImgAds({ id: data.id, image })
      setSelectedImages((prevImages) => {
        console.log('prevImages', prevImages)
        const newImages = [...prevImages]
        newImages.splice(index, 1)
        console.log('newImages', newImages)
        return newImages
      })
    } catch (error) {
      setError(error)
    }
  }

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
                onChange={(e) => {
                  setTitle(e.target.value)
                  updateButtonState()
                }}
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
                onChange={(e) => {
                  setDescription(e.target.value)
                  updateButtonState()
                }}
              ></S.FormNewArtArea>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtP>Фотографии товара</S.FormNewArtP>
              <S.FormNewArtSpan>не более 5 фотографий</S.FormNewArtSpan>

              <S.FormNewArtBarImg>
                {/* Отображение выбранных изображений */}
                {Array.from({ length: Math.min(selectedImages.length, 5) }).map(
                  (_, index) => (
                    <S.FormNewArtImg key={index}>
                      {/* Проверка наличия изображения по индексу */}
                      {selectedImages[index] && (
                        <>
                          <S.DeleteImageBtn
                            onClick={(e) => {
                              e.preventDefault()
                              updateButtonState()
                              handleDeleteImage(index, selectedImages[index])
                            }}
                          >
                            <img
                              style={{ width: '25px' }}
                              src={'../img/basket2.svg'}
                              alt="Delete"
                            />
                          </S.DeleteImageBtn>
                          <S.FormNewArtImgImg
                            src={
                              !selectedImages[index]
                                ? ''
                                : `http://localhost:8090/${selectedImages[index].url}`
                            }
                            alt=""
                          />
                        </>
                      )}
                    </S.FormNewArtImg>
                  )
                )}
                {/* Добавление новых */}
                {Array.from({
                  length: Math.max(0, 5 - selectedImages.length),
                }).map((_, index) => (
                  <S.FormNewArtImg2 key={index}>
                    <S.FormNewArtBarImgCover
                      onClick={(e) => {
                        e.preventDefault()
                        document
                          .getElementById(
                            `fileInput${selectedImages.lenght - 1}`
                          )
                          .click()
                        updateButtonState()
                      }}
                    ></S.FormNewArtBarImgCover>
                    <input
                      type="file"
                      id={`fileInput${selectedImages.lenght - 1}`}
                      style={{ display: 'none' }}
                      onChange={handleFileSelect}
                    />
                  </S.FormNewArtImg2>
                ))}
              </S.FormNewArtBarImg>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtiLabel>Цена</S.FormNewArtiLabel>
              <S.FormNewArtInputPrice
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                name="price"
                value={price}
                id="formName"
                placeholder="₽"
                onChange={(e) => {
                  const input = e.target.value
                  if (/^\d*\.?\d*$/.test(input)) {
                    const input = e.target.value
                    if (input === '' || /^\d*\.?\d*$/.test(input)) {
                      setPrice(input)
                      updateButtonState()
                    }
                  }
                }}
              />
            </S.FormNewArtBlock>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.FormNewArtBtnPub
              onClick={submitAds}
              disabled={isButtonDisabled || isLoading}
            >
              {isLoading ? 'Публикуем' : 'Опубликовать'}
            </S.FormNewArtBtnPub>
          </S.ModalFormNewArt>
        </S.ModalContent>
      </S.ModalBlock>
    </S.Wrapper>
  )
}

export default EditModal
