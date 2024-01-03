import { useEffect, useState } from 'react'
import {
  useAddAdsMutation,
  useGetAdsQuery,
} from '../../../store/Service/Service'
import * as S from './AddModalStyle'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAds } from '../../../store/slices/userSlice'
import useButtonState from '../../../hooks/uesButtonState'

export const AddModal = ({ onClose }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [addAds, { isLoading, isError }] = useAddAdsMutation()
  const { data, isLoading: isis, refetch } = useGetAdsQuery()
  const { isButtonDisabled, updateButtonState } = useButtonState()

  useEffect(() => {
    if (!isis) {
      dispatch(setAds(data))
    }
  }, [data])

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!title || !description || !price) {
      setError('Заполните все поля')
      return
    }
    try {
      await addAds({ title, description, price })
      refetch()
      onClose()
      navigate('/')
    } catch (error) {
      console.log(isError)
    }
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
              <S.FormNewArtSpan>
                Фотографии можно добавить во время редактирования
              </S.FormNewArtSpan>
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

export default AddModal
