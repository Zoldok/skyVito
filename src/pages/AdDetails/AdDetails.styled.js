import styled from 'styled-components'
import { Link } from 'react-router-dom'
const maxMobileWidthTwo = '768px'
const maxMobileWidth = '966px'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    min-width: 320px;
  }
`

export const Main = styled.main`
  margin: 0 auto;
`

export const MainArtic = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    max-width: 1178px;
    width: 100%;
    padding: 55px 0 0px;
    margin: 0 auto;
  }
`

export const ArticContent = styled.div`
  display: flex;
  align-items: top;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const ArticleLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;

  @media screen and (max-width: ${maxMobileWidth}) {
    margin-right: 20px;
  }

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    max-width: 100%;
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-bottom: 20px;
  }
`

export const ArticleFillImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`

export const ArticleImg = styled.div`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    height: 320px;
    margin: 0 0px;
  }
`

export const ArticleImgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ArticleImgBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: none;
  }
`

export const ArticleImgBarDiv = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;
  display: flex;

  &:hover {
    border: 2px solid #009ee4;
  }
`
export const ArticleImgBarDivImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`

export const ArticleImgBarMob = styled.div`
  display: none;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: block;
    width: 68px;
    height: 8px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 34px);
    display: flex;
    justify-content: center;
  }
`

export const ImgBarMobCircle = styled.div`
  background-color: #ffffff;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    background-color: #0080c1;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    &:hover {
      background-color: red;
    }
  }
`

export const ImgBarMobCircleActive = styled(ImgBarMobCircle)`
  &:active {
    background-color: #ffffff;
  }
`

export const ArticleImgBarDivMob = styled.div`
  margin: 0 5px;
  display: flex;

  &:hover {
    border: 2px solid #009ee4;
  }
`
export const ArticleRight = styled.div`
  max-width: 621px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }
`

export const ArticleBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const ArticleTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 32px;
  line-height: 46px;
  color: #000000;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 1;
  }
`

export const ArticleInfo = styled.div`
  margin-bottom: 34px;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin-bottom: 20px;
  }
`
export const ArticleDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`
export const ArticleCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`

export const ArticleLink = styled.a`
  font-size: 16px;
  line-height: 21px;
  color: #009ee4;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 14px;
    line-height: 19px;
    color: #009ee4;
  }
`

export const ArticlePrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`

export const ArticleBtnBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ArticleBtnReact = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #ffffff;
  margin-bottom: 10px;
  width: 189px;
  margin-right: 10px;

  &:hover {
    background-color: #0080c1;
  }

  @media screen and (max-width: ${maxMobileWidth}) {
    width: 225px;
    margin-right: 0;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`

export const ArticleBtnReact2 = styled.button`
  margin-top: 20px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background-color: #0080c1;
  }

  @media screen and (max-width: ${maxMobileWidth}) {
    width: 225px;
    margin-right: 0;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`

export const ArticleBtnRemove = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #ffffff;
  margin-bottom: 10px;
  width: 225px;

  &:hover {
    background-color: #0080c1;
  }

  @media screen and (max-width: ${maxMobileWidth}) {
    width: 225px;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`

export const ArticleAuthor = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

export const AuthorImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
`
export const AuthorImgImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`
export const AuthorCont = styled.div`
  margin-left: 12px;
`

export const AuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
  }
`

export const AuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 14px;
    line-height: 28px;
  }
`

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    padding: 0 20px 0;
  }
`

export const MainTitle = styled.h3`
  margin-bottom: 32px;
  padding: 0 5px;
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin-bottom: 14px;
    padding: 0;
    font-size: 18px;
    line-height: 1;
  }
`

export const MainContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 84px;
  }
`

export const MainText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`
export const LinkBt = styled(Link)`
  color: #009ee4;
`
export const ArticleFillImgArrow = styled.img`
  display: none;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: block;
    width: 60px;
    height: 60px;
    transform: scaleX(-1);
    position: absolute;
    left: 10px;
    top: 5px;
    &:hover {
      color: red;
    }
  }
`
