import { styled } from 'styled-components'

const maxMobileWidthTwo = '620px'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    background-color: #ffffff;
  }
`

export const ModalBlock = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  -webkit-transition: opacity 200ms ease-in;
  -moz-transition: opacity 200ms ease-in;
  transition: opacity 200ms ease-in;
  pointer-events: auto;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    position: absolute;
    z-index: 1;
    opacity: 1;
  }
`

export const ModalContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: center;
    width: 100%;
    min-width: 320px;
    // height: auto;
    padding: 0 20px 0;
    padding-bottom: 60px;
  }
`

export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  white-space: nowrap;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    padding-top: 50px;
    padding-left: 40px;
  }

  @media screen and (max-width: 380px) {
    font-size: 24px;
    line-height: 29px;
    padding-top: 70px;
    padding-left: 40px;
  }
`
export const ArticleFillImgArrow = styled.img`
  display: none;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: block;
    width: 60px;
    height: 60px;
    transform: scaleX(-1);
    position: absolute;
    left: 0px;
    top: 54px;
  }
`

export const ModalBtnClose = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin-top: 10px;
  }
`

export const ModalBtnCloseLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &:hover {
    background-color: #0080c1;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: none;
  }
`

export const ModalFormNewArt = styled.form`
  margin-top: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin-top: 10px;
  }
`

export const FormNewArtBlock = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 2px;
  }
`

export const FormNewArtLabel = styled.label`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
`
export const FormNewArtInput = styled.input`
  font-size: 16px;
  line-height: 24px;
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;

  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
      &:-ms-input-placeholder {
        font-size: 14px;
        line-height: 21px;
        color: #c4c4c4;
        &::-ms-input-placeholder {
          font-size: 14px;
          line-height: 21px;
          color: #c4c4c4;
          &::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #c4c4c4;
          }
        }
      }
    }
  }
`
export const FormNewArtArea = styled.textarea`
  font-size: 16px;
  line-height: 24px;
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  &::-webkit-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &:-ms-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::-ms-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    max-height: 107px;
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
      &:-ms-input-placeholder {
        font-size: 14px;
        line-height: 21px;
        color: #c4c4c4;
        &::-ms-input-placeholder {
          font-size: 14px;
          line-height: 21px;
          color: #c4c4c4;
          &::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #c4c4c4;
          }
        }
      }
    }
  }
`

export const FormNewArtP = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 10px;
    &:span {
      margin-left: 10px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
`
export const FormNewArtSpan = styled.span`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: block;
    margin-left: 0px;
    margin-bottom: 9px;
    margin-top: -9px;
    color: rgba(0, 0, 0, 0.3);
  }
`
export const FormNewArtBarImg = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    margin: 0px -5px 10px;
    overflow: hidden;
    overflow: auto;
  }
`
export const FormNewArtBarImgCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`

export const FormNewArtBarImgCover2 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`
export const FormNewArtImg = styled.div`
  width: 154px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: block;
    width: 100px;
    min-width: 90px;
    height: 90px;
    background-color: #f0f0f0;
    margin: 0 5px;
  }
`

export const FormNewArtImg2 = styled.div`
  width: 100%;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: block;
    width: 100px;
    min-width: 90px;
    height: 90px;
    background-color: #f0f0f0;
    margin: 0 5px;
  }
`

export const FormNewArtImgImg = styled.img`
  display: block;
  width: 90px;
  height: 90px;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 2;

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: block;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
`
export const FormNewArtiLabel = styled.label``

export const FormNewArtInputPrice = styled.input`
  width: 200px;
  color: #000000;
  font-size: 16px;
  line-height: 24px;
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;

  &::-webkit-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  &:-ms-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  &::-ms-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  &::placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    width: 100%;
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
      &:-ms-input-placeholder {
        font-size: 14px;
        line-height: 21px;
        color: #000000;
        &::-ms-input-placeholder {
          font-size: 14px;
          line-height: 21px;
          color: #000000;
          &::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #000000;
          }
        }
      }
    }
  }
`

export const FormNewArtInputPriceCover = styled.input`
width: 24px;
height: 24px;
font-size: 16px;
line-height: 24px;
color: #000000;
position: absolute;
bottom: 13px;
left: 170px;
z-index: 0;
background-color: #FFFFFF;

&::after {
  content: "\A0 \20BD";
  width: 24px;
  height: 24px;
  position: absolute;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  z-index: 2;
}

@media screen and (max-width: ${maxMobileWidthTwo}) {
  width: 100%;
  height: 21px;
  font-size: 14px;
  line-height: 21px;
  bottom: 9px;
  left: auto;
  right: 18px;
}
`

export const FormNewArtBtnPub = styled.button`
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  border-radius: 6px;
  background-color: #009ee4;
  border: 1px solid #009ee4;

  &:disabled {
    background-color: #cccccc;
    border-color: #cccccc;
    color: #777777;
    // cursor: not-allowed; /*значок стоп*/
  }

  &:not(:disabled):hover {
    background-color: #0080c1;
  }

  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
  }
`

export const DeleteImageBtn = styled.button`
  position: fixed;
  width: 20px;
  height: 20px;
  border: transparent;
  background-color: transparent;
  color: red;
  transition: all 0.3s;
  color: black;
  font-weight: 700;
  z-index: 1;

  &:hover {
    scale: 1.1;
  }
`

export const DeleteImageBtn2 = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 5px;
  right: 5px;
  border: transparent;
  background-color: transparent;
  color: red;
  transition: all 0.3s;
  color: black;
  font-weight: 700;
  z-index: 1;

  &:hover {
    scale: 1.1;
  }
`

export const BlurredImage = styled.img`
  filter: blur(5px);
`
export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`
