import { useState } from 'react'
import MainMenu from '../MainMenu/MainMenu'
import * as S from './CenterBlockProfile.styled'
import {
  useUploadUserAvatarMutation,
  useUserUpdateMutation,
} from '../../store/Service/Service'


const CenterBlockProfile = ({ currentUser }) => {
  const [UpdateUser] = useUserUpdateMutation()
  const [uploadUserAvatar] = useUploadUserAvatarMutation()
  const [name, setName] = useState(currentUser.name || '')
  const [surName, setSurName] = useState(currentUser.surname || '')
  const [city, setCity] = useState(currentUser.city || '')
  const [phone, setPhone] = useState(currentUser.phone || '')
  const [avatarUrl, setAvatarUrl] = useState(currentUser.avatar)


  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedUserData = {
      name: name,
      surname: surName,
      city: city,
      phone: phone,
    }

    await UpdateUser(updatedUserData)
      .unwrap()
      .then((data) => {

        console.log('Данные пользователя успешно обновлены', data)
        setName(data.name)
      })
      .catch((error) => {
        console.error('Ошибка при обновлении данных пользователя', error)
      })
  }

  const handleImageClick = () => {
    const fileInput = document.getElementById('file-input')
    fileInput.click()
  }

  const handleImageChange = async (e) => {
    const file = e.target.files[0]

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await uploadUserAvatar(formData)
      const updatedUserData = response.data
      setAvatarUrl(updatedUserData.avatar)
      console.log('Фото профиля успешно изменено')
    } catch (error) {
      console.error('Ошибка при изменении фото профиля', error)
    }
  }
  return (
    <S.MainCenterBlock>
      <MainMenu />
      <S.MainH2>Здравствуйте, {name}!</S.MainH2>
      <S.MainProlile>
        <S.ProfileContent>
          <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
          <S.ProfileSettings>
            <S.SettingsLeft>
              <S.SettingsImg>
                <S.SettingImgImg
                  alt=""
                  src={`http://127.0.0.1:8090/${avatarUrl}`}
                />
              </S.SettingsImg>
              <S.SettingsChangePhoto onClick={handleImageClick}>
                Заменить
                <input
                  id="file-input"
                  type="file"
                  hidden
                  onChange={(e) => handleImageChange(e)}
                />
              </S.SettingsChangePhoto>
            </S.SettingsLeft>
            <S.SettingsRight>
              <S.SettingForm>
                <S.SettingsDiv>
                  <S.Label htmlFor="fname">Имя</S.Label>
                  <S.SettingInputAll
                    id="settings-fname"
                    name="fname"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </S.SettingsDiv>
                <S.SettingsDiv>
                  <S.Label htmlFor="lname">Фамилия</S.Label>
                  <S.SettingInputAll
                    id="settings-lname"
                    name="lname"
                    type="text"
                    value={surName}
                    onChange={(e) => setSurName(e.target.value)}
                  />
                </S.SettingsDiv>
                <S.SettingsDiv>
                  <S.Label htmlFor="city">Город</S.Label>
                  <S.SettingInputAll
                    id="settings-city"
                    name="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </S.SettingsDiv>
                <S.SettingsDiv>
                  <S.Label htmlFor="phone">Телефон</S.Label>
                  <S.SettingInputPhone
                    id="settings-phone"
                    name="phone"
                    type="tel"
                    placeholder="введите номер"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </S.SettingsDiv>
                <S.SettingBtn onClick={handleSubmit}>Сохранить</S.SettingBtn>
              </S.SettingForm>
            </S.SettingsRight>
          </S.ProfileSettings>
        </S.ProfileContent>
      </S.MainProlile>
      <S.MainTitle>Мои товары</S.MainTitle>
    </S.MainCenterBlock>
  )
}

export default CenterBlockProfile
