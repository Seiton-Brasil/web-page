import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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

const HandleCardsTeam = () => {
  const {
    Deborah,
    Thiago,
    Mansueth,
    Gabriel,
    Leandro,
    Helano,
  } = useStaticQuery(graphql`
    query {
      Deborah: file(relativePath: { eq: "Deborah.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Thiago: file(relativePath: { eq: "Thiago.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Mansueth: file(relativePath: { eq: "Mansueth.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Gabriel: file(relativePath: { eq: "Gabriel.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Leandro: file(relativePath: { eq: "Leandro.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Helano: file(relativePath: { eq: "Helano.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <CardTeam
        Image={Deborah.childImageSharp.fluid}
        name="Deborah Ribeiro"
        occupation="ceo"
        link="https://www.linkedin.com/in/deborahribeiro"
      />
      <CardTeam
        Image={Thiago.childImageSharp.fluid}
        name="Thiago Ribeiro"
        occupation="presidente"
        link="https://www.linkedin.com/in/thiagoraphaelribeiro"
      />
      <CardTeam
        Image={Mansueth.childImageSharp.fluid}
        name="Mansueth Veloso"
        occupation="conselheiro"
        link="https://www.linkedin.com/in/mansueth-veloso-054919124"
      />
      <CardTeam
        Image={Leandro.childImageSharp.fluid}
        name="Wesley Leandro"
        occupation="superintendente técnico"
        link="https://www.linkedin.com/in/wesley-leandro-43474416b"
      />
      <CardTeam
        Image={Gabriel.childImageSharp.fluid}
        name="Gabriel Aguiar"
        occupation="superintendente jurídico"
        link="https://www.linkedin.com/in/gabriel-aguiar-706894190"
      />
      <CardTeam
        Image={Helano.childImageSharp.fluid}
        name="Helano Celene"
        occupation="investidor"
        link="/"
      />
    </>
  )
}

export default HandleCardsTeam
