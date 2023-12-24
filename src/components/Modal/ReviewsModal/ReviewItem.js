import React from 'react'
import * as S from './ReviewsModalStyle'
import { formatTime } from '../../../utils/FormatteTime'

export const ReviewItem = ({ author, text, avatar, time }) => {
  const formattedDateOnly = formatTime(time).split(' в ')[0];

  return (
    <>
      <S.ReviewItem>
        <S.ReviewLeft>
          <S.ReviewImg>
            <S.ReviewImgImg src={avatar} alt="avatar" />
          </S.ReviewImg>
        </S.ReviewLeft>
        <S.ReviewRight>
          <S.ReviewName>
            {author}
            <S.ReviewNameSpan>{formattedDateOnly}</S.ReviewNameSpan>
          </S.ReviewName>
          <S.ReviewTitle>Комментарий</S.ReviewTitle>
          <S.ReviewText>{text}</S.ReviewText>
        </S.ReviewRight>
      </S.ReviewItem>
    </>
  )
}
