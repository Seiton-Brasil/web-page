import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import AnchorLink from "react-anchor-link-smooth-scroll"

const primaryColor = "#ffdb4d"
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
  font-size: 16px;

  @media (max-width: 1440px) {
    font-size: 12px;
  }

  @media (max-width: 1024px) {
    font-size: 10px;
    height: 100%;
  }

  @media (max-width: 450px) {
    font-size: 6px;
  }
`

export const WrapperSecondary = styled(Wrapper)`
  background-color: ${secondaryBackground};
`

export const WrapperFooter = styled(Wrapper)`
  height: 45vh;
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

// export const HeaderWrapper = styled.header`
//   width: 60%;
//   height: 25vh;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;

//   @media (max-width: 900px) {
//     height: 40vh;
//     flex-direction: column;
//     justify-content: center;
//   }
// `

export const LogoWrapper = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.color};

  @media (max-width: 1024px) {
    width: 110px;
    height: 110px;
  }
`

export const LogoWrapperFooter = styled(LogoWrapper)`
  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
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
  font-size: 0.89em;
  font-weight: 700;
  transition: all 300ms;
  text-decoration: none;

  &:focus {
    outline: 0;
  }

  &:first-child {
    color: ${primaryColor};
  }

  &:hover {
    cursor: pointer;
    color: ${primaryColor};
  }
`

export const MenuWrapper = styled.div`
  display: none;
  margin-top: 10px;

  @media (max-width: 900px) {
    display: block;
  }
`

export const MenuAmburguerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 18px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.9);
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
// BENEFITS SECTION -----------------------------------------
export const TitleWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 5%;
`

export const BenefitsWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: 2rem;
  align-items: center;

  @media (max-width: 1440px) {
    font-size: 0.98em;
  }

  @media (max-width: 1024px) {
    height: 100%;
    grid-gap: 0;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    font-size: 2em;
  }
`

export const BenefitsWrapperFooter = styled(BenefitsWrapper)``

export const Title = styled.h1`
  font-size: 5.98em;
  font-weight: bold;
  color: ${quintenaryColor};
`
// PARTERNS SECTION ---------------------------------------------

export const CardsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`
// CONTACT SECTION ---------------------------------------------

export const ContactsWrapper = styled(BenefitsWrapper)`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`

export const ContactWrapper = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (min-width: 1024px) {
    :first-child {
      border-right: 0.35em solid #4d4d4d;
    }

    :last-child {
      border-left: 0.35em solid #4d4d4d;
    }
  }
`

export const Text = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.1em;
  color: #4d4d4d;
`
