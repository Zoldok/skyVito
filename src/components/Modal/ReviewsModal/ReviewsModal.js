import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddCommentMutation } from '../../../store/Service/Service'
import {Footer} from '../../Footer/Footer'
import { Header } from '../../Header/Header.styled'
import * as S from './ReviewsModalStyle'
import { ReviewItem } from './ReviewItem'
import { useAuth } from '../../../hooks/use-auth'
import {useButtonState} from '../../../hooks/uesButtonState'

export const ReviewsModal = ({ comments, onClose }) => {
  const modalRef = useRef(null)
  const { adId } = useParams()
  const { isAuth } = useAuth()
  const [addComment, { isLoading }] = useAddCommentMutation(adId)
  const [newComment, setNewComment] = useState('')
  const [error, setError] = useState(null)
  const { isButtonDisabled, updateButtonState } = useButtonState()

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [onClose])

  const handleAddComment = async (event) => {
    event.preventDefault()

    if (!newComment) {
      setError('Пожалуйста, введите комментарий')
      return
    }

    await addComment({ text: newComment, id: adId })
    setNewComment('')
    setError(null)
    updateButtonState(false)
  }

  return (
    <S.Wrapper>
      <Header />
      <S.Container ref={modalRef}>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle onClick={onClose}>Отзывы о товаре</S.ModalTitle>
            <S.ModalBtnClose onClick={onClose}>
              <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
            </S.ModalBtnClose>
            <S.ModalScroll>
              {error && <S.Error>{error}</S.Error>}
              <S.ModalFormNewArt>
                {isAuth && (
                  <S.FormNewArtBlock>
                    <S.FormNewArtLabel htmlFor="text">
                      Добавить отзыв
                    </S.FormNewArtLabel>
                    <S.FormNewArtArea
                      name="text"
                      id="formArea"
                      cols="auto"
                      rows="5"
                      placeholder="Введите описание"
                      value={newComment}
                      onChange={(e) => {
                        setNewComment(e.target.value)
                        updateButtonState()
                      }}
                    ></S.FormNewArtArea>
                  </S.FormNewArtBlock>
                )}
                {isAuth && (
                  <S.FormNewArtBtnPub
                    onClick={handleAddComment}
                    disabled={isButtonDisabled || isLoading}
                  >
                    {isLoading ? 'Публикация' : 'Опубликовать'}
                  </S.FormNewArtBtnPub>
                )}
              </S.ModalFormNewArt>
              <S.ModalReviews>
                <S.ReviewsReview>
                  {comments &&
                    comments.map((item, index) => (
                      <ReviewItem
                        text={item.text}
                        key={index}
                        avatar={`http://localhost:8090/${item.author.avatar}`}
                        author={item.author.name}
                        time={item.created_on}
                      />
                    ))}
                </S.ReviewsReview>
              </S.ModalReviews>
            </S.ModalScroll>
          </S.ModalContent>
        </S.ModalBlock>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}
