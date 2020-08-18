import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"

export const Wrapper = styled.div`
  width: 70%;
  height: 60%;
  border-top: 0.4em solid #797979;

  @media (max-width: 1650px) {
    border-top: 0;
  }

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 0.159em solid #797979;
  }

  @media (max-width: 450px) {
    border-top: 0.1em solid #797979;
  }
`
export const TitleWrapper = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1650px) {
    justify-content: center;
  }

  @media (max-width: 900px) {
    justify-content: center;
    display: none;
  }

  @media (max-width: 450px) {
    justify-content: center;
  }
`
export const ItemsWrapper = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1650px) {
    align-items: center;
    margin: 1em 0 0 0;
    text-align: center;
  }

  @media (max-width: 900px) {
    align-items: center;
    margin: 1.5em 0;
    text-align: center;
  }
`
export const Title = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
  color: #797979;
  text-transform: uppercase;

  @media (max-width: 450px) {
    font-size: 1em;
  }
`
export const ItemsLink = styled(AnchorLink)`
  font-size: 1em;
  font-weight: bold;
  color: #797979;
  margin-bottom: 0.5em;
  transition: all 200ms;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: #b3b300;
  }

  @media (max-width: 900px) {
    font-size: 0.999em;
  }

  @media (max-width: 450px) {
    font-size: 0.84em;
  }
`
export const Items = styled.h4`
  font-size: 1em;
  font-weight: bold;
  color: #797979;
  margin-bottom: 0.5em;
  transition: all 200ms;

  &:hover {
    color: #b3b300;
  }

  @media (max-width: 450px) {
    text-align: center;
    font-size: 0.8em;
  }
`
export const IconWrapper = styled.div`
  display: flex;
`
export const Icon = styled.div`
  transition: all 200ms;
  color: #797979;

  &:hover {
    color: ${props => props.colorIcon};
    cursor: pointer;
  }
`
