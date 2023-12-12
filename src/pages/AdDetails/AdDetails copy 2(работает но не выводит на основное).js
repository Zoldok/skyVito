import { useParams } from 'react-router-dom'
import { useGetAdsIdQuery } from '../../store/Service/Service'
import * as S from './AdDetails.styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { useAuth } from '../../hooks/use-auth'
import './my-article.css'
import MainMenu from '../../components/MainMenu/MainMenu'
import { formatDate } from '../../utils/FormatteDate'
import { formatTime } from '../../utils/FormatteTime'

const AdDetails = () => {
  const { adId } = useParams()
  // console.log(adId)
  const { isAuth } = useAuth()
  // запрос на получение обьявления по Id
  const { data, isLoading } = useGetAdsIdQuery(adId)

  const imageUrls = data?.images?.map(
    (image) => `http://127.0.0.1:8090/${image.url}`
  )

  console.log(data)
  if (isLoading || !data) return <div>идет загрузка</div>

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
                        src={`http://127.0.0.1:8090/${data?.images[0]?.url}`}
                        alt=""
                      />
                    </S.ArticleImg>
                    <S.ArticleImgBar>
                      {imageUrls &&
                        imageUrls.map((imageUrl, index) => (
                          <S.ArticleImgBarDiv key={index}>
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

                    {isAuth ? (
                      <S.ArticleBtnBlock>
                        <S.ArticleBtnReact>Редактировать</S.ArticleBtnReact>
                        <S.ArticleBtnRemove>
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
                        <S.AuthorName>{data.user.name}</S.AuthorName>
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
      </S.Wrapper>
    </div>
  )
}

export default AdDetails
