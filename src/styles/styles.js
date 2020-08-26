import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const primaryBackground = "#ffffff"

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
export const LogoWrapper = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.color};

  @media (max-width: 1024px) {
    width: 70%;
    height: 110px;
  }

  @media (max-width: 768px) {
    width: 100%;
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
export const TitleWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 5%;
`
export const CardsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`
export const ContactsWrapper = styled.div`
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
