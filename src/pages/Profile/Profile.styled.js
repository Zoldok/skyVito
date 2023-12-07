import styled from 'styled-components';
const maxMobileWidth = '890px';
const maxMobileWidthTwo = '620px';
const maxMobileWidthThree = '1158px';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    min-width: 320px;
  }
`;
export const Header = styled.header`
  background-color: #009ee4;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    height: 55px;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
  }
`;

export const HeaderNav = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: end;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    height: 55px;
    justify-content: start;
    padding: 0 20px;
  }
`;
export const Logo = styled.div`
  display: none;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: block;
  }
`;

export const LogoMobLink = styled.a`
  display: block;
  width: 32px;
  height: 32px;
`;
export const LogoMobImg = styled.img`
  width: 32px;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeaderBtn = styled.button`
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
`;
export const HeaderBtnPutAd = styled(HeaderBtn)`
  width: 232px;
  height: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: none;
  }
`;
export const HeaderBtnLk = styled(HeaderBtn)`
  width: 173px;
  height: 40px;
  margin-left: 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: none;
  }
`;

export const Main = styled.main``;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;

  @media screen and (max-width: ${maxMobileWidth}) {
    padding: 85px 0px 84px;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    padding: 85px 0px 84px;
  }
`;

export const MainCenterBlock = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (max-width: ${maxMobileWidth}) {
    margin: 0 auto;
    padding: 0 20px;
  }

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    margin: 0 auto;
  }
`;
export const ContentCards = styled.div`
max-width: 1158px;
width: 100%;
display: grid;
grid-template-columns: repeat(4, 270px);
grid-auto-rows: 441px;
grid-gap: 40px 26px;
justify-content: center;
overflow-y: auto;
scrollbar-color: #FFFFFF #2E2E2E;
scrollbar-width: thin;
scrollbar-width: 0px;
height: 441px;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }



  @media screen and (max-width: ${maxMobileWidth}) {
    display: grid;
    grid-template-columns: repeat(2, 270px);
  }

  @media screen and (max-width: ${maxMobileWidthThree}) {
    display: grid;
    grid-template-columns: repeat(3, 270px);
  }

    @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: grid;
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    justify-content: center;
    height: 596px;
    
  }

`;
export const CardsItem = styled.div`
  margin: 0;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin: 0;
  }
`;
export const CardsCard = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;

  // @media screen and (max-width: ${maxMobileWidth}) {
  //   display: grid;
  //   grid-template-columns: repeat(2, 270px);
  // }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 137px;
    height: 293px;
    display: flex;
    flex-direction: column;
  }
  // @media screen and (max-width: ${maxMobileWidthThree}) {
  //   display: grid;
  //   grid-template-columns: repeat(3, 270px);
  // }
`;
export const CardsImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
  

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 137px;
    height: 132px;
    background-color: #d9d9d9;
  }
`;
export const CardsImageImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
export const CardContent = styled.div`

`;
export const CardTitle = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
export const CardPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const CardPlaceDate = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;

export const CardPlace = styled(CardPlaceDate)`
  margin-bottom: 4px;
`;
export const CardDate = styled(CardPlaceDate)``;
export const MainMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 11px 0;
  width: 100%;
  padding: 31px 10px 64px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: none;
  }
`;
export const MenuLogoLink = styled.a`
  width: 54;
  height: 50px;
`;
export const MenuLogoImg = styled.img`
  width: 54px;
  height: auto;
`;
export const MenuForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
`;
export const MenuBtn = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  &:hover {
    background-color: #0080c1;
  }
`;
export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
  }
`;
export const MainProlile = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    padding: 0 0 40px;
  }
`;
export const ProfileContent = styled.div`
  max-width: 834px;

  @media screen and (max-width: ${maxMobileWidth}) {
    max-width: 834px;
    width: 100%;
  }
`;
export const ProfileTitle = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1;
  }
`;
export const ProfileSettings = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  @media screen and (max-width: ${maxMobileWidth}) {
    flex-wrap: wrap;
  }
`;
export const SettingsLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 43px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
`;
export const SettingsImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 132px;
    height: 132px;
  }
`;
export const SettingsChangePhoto = styled.a`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
`;
export const SettingsRight = styled.div`
  width: 630px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
  }
`;
export const SettingForm = styled.form`
  width: 630px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const SettingsDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: inline-block;
    margin: 0 0px 18px;
  }
`;
export const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 14px;
    line-height: 21px;
    color: #c4c4c4;
    margin-bottom: 6px;
  }
`;
export const SettingInput = styled.input`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-moz-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    border-radius: 30px;
    padding: 9px 17px;
    &::-moz-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }

`;
export const SettingInputAll = styled(SettingInput)`
  width: 300px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
  width: 100%;
  }
`;
export const SettingInputPhone = styled(SettingInput)`
  width: 614px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
  }
`;
export const SettingImgImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
export const SettingBtn = styled.button`
font-size: 16px;
line-height: 1;
color: #FFFFFF;
width: 154px;
height: 50px;
margin: 10px 7px 0;
background-color: #009EE4;
border-radius: 6px;
border: 1px solid #009EE4;

&:hover {
  background-color: #0080C1;

@media screen and (max-width: ${maxMobileWidthTwo}) {
  font-size: 16px;
  line-height: 1;
  width: 100%;
  height: 46px;
  margin: 8px 0px 0;
}


`;
export const MainTitle = styled.h3`
  margin-bottom: 20px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin-bottom: 30px;
  }
`;
// export const Container = styled.div`
// `
// export const Container = styled.div`
// `
// export const Container = styled.div`
// `
// export const Container = styled.div`
// `
// export const Container = styled.div`
// `
// export const Container = styled.div`
// `
// export const Container = styled.div`
// `
// export const Container = styled.div`
// `
// export const Container = styled.div`
// `
// export const Container = styled.div`
// `
// export const Container = styled.div`
// `
