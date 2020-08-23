import React from "react"

import Icon from "../Icons"

import * as S from "./styles"

const CardContact = ({ title, details }) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title> {title} </S.Title>
      </S.TitleWrapper>
      <S.ItemsWrapper>
        {details ? (
          title !== "Links" ? (
            details.map(item => (
              <S.Items
                href="https://www.gatsbyjs.com/docs/gatsby-link/"
                key={item.id}
              >
                {item.detail}
              </S.Items>
            ))
          ) : (
            details.map(item => (
              <S.ItemsLink key={item.id} href={item.link}>
                {item.detail}
              </S.ItemsLink>
            ))
          )
        ) : (
          <S.IconWrapper>
            <S.Icon colorIcon="#d633ff">
              <S.LinkStyled
                to="https://www.instagram.com/seitonbrasil/"
                target="_blank"
              >
                <Icon.FaInstagramSquare size={30} />
              </S.LinkStyled>
            </S.Icon>
            <S.Icon colorIcon="#3f729b">
              <S.LinkStyled
                to="https://www.linkedin.com/company/seiton-brasil/"
                target="_blank"
              >
                <Icon.FaLinkedin size={30} />
              </S.LinkStyled>
            </S.Icon>
          </S.IconWrapper>
        )}
      </S.ItemsWrapper>
    </S.Wrapper>
  )
}

export default CardContact
