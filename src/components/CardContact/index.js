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
            details.map(item => <S.Items key={item.id}>{item.detail}</S.Items>)
          ) : (
            details.map(item => (
              <S.ItemsLink key={item.id} href={item.link}>
                {item.detail}
              </S.ItemsLink>
            ))
          )
        ) : (
          <S.IconWrapper>
            <S.Icon colorIcon="#b30086">
              <Icon.RiInstagramLine size={40} />
            </S.Icon>
            <S.Icon colorIcon="#3f729b">
              <Icon.RiLinkedinBoxLine size={40} />
            </S.Icon>
          </S.IconWrapper>
        )}
      </S.ItemsWrapper>
    </S.Wrapper>
  )
}

export default CardContact
