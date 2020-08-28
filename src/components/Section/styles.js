import styled from "styled-components"
import { colors } from "../../styles/Global"

export const Container = styled.section`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.bg ? colors.secondaryColor : colors.white};
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
export const Content = styled.div`
  width: 60%;
  height: 100%;
`
export const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 5%;
`
export const Main = styled.div`
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
export const Title = styled.h1`
  font-size: 5.98em;
  font-weight: bold;
  color: ${colors.octanaryColor};
`
