import styled, { keyframes } from 'styled-components'

export const HeaderStyleMyProfile = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`
const rippleAnimation = keyframes`
  0% {
    top: 96px;
    left: 96px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 18px;
    left: 18px;
    width: 156px;
    height: 156px;
    opacity: 0;
  }
`

export const RippleLoaderContainer = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #f1f2f3;
`

export const RippleLoader = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`

export const RippleDiv = styled.div`
  position: absolute;
  border-width: 4px;
  border-style: solid;
  opacity: 1;
  border-radius: 50%;
  animation: ${rippleAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  &:nth-child(1) {
    border-color: #94ff4d;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    border-color: #33aaf9;
    animation-delay: -0.5s;
  }
`
