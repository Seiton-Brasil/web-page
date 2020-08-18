import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import I from "../components/Icons"
import CardBenefits from "../components/CardBenefits"

import * as S from "./styles"

const HomePage = () => {
  const { background, LogoImage } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "background-image.webp" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      LogoImage: file(relativePath: { eq: "seiton-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 110) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const Descriptions = {
    desburocratização:
      "Sabe a burocracia para encontrar compradores para seus minérios? Agora você pode fazer negócios sem burocracia e dor de cabeça!",
    desregionalização:
      "Agora você pode acessar minérios em diferentes locais do Brasil, de forma simples e prática, e escolher de acordo a viabilidade econômica",
    seguranca:
      "Negociações livres de especulação, com segurança jurídica e garantias referentes à veracidade de informações fornecidas!",
    agilidade:
      "Te fornecemos todas as informações necessárias para que seus negócios estejam à apenas um clique de distância!",
  }

  return (
    <Layout>
      <SEO title="Seiton" />
      <S.Wrapper id="initial">
        <S.ImageBackground
          Tag="section"
          fluid={background.childImageSharp.fluid}
          backgroundColor={`#040e18`}
          className="image-background"
        >
          <S.ImageBackgroundContent>
            <S.HeaderWrapper>
              <S.LogoWrapper>
                <Img
                  fluid={LogoImage.childImageSharp.fluid}
                  style={{ width: 100, height: 100 }}
                />
              </S.LogoWrapper>
              <S.ButtonsWrapper>
                <S.Button href="#initial">Página Inicial</S.Button>
                <S.Button href="#benefits">Vantagens</S.Button>
                <S.Button href="#about">Sobre nós</S.Button>
                <S.Button href="#parterns">Parceiros</S.Button>
                <S.Button href="#contact">Contato</S.Button>
                <S.Button href="#demo">Demo</S.Button>
              </S.ButtonsWrapper>
              <S.MenuWrapper>
                <I.MdMenu size={25} color="#fff" />
              </S.MenuWrapper>
            </S.HeaderWrapper>
            <S.MainWrapper>
              <S.TextWrapper>
                <S.TextDescription>
                  SEUS MINÉRIOS A UM CLIQUE DE DISTÂNCIA
                </S.TextDescription>
              </S.TextWrapper>
            </S.MainWrapper>
          </S.ImageBackgroundContent>
        </S.ImageBackground>
      </S.Wrapper>

      <S.Wrapper id="benefits">
        <S.WrapperItems>
          <S.TitleWrapper>
            <S.Title>VANTAGENS</S.Title>
          </S.TitleWrapper>
          <S.BenefitsWrapper>
            <CardBenefits
              icon={I.IoMdChatboxes}
              title="desburocratização"
              description={Descriptions.desburocratização}
              colorIcon="#ace600"
            />
            <CardBenefits
              icon={I.FiMapPin}
              title="desregionalização"
              description={Descriptions.desregionalização}
              colorIcon="#ace600"
            />
            <CardBenefits
              icon={I.MdSecurity}
              title="seguranca"
              description={Descriptions.seguranca}
              colorIcon="#ace600"
            />
            <CardBenefits
              icon={I.MdTrendingUp}
              title="agilidade"
              description={Descriptions.agilidade}
              colorIcon="#ace600"
            />
          </S.BenefitsWrapper>
        </S.WrapperItems>
      </S.Wrapper>

      <S.WrapperSecondary id="about">
        <S.WrapperItems>
          <h1>Item 2</h1>
        </S.WrapperItems>
      </S.WrapperSecondary>
    </Layout>
  )
}

export default HomePage
