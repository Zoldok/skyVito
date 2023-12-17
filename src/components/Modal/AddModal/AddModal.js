import { useState } from 'react'
import { useAddAdsMutation } from '../../../store/Service/Service'
import * as S from './AddModalStyle'

export const AddModal = ({ onClose }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  
  const [addAds, { isLoading, isError, isSuccess }] = useAddAdsMutation()
 
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await addAds({ title, description, price })
      console.log(result)
      console.log(isLoading, isSuccess)
            //получить данные задиспатчить. задиспатчить
    } catch (error) {
      console.log(isError)
    }

    //
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
              <S.FormNewArtP>Фотографии товара</S.FormNewArtP>
              <S.FormNewArtSpan>Фотографии можно добавить во время редактирования</S.FormNewArtSpan>
              <S.FormNewArtBarImg>
                {[...Array(5)].map((_, index) => (
                  <S.FormNewArtImg key={index}>
                    <S.FormNewArtImgImg src="" alt="" />
                    <S.FormNewArtBarImgCover
                      // onClick={() =>
                      //   document.getElementById(`fileInput${index}`).click()
                      // }
                    ></S.FormNewArtBarImgCover>
                    <input
                      type="file"
                      id={`fileInput${index}`}
                      style={{ display: 'none' }}
                      // onChange={(e) => handleFileSelect(e)}
                    />
                  </S.FormNewArtImg>
                ))}
              </S.FormNewArtBarImg>
            </S.FormNewArtBlock>
            <S.FormNewArtBlock>
              <S.FormNewArtiLabel>Цена</S.FormNewArtiLabel>
              <S.FormNewArtInputPrice
                type="text"
                name="price"
                id="formName"
                placeholder="₽"
                onChange={(e) => setPrice(e.target.value)}
              />
            </S.FormNewArtBlock>
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
