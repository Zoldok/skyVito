import { Link, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MainMenu from '../../components/MainMenu/MainMenu'
import * as S from './SellerProfile.styled'
import AdsComponent from '../../components/AdsComponent/AdsComponent'
import { useGetAllUserQuery } from '../../store/Service/Service'
import { useSelector } from 'react-redux'
import { formatDate } from '../../utils/FormatteDate'
import { useState } from 'react'

const SellerProfile = () => {
  const { idSeller } = useParams()
  // console.log('id продавца', typeof idSeller) //строка а id пользователя число
  const { data } = useGetAllUserQuery()
  const ads = useSelector((state) => state.user.ads)
  const [showFullNumber, setShowFullNumber] = useState(false)

  let userAds = null
  let matchedAds = []

  if (data) {
    data.forEach((item) => {
      if (item.id === parseInt(idSeller, 10)) {
        userAds = item
      }
    })
  }
  // console.log('все обьявления ', ads)
  if (!userAds) return <div>load</div>
  const phoneNumber = userAds?.phone || 'Номер отсутствует'
  // const phoneNumber = showFullNumber
  //   ? userAds?.phone
  //   : `${userAds?.phone.slice(0, 4)}XXXX`

  const handleButtonClick = () => {
    setShowFullNumber(true)
  }
  // console.log('id продацва на странице', userAds.id)
  // Перебор каждого объявления и сравнение с userAds.id
  ads.forEach((ad) => {
    if (ad.user.id === userAds.id) {
      matchedAds.push(ad)
    }
  })

  console.log('Совпавшие объявления:', matchedAds)

  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <S.MainContainer>
          <S.MainCenterBlock>
            <MainMenu />
            <S.MainH2>Профиль продавца</S.MainH2>
            <S.MainProfileSell>
              <S.ProfileSellContent>
                <S.ProfileSell>
                  <S.SellerLeft>
                    <S.SellerImg>
                      <Link href="" target="_self">
                        <S.SellerImgImg
                          src={`http://localhost:8090/${userAds.avatar}`}
                          alt=""
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
                          <S.SellerImgMobImg src="#" alt="" />
                        </Link>
                      </S.SellerImgMob>
                    </S.SellerImgMobBlock>
                    <S.SellerBtn onClick={handleButtonClick}>
                      {showFullNumber ? (
                        phoneNumber
                      ) : (
                        <span>
                          {phoneNumber === 'Номер отсутствует' ? ( // Проверка отсутствия номера
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

export default SellerProfile
