import { useEffect, useState } from 'react'
import { useAddAdsMutation, useGetAdsQuery } from '../../../store/Service/Service'
import * as S from './AddModalStyle'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAds } from '../../../store/slices/userSlice'

export const AddModal = ({ onClose }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  
  const [addAds, { isLoading, isError, isSuccess }] = useAddAdsMutation()
 
  const {data, isLoading: isis, refetch} = useGetAdsQuery()

  useEffect(()=> {
    if(!isis) {
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
      const result = await addAds({ title, description, price })
      console.log(result)
      console.log(isLoading, isSuccess)
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
          <S.ModalTitle>Новое объявление</S.ModalTitle>
          <S.ModalBtnClose onClick={onClose}>
            <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
          </S.ModalBtnClose>

          <S.ModalFormNewArt onSubmit={handleFormSubmit}>
            <S.FormNewArtBlock>
              <S.FormNewArtLabel htmlFor="text">Название</S.FormNewArtLabel>
              <S.FormNewArtInput
                type="text"
                name="name"
                id="formName"
                placeholder="Введите
                  название"
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
                placeholder="Введите описание"
                onChange={(e) => setDescription(e.target.value)}
              ></S.FormNewArtArea>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtSpan>Фотографии можно добавить во время редактирования</S.FormNewArtSpan>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtiLabel>Цена</S.FormNewArtiLabel>
              <S.FormNewArtInputPrice
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                name="price"
                id="formName"
                placeholder="₽"
                onChange={(e) => {
                  const input = e.target.value
                  if (/^\d*\.?\d*$/.test(input)) {
                    const value = parseFloat(input)
                    if (!isNaN(value) && value >= 0) {
                      setPrice(value.toString())
                    }
                  }
                }}
              />
            </S.FormNewArtBlock>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.FormNewArtBtnPub id="btnPublish">
              Опубликовать
            </S.FormNewArtBtnPub>
          </S.ModalFormNewArt>
        </S.ModalContent>
      </S.ModalBlock>
    </S.Wrapper>
  )
}

export default AddModal
