import {   useNavigate, useParams } from 'react-router-dom'
import {
  useDelAdsIdMutation,
  useGetAdsIdQuery,
  useGetAdsQuery,
} from '../../store/Service/Service'
import * as S from './AdDetails.styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { useAuth } from '../../hooks/use-auth'
import MainMenu from '../../components/MainMenu/MainMenu'
import { formatDate } from '../../utils/FormatteDate'
import { formatTime } from '../../utils/FormatteTime'
import { useEffect, useState } from 'react'
import EditModal from '../../components/Modal/EditModal/EditModal'
import { Link } from 'react-router-dom'
import { setAds } from '../../store/slices/userSlice'
import { useDispatch } from 'react-redux'

const AdDetails = () => {
  const { adId } = useParams()
  const navigate = useNavigate()
  const { isAuth } = useAuth()
  // запрос на получение обьявления по Id
  const { data, isLoading } = useGetAdsIdQuery(adId)
  //вытащить данные из стейта
  // const ads = useSelector((state) => state.user.ads)
  const dispatch = useDispatch()

  
  const [DeteleAds] = useDelAdsIdMutation(adId)

  let showEdit = false
  // const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true) // Открываем модальное окно
  }

  const closeModal = () => {
    setIsModalOpen(false) // Закрываем модальное окно
  }

  const imageUrls = data?.images?.map(
    (image) => `http://127.0.0.1:8090/${image.url}`
  )

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const handleImageClick = (index) => {
    setSelectedImageIndex(index)
  }

  // const DeleteAtdFunc = async () => {
  //   DeteleAds(
  //     {adId: adId}
  //   )
  //   navigate('/')
  // }

  //новый запрос на получение всех обьявлений
  const {data: dataAll, isLoading: isis, refetch} = useGetAdsQuery()

  useEffect(()=> {
    if(!isis) {
      dispatch(setAds(dataAll))
    }
  }, [data])

  const DeleteAtdFunc = async (e) => {
    e.preventDefault()
    try {
      const result = await DeteleAds({ adId: adId })
      console.log(result)
      refetch()

      navigate('/')
    } catch (error) {
      console.log('ошибка')
    }
  }
  // console.log('текущее объявление', data)
  const currentUser = localStorage.getItem('id_сur_user')

  if (isLoading || !data) return <div>идет загрузка</div>

  if (isAuth) {
    localStorage.setItem('id_seller', data.user.id)
    // console.log('id продавца', data.user.id)
  }
  // console.log('id текущего пользователя', currentUser)
  if (data.user.id === parseInt(currentUser, 10)) {
    showEdit = true
  }
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
                        src={`http://127.0.0.1:8090/${data?.images[selectedImageIndex]?.url}`}
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
                    <S.ArticleTitle>{data.title}</S.ArticleTitle>
                    <S.ArticleInfo>
                      <S.ArticleDate>
                        {' '}
                        {formatTime(data.created_on)}
                      </S.ArticleDate>
                      <S.ArticleCity>{data.user.city}</S.ArticleCity>
                      <S.ArticleLink href="" target="_blank" rel="">
                        4 отзыва
                      </S.ArticleLink>
                    </S.ArticleInfo>
                    <S.ArticlePrice>
                      {data.price.toLocaleString('ru-RU')} ₽
                    </S.ArticlePrice>

                    {showEdit ? (
                      <S.ArticleBtnBlock>
                        <S.ArticleBtnReact onClick={openModal}>
                          Редактировать
                        </S.ArticleBtnReact>
                        <S.ArticleBtnRemove
                          onClick= {
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
                          {formatDate(data.user.sells_from)}
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
                <S.MainText>{data.description}</S.MainText>
              </S.MainContent>
            </S.MainContainer>
          </S.Main>

          <Footer />
        </S.Container>
        {isModalOpen && <EditModal data={data} onClose={closeModal} />}
      </S.Wrapper>
    </div>
  )
}

export default AdDetails
