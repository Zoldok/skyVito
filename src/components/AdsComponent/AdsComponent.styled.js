import styled from 'styled-components'

const maxMobileWidthTwo = '620px'

export const CardsItem = styled.div`
  margin: 0;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin: 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`
export const CardsCard = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 157px;
    // height: 293px;
    height: 320px;
    display: flex;
    flex-direction: column;
  }
`
export const CardsImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 157px;
    height: 152px;
    background-color: #d9d9d9;
  }
`
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
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
`

export const CardTitle = styled.h3`
  height: 25px;
  // font-size: 22px;
  // font-weight: 500;
  // line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    // height: 16px;
    height: 43px;
    // height: auto;
    // font-size: 14px;
    // line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
    width: 135px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`

export const CardPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    line-height: 24px;
  }
`

export const CardPlaceDate = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    color: #5f5f5f;
  }
`

export const CardPlace = styled(CardPlaceDate)`
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin-bottom: 4px;
    font-size: 14px;
  }
`
export const CardDate = styled(CardPlaceDate)``
