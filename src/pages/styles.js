import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import AnchorLink from "react-anchor-link-smooth-scroll"

const primaryColor = "#ffdb4d"
const secondaryColor = "#b3b300"
const tertiaryColor = "#ffeb99"
const quartenaryColor = "#797979"
const quintenaryColor = "#595959"
const primaryBackground = "#ffffff"
const secondaryBackground = "#e7ff6e"

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primaryBackground};

  @media (max-width: 900px) {
    height: 100vh;
  }
`

export const WrapperSecondary = styled(Wrapper)`
  background-color: ${secondaryBackground};
`

export const WrapperItems = styled.div`
  width: 60%;
  height: 100%;
`
// INITIAL SECTION -----------------------------------------
export const ImageBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export const ImageBackgroundContent = styled(Wrapper)`
  flex-direction: column;
  background-color: transparent;
`

export const HeaderWrapper = styled.header`
  width: 60%;
  height: 25vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoWrapper = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 75px;
  background-color: ${primaryColor};
`

export const ButtonsWrapper = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`
export const Button = styled(AnchorLink)`
  background-color: transparent;
  color: ${primaryBackground};
  border: 0;
  padding: 1em;
  font-size: 1em;
  font-weight: 700;
  transition: all 300ms;
  text-decoration: none;

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
    color: ${primaryColor};
  }
`

export const MenuWrapper = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`

export const MainWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextWrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const TextDescription = styled.h1`
  color: ${primaryBackground};
  font-weight: bold;
  font-size: 7em;
`
