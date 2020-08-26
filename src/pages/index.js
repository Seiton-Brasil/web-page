import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import I from "../components/Icons"
import CardBenefits from "../components/CardBenefits"
import CardContact from "../components/CardContact"
import HandleCardsTeam from "../components/HandleCardsTeam"
import Map from "../components/Map"
import Form from "../components/Form"
import Header from "../components/Header"

import Section from "../components/Section"

import * as S from "../styles/styles"

import { Descriptions, contacts, sections } from "../static"

const HomePage = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

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
          <Header />
          <S.ImageBackgroundContent>
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

      <Section title="VANTAGENS" columns={4} id="benefits">
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
          title="segurança"
          description={Descriptions.seguranca}
          colorIcon="#ace600"
        />
        <CardBenefits
          icon={I.MdTrendingUp}
          title="agilidade"
          description={Descriptions.agilidade}
          colorIcon="#ace600"
        />
      </Section>

      <Section title="A SEITON" columns={3} id="about" bg>
        <CardBenefits
          icon={I.IoMdChatboxes}
          title="Nossa história"
          description={Descriptions.historia}
          colorIcon="#595959"
        />
        <CardBenefits
          icon={I.RiLightbulbFlashLine}
          title="Nossa visão"
          description={Descriptions.visao}
          colorIcon="#595959"
        />
        <CardBenefits
          icon={I.RiReactjsLine}
          title="Nossa tecnologia"
          description={Descriptions.tecnologia}
          colorIcon="#595959"
        />
      </Section>

      <Section title="PARCEIROS" columns={3} id="parterns">
        <S.CardsWrapper>
          <Img fluid={Favaglab.childImageSharp.fluid} style={{ width: 180 }} />
        </S.CardsWrapper>
        <S.CardsWrapper>
          <Img
            fluid={FavagSprint.childImageSharp.fluid}
            style={{ width: 180 }}
          />
        </S.CardsWrapper>
        <S.CardsWrapper>
          <Img fluid={FavagLogo.childImageSharp.fluid} style={{ width: 180 }} />
        </S.CardsWrapper>
      </Section>

      <Section title="CONTATE-NOS" height="50vh" id="contact" bg>
        <S.ContactsWrapper columns={3}>
          <S.ContactWrapper>
            <S.Text>seitonnegociacoes@gmail.com</S.Text>
          </S.ContactWrapper>
          <S.ContactWrapper>
            <S.Text>(38) 99169-5259</S.Text>
            <S.Text>(38) 99199-2007</S.Text>
          </S.ContactWrapper>
          <S.ContactWrapper>
            <S.Text>
              Av. Tancredo de Almeida Neves, 302 - Centro, Nova Porteirinha -
              MG, 39525-000
            </S.Text>
          </S.ContactWrapper>
        </S.ContactsWrapper>
      </Section>

      <S.Wrapper style={{ height: "50vh" }}>
        <Map />
      </S.Wrapper>

      <Section title="AJUDE NOSSO DESENVOLVIMENTO">
        <S.TitleWrapper
          style={{ justifyContent: "flex-start", textAlign: "justify" }}
        >
          <S.Text style={{ fontWeight: 300, fontSize: "1.5em" }}>
            Estamos selecionando mineradoras que queiram alavancar suas vendas e
            indústrias que desejam comprar minérios a preço acessível para nos
            auxiliar nos testes do MVP. Quer fazer parte de um time que já
            nasceu ganhando?
          </S.Text>
        </S.TitleWrapper>
        <Form />
      </Section>

      <Section title="NOSSO TIME" height="100%" columns={3} bg>
        <HandleCardsTeam />
      </Section>

      <Section id="demo" height="45vh" columns={4}>
        <S.LogoWrapperFooter>
          <Img
            fluid={LogoImage.childImageSharp.fluid}
            style={{ width: 100, height: 100 }}
          />
        </S.LogoWrapperFooter>
        <CardContact title="Links" details={sections} />
        <CardContact title="Contatos" details={contacts} />
        <CardContact title="Redes Sociais" />
      </Section>
    </Layout>
  )
}

export default HomePage
