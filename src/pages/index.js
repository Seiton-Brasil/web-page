import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import I from "../components/Icons"
import CardBenefits from "../components/CardBenefits"
import CardContact from "../components/CardContact"
import CardTeam from "../components/CardTeam"

import * as S from "../styles/styles"

const HomePage = () => {
  const {
    background,
    LogoImage,
    Favaglab,
    FavagSprint,
    FavagLogo,
    Deborah,
    Thiago,
    Mansueth,
    Gabriel,
    Leandro,
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
    }
  `)

  const Descriptions = {
    desburocratização:
      "Sabe a burocracia para encontrar compradores para seus minérios? Agora você pode fazer negócios sem burocracia e dor de cabeça!",
    desregionalização:
      "Agora você pode acessar minérios em diferentes locais do Brasil, de forma simples e prática, e escolher de acordo a viabilidade econômica.",
    seguranca:
      "Negociações livres de especulação, com segurança jurídica e garantias referentes à veracidade de informações fornecidas!",
    agilidade:
      "Te fornecemos todas as informações necessárias para que seus negócios estejam à apenas um clique de distância!",
    historia:
      "Somos uma startup criada por intermediários de vendas do setor mineral e desenvolvida por um time incrível! Em nossa trilha de desenvolvimento, encontramos suporte no programa de pré aceleração Agita Warm Up Serra Geral e em nosso parceiro FAVAG.",
    visao:
      "Pretendemos ser referência em transações de minérios rápidas, práticas e seguras em todo o mundo.",
    tecnologia:
      "Trabalhamos com tecnologias que estão em alta no mercado e que são utilizadas por grandes empresas!",
  }

  const [isMenuVisible, setIsMenuVisible] = useState(false)

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
                {/* <S.Button href="#contact">Contato</S.Button> */}
                <S.Button href="#demo">Demo</S.Button>
              </S.ButtonsWrapper>
              <S.MenuWrapper>
                <I.MdMenu
                  size={25}
                  color="#ffdb4d"
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                />
              </S.MenuWrapper>
            </S.HeaderWrapper>
            <S.MainWrapper>
              <S.TextWrapper>
                <S.TextDescription>
                  SEUS MINÉRIOS A UM CLIQUE DE DISTÂNCIA
                </S.TextDescription>
              </S.TextWrapper>
            </S.MainWrapper>
            {isMenuVisible && (
              <S.MenuAmburguerWrapper>
                <S.Button
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                  href="#initial"
                >
                  Página Inicial
                </S.Button>
                <S.Button
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                  href="#benefits"
                >
                  Vantagens
                </S.Button>
                <S.Button
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                  href="#about"
                >
                  Sobre nós
                </S.Button>
                <S.Button
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                  href="#parterns"
                >
                  Parceiros
                </S.Button>
                {/* <S.Button
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                  href="#contact"
                >
                  Contato
                </S.Button> */}
                <S.Button
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                  href="#demo"
                >
                  Demo
                </S.Button>
                <I.MdClose
                  size={30}
                  color="#ffdb4d"
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                />
              </S.MenuAmburguerWrapper>
            )}
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

      <S.WrapperSecondary style={{ height: "100%", paddingBottom: "10%" }}>
        <S.WrapperItems>
          <S.TitleWrapper>
            <S.Title style={{ color: "#1a1a1a", marginBottom: "15%" }}>
              NOSSO TIME
            </S.Title>
          </S.TitleWrapper>
          <S.BenefitsWrapper columns={3}>
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
              occupation="executivo de ti"
              link="https://www.linkedin.com/in/wesley-leandro-43474416b"
            />
            <CardTeam
              Image={Gabriel.childImageSharp.fluid}
              name="Gabriel Aguiar"
              occupation="superintendente jurídico"
              link="https://www.linkedin.com/in/gabriel-aguiar-706894190"
            />
          </S.BenefitsWrapper>
        </S.WrapperItems>
      </S.WrapperSecondary>

      <S.WrapperFooter id="demo">
        <S.WrapperItems>
          <S.BenefitsWrapper columns={4}>
            <S.LogoWrapperFooter>
              <Img
                fluid={LogoImage.childImageSharp.fluid}
                style={{ width: 100, height: 100 }}
              />
            </S.LogoWrapperFooter>
            <CardContact title="Links" details={sections} />
            <CardContact title="Contatos" details={contacts} />
            <CardContact title="Redes Sociais" />
          </S.BenefitsWrapper>
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
