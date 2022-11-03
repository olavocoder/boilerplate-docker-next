import React from 'react'

import * as S from './styles'

const Loading = ({ absolute, small, isNone }) => {
  return (
    <S.Wrapper className={`${absolute ? 'no-padd' : ''}`}>
      {!isNone && <S.Loading className={`${small ? 'small' : ''}`} />}
    </S.Wrapper>
  )
}

export default Loading