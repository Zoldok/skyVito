import styled from 'styled-components'
const maxMobileWidth = '890px'
const maxMobileWidthTwo = '620px'

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

// export const Main = styled.main``

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
`

