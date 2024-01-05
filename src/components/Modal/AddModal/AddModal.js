import { useEffect, useState } from 'react'
import {
  useAddAdsMutation,
  useAddImgAdsMutation,
  useGetAdsQuery,
} from '../../../store/Service/Service'
import * as S from './AddModalStyle'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAds } from '../../../store/slices/userSlice'
import {useButtonState} from '../../../hooks/uesButtonState'

export const AddModal = ({ onClose }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [selectedImages, setSelectedImages] = useState([])
  const [addAds, { isLoading, isError }] = useAddAdsMutation()
  const { data, isLoading: isis, refetch } = useGetAdsQuery()
  const { isButtonDisabled, updateButtonState } = useButtonState()
  const [addAdsImage] = useAddImgAdsMutation()

  useEffect(() => {
    if (!isis) {
      dispatch(setAds(data))
    }
  }, [data])

   const handlePhoto = async (e) => {
    const files = Array.from(e.target.files)
    for (const file of files) {
      const dataURL = await fileInfoURL(file)
      const imageData = {
        file,
        dataURL,
      }
      setSelectedImages((prevImages) => [...prevImages, imageData])
    }
  }

  const fileInfoURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!title || !description || !price) {
      setError('Заполните все поля')
      return
    }
    try {
      const result = await addAds({ title, description, price })
      for (let i = 0; i < selectedImages.length; i++) {
        const formData = new FormData()
        formData.append('file', selectedImages[i].file)
        await addAdsImage({ id: result.data.id, file: formData })
      }
      refetch()
      onClose()
      navigate('/')
    } catch (error) {
      console.log(isError)
    }
  }

  const handleRemoveImage = (index, e) => {
    e.preventDefault()
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index))
  }

  return (
    <S.Wrapper>
      <S.ModalBlock>
        <S.ModalContent>
          <S.ModalTitle onClick={onClose}>Новое объявление</S.ModalTitle>
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
                placeholder="Введите
                  название"
                onChange={(e) => {
                  setTitle(e.target.value)
                  updateButtonState()
                }}
              ></S.FormNewArtInput>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtLabel2 htmlFor="text">Описание</S.FormNewArtLabel2>
              <S.FormNewArtArea
                name="text"
                id="formArea"
                cols="auto"
                rows="5"
                placeholder="Введите описание"
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
                {[...Array(5)].map((_, index) => (
                  <S.FormNewArtImg key={index}>
                    {selectedImages[index] ? (
                      <>
                        <S.FormNewArtImgImg2
                          src={selectedImages[index].dataURL}
                          alt="Выбранное изображение"
                        />
                        <S.DelBtnImg
                          type="button"
                          onClick={(e) => handleRemoveImage(index, e)}
                        >
                          <img
                            style={{ width: '25px' }}
                            src={'../img/basket2.svg'}
                            alt="Delete"
                          />
                        </S.DelBtnImg>
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
                      onChange={(e) => handlePhoto(e)}
                    />
                  </S.FormNewArtImg>
                ))}
              </S.FormNewArtBarImg>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtiLabel>Цена</S.FormNewArtiLabel>
              <S.FormNewArtInputPrice
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                name="price"
                id="formName"
                placeholder="₽"
                onChange={(e) => {
                  setPrice(e.target.value)
                  updateButtonState()
                }}
              />
            </S.FormNewArtBlock>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.FormNewArtBtnPub
              onClick={handleFormSubmit}
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

