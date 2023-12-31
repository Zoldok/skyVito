import React, { useState } from 'react'
import * as S from './Login.styled'
import { loginUser } from '../../store/Service/api'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setErrorMessage('Пожалуйста, заполните все поля')
      return
    }

    try {
      const response = await loginUser(email, password)
      console.log(response)
      localStorage.setItem('email', email)
      localStorage.setItem('access_token', response.access_token)
      localStorage.setItem('refresh_token', response.refresh_token)
      navigate('/')
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo-reg.png" alt="logo" />
            </S.ModalLogo>
            <S.ModalInputLogin
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.ModalInput
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.ErrorDiv>{errorMessage}</S.ErrorDiv>
            <S.ModalBtnEnter id="btnEnter" onClick={handleLogin}>
              <S.ModalBtnEnterA href="#">Войти</S.ModalBtnEnterA>
            </S.ModalBtnEnter>
            <S.ModalBtnSingup id="btnSignUp">
              <S.ModalBtnSingupA href="/register">
                Зарегистрироваться
              </S.ModalBtnSingupA>
            </S.ModalBtnSingup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}
