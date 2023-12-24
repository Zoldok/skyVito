import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import {
  useDelAdsIdMutation,
  useGetAdsIdQuery,
  useGetAllCommentsQuery,
  // useGetAdsQuery,
} from '../../store/Service/Service'
import * as S from './AdDetails.styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { useAuth } from '../../hooks/use-auth'
// import './my-article.css'
import MainMenu from '../../components/MainMenu/MainMenu'
import { formatDate } from '../../utils/FormatteDate'
import { formatTime } from '../../utils/FormatteTime'
import { useEffect, useState } from 'react'
import EditModal from '../../components/Modal/EditModal/EditModal'
import { ReviewsModal } from '../../components/Modal/ReviewsModal/ReviewsModal'
// import { useDispatch } from 'react-redux'
// import { setAds } from '../../store/slices/userSlice'
// import { useMutation } from 'react-query'

const AdDetails = () => {
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  const { adId } = useParams()
  const { isAuth } = useAuth()
  const { data, isLoading, refetch: refetchAdsId } = useGetAdsIdQuery(adId)
  const [DeteleAds] = useDelAdsIdMutation(adId)
  let showEdit = false
  const [isModalOpen, setIsModalOpen] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [currentAds, setCurrentAds] = useState(data)

  const [isModalOpenReviews, setIsModalOpenReviews] = useState(false)
  const [adComments, setAdComments] = useState([])

  const { data: advComments } = useGetAllCommentsQuery(adId)


  const updateAdData = (updatedData) => {
    setCurrentAds(updatedData)
  }

  useEffect(() => {
    if (advComments) {
      setAdComments(advComments)
    }
  }, [advComments])

  useEffect(() => {
    if (data) {
      setCurrentAds(data)
      refetchAdsId()
    }
  }, [data])

  console.log('текущее', currentAds)

  // useEffect(() => {
  //   refetch() // Запуск нового запроса при монтировании компонента
  // }, [adId, refetchAdsId])

  const openModal = () => {
    setIsModalOpen(true) // Открываем модальное окно
  }

  const closeModal = () => {
    setIsModalOpen(false) // Закрываем модальное окно
  }

  const imageUrls = currentAds?.images?.map(
    (image) => `http://127.0.0.1:8090/${image.url}`
  )

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const handleImageClick = (index) => {
    setSelectedImageIndex(index)
  }

  // const { data: dataAll, isLoading: isis, refetch } = useGetAdsQuery()

  // useEffect(() => {
  //   if (!isis) {
  //     dispatch(setAds(dataAll))
  //   }
  // }, [data])

  const DeleteAtdFunc = async (e) => {
    e.preventDefault()
    try {
      const result = await DeteleAds({ adId: adId })
      console.log(result)
      // refetch()
      navigate('/')
    } catch (error) {
      console.log('ошибка')
    }
  }

  // console.log('текущее объявление', currentAds)

  const currentUser = localStorage.getItem('id_сur_user')

  if (isLoading) return <div>идет загрузка</div>

  if (isAuth) {
    localStorage.setItem('id_seller', data.user.id)
  }

  if (data.user.id === parseInt(currentUser, 10)) {
    showEdit = true
  }
  // if (data.user.id === parseInt(currentUser, 10)) {
  //   showEdit = true
  // }

  const idSeller = data.user.id

  return (
    <div>
      {/* Обьявление
      <h1>{data.title}</h1> */}
      <S.Wrapper>
        <S.Container>
          <Header isAuth={isAuth} />
          <S.Main>
            <S.MainContainer>
              <MainMenu />
            </S.MainContainer>
            <S.MainArtic>
              <S.ArticContent>
                <S.ArticleLeft>
                  <S.ArticleFillImg>
                    <S.ArticleImg>
                      <S.ArticleImgImg
                        src={
                          currentAds?.images && selectedImageIndex !== null
                            ? `http://127.0.0.1:8090/${currentAds.images[selectedImageIndex]?.url}`
                            : ''
                        }
                        alt=""
                      />
                    </S.ArticleImg>
                    <S.ArticleImgBar>
                      {imageUrls &&
                        imageUrls.map((imageUrl, index) => (
                          <S.ArticleImgBarDiv
                            key={index}
                            onClick={() => handleImageClick(index)}
                          >
                            <S.ArticleImgBarDivImg
                              src={imageUrl}
                              alt={`Image ${index + 1}`}
                            />
                          </S.ArticleImgBarDiv>
                        ))}
                    </S.ArticleImgBar>
                    <S.ArticleImgBarMob>
                      <S.ImgBarMobCircleActive />
                      <S.ImgBarMobCircle />
                      <S.ImgBarMobCircle />
                      <S.ImgBarMobCircle />
                      <S.ImgBarMobCircle />
                    </S.ArticleImgBarMob>
                  </S.ArticleFillImg>
                </S.ArticleLeft>

                <S.ArticleRight>
                  <S.ArticleBlock>
                    <S.ArticleTitle>{currentAds?.title}</S.ArticleTitle>
                    <S.ArticleInfo>
                      <S.ArticleDate>
                        {' '}
                        {currentAds && formatTime(currentAds.created_on)}
                      </S.ArticleDate>
                      <S.ArticleCity>{currentAds?.user.city}</S.ArticleCity>
                      <S.ArticleLink
                        onClick={(e) => {
                          e.preventDefault()
                          setIsModalOpenReviews(true)
                        }}
                        href=""
                        target="_blank"
                        rel=""
                      >
                        Отзывы: {adComments ? adComments.length : '...'}
                      </S.ArticleLink>
                    </S.ArticleInfo>
                    <S.ArticlePrice>
                      {currentAds?.price.toLocaleString('ru-RU')} ₽
                    </S.ArticlePrice>

                    {showEdit ? (
                      <S.ArticleBtnBlock>
                        <S.ArticleBtnReact onClick={openModal}>
                          Редактировать
                        </S.ArticleBtnReact>
                        <S.ArticleBtnRemove
                          onClick={
                            DeleteAtdFunc
                          }
                        >
                          Снять с публикации
                        </S.ArticleBtnRemove>
                      </S.ArticleBtnBlock>
                    ) : (
                      <S.ArticleBtnReact>
                        Показать телефон
                        <br />8 984 ХХХ ХХХ
                      </S.ArticleBtnReact>
                    )}
                    <S.ArticleAuthor>
                      <S.AuthorImg>
                        <S.AuthorImgImg src="" alt="" />
                      </S.AuthorImg>
                      <S.AuthorCont>
                      <S.AuthorName>
                          {/* стилизовать линк */}
                          <Link to={`/seller/${idSeller}`}>
                            {data.user.name}
                          </Link>
                        </S.AuthorName>
                        <S.AuthorAbout>
                          {currentAds &&
                            formatDate(currentAds?.user.sells_from)}
                        </S.AuthorAbout>
                      </S.AuthorCont>
                    </S.ArticleAuthor>
                  </S.ArticleBlock>
                </S.ArticleRight>
              </S.ArticContent>
            </S.MainArtic>

            <S.MainContainer>
              <S.MainTitle>Описание товара</S.MainTitle>
              <S.MainContent>
                <S.MainText>{currentAds?.description}</S.MainText>
              </S.MainContent>
            </S.MainContainer>
            {isModalOpenReviews && (
              <ReviewsModal
                onClose={() => setIsModalOpenReviews(false)}
                comments={advComments}
                advId={adId}
              />
            )}
          </S.Main>

          <Footer />
        </S.Container>
        {isModalOpen && (
          <EditModal
            data={currentAds}
            onClose={closeModal}
            setCurrentAds={setCurrentAds}
            updateAdData={updateAdData}
          />
        )}
      </S.Wrapper>
    </div>
  )
}

export default AdDetails
