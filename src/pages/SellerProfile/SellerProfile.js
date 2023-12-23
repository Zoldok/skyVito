import { Link, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MainMenu from '../../components/MainMenu/MainMenu'
import * as S from './SellerProfile.styled'
import AdsComponent from '../../components/AdsComponent/AdsComponent'

const SellerProfile = () => {
  const { idSeller } = useParams()

  console.log('id продавца',idSeller);
  //записать данные user из обьявления в состояние в AdDetail, и тут их вытащить для отображения
  //сделать запрос на обьявления по id и передать пропсом в adsComponent
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
                        <S.SellerImgImg src="#" alt="" />
                      </Link>
                    </S.SellerImg>
                  </S.SellerLeft>
                  <S.SellerRight>
                    <S.SellerTitle>Кирилл Матвеев</S.SellerTitle>
                    <S.SellerCity>Санкт-Петербург</S.SellerCity>
                    <S.SellerCity>Продает товары с августа 2021</S.SellerCity>
                    <S.SellerImgMobBlock>
                      <S.SellerImgMob>
                        <Link href="" target="_self">
                          <S.SellerImgMobImg src="#" alt="" />
                        </Link>
                      </S.SellerImgMob>
                    </S.SellerImgMobBlock>
                    <S.SellerBtn>
                      Показать&nbsp;телефон
                      <S.SellerBtnSpan>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</S.SellerBtnSpan>
                    </S.SellerBtn>
                  </S.SellerRight>
                </S.ProfileSell>
              </S.ProfileSellContent>
            </S.MainProfileSell>
            <S.MainTitle>Товары продавца</S.MainTitle>
          </S.MainCenterBlock>

          <S.ContentCards>
          <AdsComponent/>
          </S.ContentCards>
        </S.MainContainer>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}

export default SellerProfile



// {/* <div className="main__content">
// <div className="content__cards cards"></div>
// </div> */}