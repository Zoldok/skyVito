import { Link, useNavigate, useParams } from 'react-router-dom'
import {Footer} from '../../components/Footer/Footer'
import {Header} from '../../components/Header/Header'
import {MainMenu} from '../../components/MainMenu/MainMenu'
import * as S from './SellerProfile.styled'
import {AdsComponent} from '../../components/AdsComponent/AdsComponent'
import { useGetAllUserQuery } from '../../store/Service/Service'
import { useSelector } from 'react-redux'
import { formatDate } from '../../utils/FormatteDate'
import { useState } from 'react'
import {Preloader} from '../../components/Preloader/Preloader'

export const SellerProfile = () => {
  const navigate = useNavigate()
  const { idSeller } = useParams()
  const { data } = useGetAllUserQuery()
  const ads = useSelector((state) => state.user.ads)
  const [showFullNumber, setShowFullNumber] = useState(false)

  let userAds = null
  let matchedAds = []

  const handleGoBack = () => {
    navigate(-1)
  }
  
  if (data) {
    data.forEach((item) => {
      if (item.id === parseInt(idSeller, 10)) {
        userAds = item
      }
    })
  }

  if (!userAds) {
    return <Preloader />
  }
  const phoneNumber = userAds?.phone || 'Номер отсутствует'

  const handleButtonClick = () => {
    setShowFullNumber(true)
  }

  ads.forEach((ad) => {
    if (ad.user.id === userAds.id) {
      matchedAds.push(ad)
    }
  })

  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <S.MainContainer>
          <S.MainCenterBlock>
            <MainMenu />
            <S.ContainerHeadBtn>
            <S.ArticleFillImgArrow src={'../img/back1.svg'} onClick={handleGoBack} />
            <S.MainH2>Профиль продавца</S.MainH2>
            </S.ContainerHeadBtn>
            <S.MainProfileSell>
              <S.ProfileSellContent>
                <S.ProfileSell>
                  <S.SellerLeft>
                    <S.SellerImg>
                      <Link href="" target="_self">
                        <S.SellerImgImg
                          src={
                            userAds.avatar
                              ? `http://127.0.0.1:8090/${userAds.avatar}`
                              : '../img/noAva.png'
                          }
                          alt="avatar"
                        />
                      </Link>
                    </S.SellerImg>
                  </S.SellerLeft>
                  <S.SellerRight>
                    <S.SellerTitle>{userAds.name}</S.SellerTitle>
                    <S.SellerCity>{userAds.city}</S.SellerCity>
                    <S.SellerCity>
                      {formatDate(userAds.sells_from)}
                    </S.SellerCity>
                    <S.SellerImgMobBlock>
                      <S.SellerImgMob>
                      <Link href="" target="_self">
                          <S.SellerImgMobImg
                            src={
                              userAds.avatar
                                ? `http://127.0.0.1:8090/${userAds.avatar}`
                                : '../img/noAva.png'
                            }
                            alt="avatar"
                          />
                        </Link>
                      </S.SellerImgMob>
                    </S.SellerImgMobBlock>
                    <S.SellerBtn onClick={handleButtonClick}>
                      {showFullNumber ? (
                        phoneNumber
                      ) : (
                        <span>
                          {phoneNumber === 'Номер отсутствует' ? (
                            phoneNumber
                          ) : (
                            <>
                              Показать телефон
                              <br />
                              {phoneNumber.slice(0, 5)}XXX ХХХ
                            </>
                          )}
                        </span>
                      )}
                    </S.SellerBtn>
                  </S.SellerRight>
                </S.ProfileSell>
              </S.ProfileSellContent>
            </S.MainProfileSell>
            <S.MainTitle>Товары продавца</S.MainTitle>
          </S.MainCenterBlock>
          <S.ContentCards>
            <AdsComponent ads={matchedAds} />
          </S.ContentCards>
        </S.MainContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}
