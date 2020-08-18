import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import I from "../components/Icons"
import CardBenefits from "../components/CardBenefits"
import CardContact from "../components/CardContact"

import * as S from "./styles"

const HomePage = () => {
  const {
    background,
    LogoImage,
    Favaglab,
    FavagSprint,
    FavagLogo,
  } = useStaticQuery(graphql`
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
      Favaglab: file(relativePath: { eq: "favag-lab.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 368) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FavagSprint: file(relativePath: { eq: "favag-sprint.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 360) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FavagLogo: file(relativePath: { eq: "favag-logo.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
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
    historia:
      "Somos uma startup criada por intermediários de vendas do setor mineral e desenvolvida por um time incrível! Em nossa trilha de desenvolvimento, encontramos suporte no programa de pré aceleração Agita Warm Up Serra Geral e em nosso parceiro FAVAG.",
    visao:
      "Pretendemos ser referência em transações de minérios rápidas, práticas e seguras em todo o mundo",
    tecnologia:
      "Trabalhamos com tecnologias que estão em alta no mercado e que são utilizadas por grandes empresas!",
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
              <S.LogoWrapper color="#ffdb4d">
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
          <S.BenefitsWrapper columns={4}>
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
          <S.TitleWrapper>
            <S.Title>A SEITON</S.Title>
          </S.TitleWrapper>
          <S.BenefitsWrapper columns={3}>
            <CardBenefits
              icon={I.IoMdChatboxes}
              title="Nossa história"
              description={Descriptions.historia}
              colorIcon="#797979"
            />
            <CardBenefits
              icon={I.RiLightbulbFlashLine}
              title="Nossa visão"
              description={Descriptions.visao}
              colorIcon="#797979"
            />
            <CardBenefits
              icon={I.RiReactjsLine}
              title="Nossa tecnologia"
              description={Descriptions.tecnologia}
              colorIcon="#797979"
            />
          </S.BenefitsWrapper>
        </S.WrapperItems>
      </S.WrapperSecondary>

      <S.Wrapper id="parterns">
        <S.WrapperItems>
          <S.TitleWrapper>
            <S.Title>PARCEIROS</S.Title>
          </S.TitleWrapper>
          <S.BenefitsWrapper columns={3}>
            <S.CardsWrapper>
              <Img
                fluid={Favaglab.childImageSharp.fluid}
                style={{ width: 180 }}
              />
            </S.CardsWrapper>
            <S.CardsWrapper>
              <Img
                fluid={FavagSprint.childImageSharp.fluid}
                style={{ width: 180 }}
              />
            </S.CardsWrapper>
            <S.CardsWrapper>
              <Img
                fluid={FavagLogo.childImageSharp.fluid}
                style={{ width: 180 }}
              />
            </S.CardsWrapper>
          </S.BenefitsWrapper>
        </S.WrapperItems>
      </S.Wrapper>

      <S.WrapperSecondary>
        <S.WrapperItems>
          <S.TitleWrapper>
            <S.Title>TIME</S.Title>
          </S.TitleWrapper>
        </S.WrapperItems>
      </S.WrapperSecondary>

      <S.WrapperFooter id="demo">
        <S.WrapperItems>
          <S.BenefitsWrapperFooter columns={4}>
            <S.LogoWrapper>
              <Img
                fluid={LogoImage.childImageSharp.fluid}
                style={{ width: 100, height: 100 }}
              />
            </S.LogoWrapper>
            <CardContact title="Links" details={sections} />
            <CardContact title="Contatos" details={contacts} />
            <CardContact title="Redes Sociais" />
          </S.BenefitsWrapperFooter>
        </S.WrapperItems>
      </S.WrapperFooter>
    </Layout>
  )
}

const sections = [
  {
    id: 1,
    detail: "Página Inicial",
    link: "#initial",
  },
  {
    id: 2,
    detail: "Vantagens",
    link: "#benefits",
  },
  {
    id: 3,
    detail: "Sobre Nós",
    link: "#about",
  },
  {
    id: 4,
    detail: "Parceiros",
    link: "#parterns",
  },
  {
    id: 5,
    detail: "Contato",
    link: "#",
  },
]

const contacts = [
  {
    id: 1,
    detail: "seitonnegociacoes@gmail.com",
  },
  {
    id: 2,
    detail: "(38) 99169-5259",
  },
  {
    id: 3,
    detail: "(38) 99199-2007",
  },
  {
    id: 4,
    detail:
      "Av. Tancredo de Almeida Neves, 302 - Centro, Nova Porteirinha - MG, 39525-000",
  },
]

export default HomePage
