import { Link } from 'react-router-dom';
import * as S from './AdsComponent.styled'

const AdsComponent = () => {
  return (
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
  );
};

export default AdsComponent;