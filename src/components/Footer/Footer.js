import { useNavigate } from 'react-router-dom'
import * as S from './Footer.styled'
import { useState } from 'react'
import AddModal from '../Modal/AddModal/AddModal'

const Footer = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterImg onClick={() => navigate('/')}>
          <a target="_self">
            <S.FooterImgImg src="../img/footer1.svg" alt="home" />
          </a>
        </S.FooterImg>
        <S.FooterImg onClick={openModal}>
          <a target="_self">
            <S.FooterImgImg src="../img/footer2.png" alt="addAds" />
          </a>
        </S.FooterImg>
        <S.FooterImg
          onClick={() => {
            navigate('/profile')
          }}
        >
          <a target="_self">
            <S.FooterImgImg src="../img/footer3.svg" alt="profile" />
          </a>
        </S.FooterImg>
      </S.FooterContainer>
      {isModalOpen && <AddModal onClose={closeModal} />}
    </S.Footer>
  )
}

export default Footer
