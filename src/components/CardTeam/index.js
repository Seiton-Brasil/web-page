import React from "react"

import Icon from "../Icons"

import * as S from "./styles"

const CardTeam = ({ Image, occupation, name, link }) => {
  return (
    <S.Wrapper>
      <S.ImageTeam fluid={Image} />
      <S.Name> {name} </S.Name>
      <S.Occupation> {occupation} </S.Occupation>
      <S.SocialWrapper>
        <S.LinkStyled to={link} target="_blank">
          <Icon.FaLinkedinIn color="#3f729b" />
        </S.LinkStyled>
      </S.SocialWrapper>
    </S.Wrapper>
  )
}

export default CardTeam
