import { Link } from 'react-router-dom';
import * as S from './Profile.styled';
import './profile.css';

const Profile = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.HeaderNav>
            <S.Logo>
              <S.LogoMobLink>
                <S.LogoMobImg src="img/logo-mob.png" alt="logo" />
              </S.LogoMobLink>
            </S.Logo>

            <S.HeaderBtnPutAd>Разместить объявление</S.HeaderBtnPutAd>
            <S.HeaderBtnLk>Личный кабинет</S.HeaderBtnLk>
          </S.HeaderNav>
        </S.Header>
        <S.Main>
          <S.MainContainer>
            <S.MainCenterBlock>
              <S.MainMenu>
                <S.MenuLogoLink href="" target="_blank">
                  <S.MenuLogoImg src="img/logo.png" alt="logo" />
                </S.MenuLogoLink>
                <S.MenuForm action="#">
                  <S.MenuBtn id="btnGoBack">
                    Вернуться на&nbsp;главную
                  </S.MenuBtn>
                </S.MenuForm>
              </S.MainMenu>
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
                      {/* className="settings__change-photo" */}
                      <S.SettingsChangePhoto
                        href=""
                        target="_self"
                      >
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
                        <S.SettingBtn
                          id="settings-btn"
                        >
                          Сохранить
                        </S.SettingBtn>

                      </S.SettingForm>
                    </S.SettingsRight>
                  </S.ProfileSettings>
                </S.ProfileContent>
              </S.MainProlile>
              <S.MainTitle>Мои товары</S.MainTitle>
            </S.MainCenterBlock>
            <S.MainContent>
              <S.ContentCards>
                <S.CardsItem>
                  <S.CardsCard>
                    <S.CardsImage>
                      <Link href="" target="_blank">
                        <S.CardsImageImg src="#" alt="picture" />
                      </Link>
                    </S.CardsImage>
                    <S.CardContent>
                      <a href="" target="_blank">
                        <S.CardTitle>
                          Ракетка для большого тенниса Triumph Pro ST
                        </S.CardTitle>
                      </a>
                      <S.CardPrice>2&nbsp;200&nbsp;₽</S.CardPrice>
                      <S.CardPlace>Санкт Петербург</S.CardPlace>
                      <S.CardDate>Сегодня в&nbsp;10:45</S.CardDate>
                    </S.CardContent>
                  </S.CardsCard>
                </S.CardsItem>
                <S.CardsItem>
                  <S.CardsCard>
                    <S.CardsImage>
                      <Link href="" target="_blank">
                        <S.CardsImageImg src="#" alt="picture" />
                      </Link>
                    </S.CardsImage>
                    <S.CardContent>
                      <a href="" target="_blank">
                        <S.CardTitle>
                          Ракетка для большого тенниса Triumph Pro ST
                        </S.CardTitle>
                      </a>
                      <S.CardPrice>2&nbsp;200&nbsp;₽</S.CardPrice>
                      <S.CardPlace>Санкт Петербург</S.CardPlace>
                      <S.CardDate>Сегодня в&nbsp;10:45</S.CardDate>
                    </S.CardContent>
                  </S.CardsCard>
                </S.CardsItem>
                <S.CardsItem>
                  <S.CardsCard>
                    <S.CardsImage>
                      <Link href="" target="_blank">
                        <S.CardsImageImg src="#" alt="picture" />
                      </Link>
                    </S.CardsImage>
                    <S.CardContent>
                      <a href="" target="_blank">
                        <S.CardTitle>
                          Ракетка для большого тенниса Triumph Pro ST
                        </S.CardTitle>
                      </a>
                      <S.CardPrice>2&nbsp;200&nbsp;₽</S.CardPrice>
                      <S.CardPlace>Санкт Петербург</S.CardPlace>
                      <S.CardDate>Сегодня в&nbsp;10:45</S.CardDate>
                    </S.CardContent>
                  </S.CardsCard>
                </S.CardsItem>
              </S.ContentCards>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        {/* <footer className="footer">
      <div className="footer__container">
        <div className="footer__img">
          <a href="" target="_self">
            <img src="img/icon_01.png" alt="home" />
          </a>
        </div>
        <div className="footer__img">
          <a href="" target="_self">
            <img src="img/icon_02.png" alt="home" />
          </a>
        </div>
        <div className="footer__img">
          <a href="" target="_self">
            <img src="img/icon_03.png" alt="home" />
          </a>
        </div>
      </div>
    </footer> */}
      </S.Container>
    </S.Wrapper>
  );
};

export default Profile;
