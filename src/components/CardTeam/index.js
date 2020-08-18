import React from "react"

import Icon from "../Icons"

import * as S from "./styles"

const CardTeam = ({ Image, occupation, name }) => {
  return (
    <S.Wrapper>
      <S.ImageTeam fluid={Image} />
      <S.Name> {name} </S.Name>
      <S.Occupation> {occupation} </S.Occupation>
      <S.SocialWrapper>
        <Icon.RiLinkedinLine color="#3f729b" />
      </S.SocialWrapper>
    </S.Wrapper>
  )
}

export default CardTeam
