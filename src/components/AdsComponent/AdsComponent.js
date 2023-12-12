import { Link } from 'react-router-dom'
import * as S from './AdsComponent.styled'
import { useSelector } from 'react-redux'
import {formatTime} from '../../utils/FormatteTime'

const AdsComponent = () => {
  const ads = useSelector((state) => state.user.ads)
  // console.log('АДС', ads)

  if (!ads) return <div>Loading</div>

  return (
    <>
      {ads.map((ad, index) => (
        //ad.id соответствует id обьявления
        <Link to={`/ad/${ad.id}`} key={index}> {/* Создаем ссылку на новую страницу */}
          <S.CardsItem>
            <S.CardsCard>
              <S.CardsImage>
                {ad.images[0] && ad.images[0].url && (
                  <S.CardsImageImg
                    src={`http://127.0.0.1:8090/${ad.images[0].url}`}
                    alt="picture"
                  />
                )}
              </S.CardsImage>
              <S.CardContent>
                <S.CardTitle>{ad.title}</S.CardTitle>
                <S.CardPrice>{ad.price.toLocaleString('ru-RU')} ₽</S.CardPrice>
                <S.CardPlace>{ad.user.city}</S.CardPlace>
                <S.CardDate>{formatTime(ad.created_on)}</S.CardDate>
                
              </S.CardContent>
            </S.CardsCard>
          </S.CardsItem>
        </Link>
      ))}
    </>
  )
}

export default AdsComponent
