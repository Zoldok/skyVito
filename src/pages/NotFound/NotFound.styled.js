import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #f0f0f0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Message = styled.h1`
  color: #009ee4;
  font-family: Roboto;
  font-size: 140px;
  font-style: normal;
  font-weight: 500;
`
export const TextMessage = styled.h2`
  color: #009ee4;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  // line-height: 220%; /* 88px */
`