import React from "react"

import * as S from "./styles"

const CardBenefits = ({ icon, title, description, colorIcon }) => {
  const Icon = icon

  return (
    <S.Wrapper>
      <S.IconWrapper color={colorIcon}>
        <Icon />
      </S.IconWrapper>

      <S.Title color={colorIcon}> {title} </S.Title>
      <S.Description> {description} </S.Description>
    </S.Wrapper>
  )
}

export default CardBenefits
