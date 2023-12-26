import { styled } from 'styled-components'
const maxMobileWidthTwo = '600px'

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
  @media screen and (max-width: 380px) {
    background-color: transparent; /* Убираем задний фон */
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
    // position: absolute;
    z-index: 1;
    // left: -5px;
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
    height: 560px;
    padding: 0 20px 0;
    border-radius: 0px;
  }
`

export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    &:before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 77px;
      left: 20px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 380px) {
    font-size: 24px;
    line-height: 29px;
    position: relative;
    // left: -20px;
    margin-top: 30px;
    padding-bottom: 20px;
    &:before {
      content: '';
      display: block;
      width: 15px;
      height: 15px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: -51px;
      cursor: pointer;
    }
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
    font-size: 16px;
    line-height: 24px;
    color: #009EE4; 
    padding-bottom: 6px;
  }
`

export const FormNewArtLabel2 = styled.label`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    font-size: 16px;
    line-height: 24px; 
    padding-top: 18px;  
    padding-bottom: 6px;
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
      resize: none;
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

export const FormNewArtSpan = styled.span`
  margin-left: 10px;
  color: red;
  @media screen and (max-width: ${maxMobileWidthTwo}) {
    display: block;
    margin-left: 0px;
    margin-bottom: 9px;
    margin-top: 25px;
    color: rgba(0, 0, 0, 0.3);

  }
`

export const FormNewArtiLabel = styled.label`
padding-bottom: 6px;
`

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

export const FormNewArtBtnPub = styled.button`
font-size: 16px;
line-height: 1;
color: #FFFFFF;
width: 154px;
height: 50px;
margin: 10px 7px 0;
border-radius: 6px;
background-color: #009EE4;
border: 1px solid #009EE4;
  
  &:disabled {
    background-color: #CCCCCC; /* Серый цвет для неактивной кнопки */
    border-color: #CCCCCC; 
    color: #777777; 
    // cursor: not-allowed; /*значок стоп*/
  }

  &:not(:disabled):hover {
    background-color: #0080C1; /* Изменяем цвет фона при наведении, но только если кнопка не является неактивной */
  }

@media screen and (max-width: ${maxMobileWidthTwo}) {
  font-size: 16px;
  line-height: 1;
  width: 100%;
  height: 46px;
  margin: 20px 0px 0;
}
`

export const ErrorMessage = styled.div`
color: red;
font-size: 14px;
margin-top: 5px;
`