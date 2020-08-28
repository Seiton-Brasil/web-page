import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Icon from "../Icons"
import {
  HeaderWrapper,
  LogoWrapper,
  ButtonsWrapper,
  Button,
  Button2,
  MenuWrapper,
  MenuAmburguerWrapper,
  Text,
} from "./styles"

const Drawer = ({ onClick, isMenuVisible, image }) => {
  return (
    <MenuAmburguerWrapper isMenuVisible={isMenuVisible}>
      <div>
        <Img fluid={image} style={{ width: 100, height: 100 }} />
      </div>
      <div style={{ width: "100%" }}>
        <Button2 onClick={onClick} href="#initial">
          <Icon.RiHome2Line color="#ffdb4d" />
          <Text>Página Inicial</Text>
        </Button2>
        <Button2 onClick={onClick} href="#benefits">
          <Icon.MdTrendingUp color="#ffffff" />
          <Text>Vantagens</Text>
        </Button2>
        <Button2 onClick={onClick} href="#about">
          <Icon.RiTeamLine color="#ffffff" />
          <Text>Sobre nós</Text>
        </Button2>
        <Button2 onClick={onClick} href="#parterns">
          <Icon.RiThumbUpLine color="#ffffff" />
          <Text>Parceiros</Text>
        </Button2>
        <Button2 onClick={onClick} href="#contact">
          <Icon.RiMailLine color="#ffffff" />
          <Text>Contato</Text>
        </Button2>
        <Button2 onClick={onClick} href="#demo">
          <Icon.RiArrowDownCircleLine color="#ffffff" />
          <Text>Demo</Text>
        </Button2>
      </div>
      <Button2>
        <Icon.RiArrowLeftLine size={30} color="#ffffff" onClick={onClick} />
      </Button2>
    </MenuAmburguerWrapper>
  )
}

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false)

  const { LogoImage } = useStaticQuery(graphql`
    query {
      LogoImage: file(relativePath: { eq: "seiton-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 110) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  React.useEffect(() => {
    function onScroll() {
      setIsMenuVisible(
        window.scrollY === 0 && window.innerWidth <= 900 ? true : false
      )
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <HeaderWrapper>
      <LogoWrapper color="#ffdb4d">
        <Img
          fluid={LogoImage.childImageSharp.fluid}
          style={{ width: 100, height: 100 }}
        />
      </LogoWrapper>

      <ButtonsWrapper>
        <Button href="#initial">Página Inicial</Button>
        <Button href="#benefits">Vantagens</Button>
        <Button href="#about">Sobre nós</Button>
        <Button href="#parterns">Parceiros</Button>
        <Button href="#contact">Contato</Button>
        <Button href="#demo">Demo</Button>
      </ButtonsWrapper>

      <MenuWrapper>
        <Icon.MdMenu
          size={25}
          color="#ffdb4d"
          onClick={() => setIsMenuVisible(!isMenuVisible)}
        />
      </MenuWrapper>

      <Drawer
        onClick={() => setIsMenuVisible(!isMenuVisible)}
        isMenuVisible={isMenuVisible}
        image={LogoImage.childImageSharp.fluid}
      />
    </HeaderWrapper>
  )
}

export default Header
