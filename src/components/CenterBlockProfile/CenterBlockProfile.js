import MainMenu from '../MainMenu/MainMenu'
import * as S from './CenterBlockProfile.styled'

const CenterBlockProfile = () => {
  return (
    <S.MainCenterBlock>
      <MainMenu />
      <S.MainH2>Здравствуйте, Антон!</S.MainH2>
      <S.MainProlile>
        <S.ProfileContent>
          <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
          <S.ProfileSettings>
            <S.SettingsLeft>
              <S.SettingsImg>
                <a href="" target="_self">
                  <S.SettingImgImg src="#" alt="" />
                </a>
              </S.SettingsImg>
              <S.SettingsChangePhoto href="" target="_self">
                Заменить
              </S.SettingsChangePhoto>
            </S.SettingsLeft>
            <S.SettingsRight>
              <S.SettingForm action="#">
                <S.SettingsDiv>
                  <S.Label htmlFor="fname">Имя</S.Label>
                  <S.SettingInputAll
                    id="settings-fname"
                    name="fname"
                    type="text"
                    defaultValue="Ан"
                    placeholder=""
                  />
                </S.SettingsDiv>
                <S.SettingsDiv>
                  <S.Label htmlFor="lname">Фамилия</S.Label>
                  <S.SettingInputAll
                    id="settings-lname"
                    name="lname"
                    type="text"
                    defaultValue="Городецкий"
                    placeholder=""
                  />
                </S.SettingsDiv>
                <S.SettingsDiv>
                  <S.Label htmlFor="city">Город</S.Label>
                  <S.SettingInputAll
                    id="settings-city"
                    name="city"
                    type="text"
                    defaultValue="Санкт-Петербург"
                    placeholder=""
                  />
                </S.SettingsDiv>
                <S.SettingsDiv>
                  <S.Label htmlFor="phone">Телефон</S.Label>
                  <S.SettingInputPhone
                    id="settings-phone"
                    name="phone"
                    type="tel"
                    defaultValue={89161234567}
                    placeholder={+79161234567}
                  />
                </S.SettingsDiv>
                <S.SettingBtn id="settings-btn">Сохранить</S.SettingBtn>
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
