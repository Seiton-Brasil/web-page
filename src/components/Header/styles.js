import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { fonts, colors } from "../../styles/Global"

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
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
    width: 110px;
    height: 110px;
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  @media (max-width: 900px) {
    display: none;
  }
`
export const Button = styled(AnchorLink)`
  color: ${colors.white};
  border: 0;
  padding: 1em;
  transition: all 300ms;
  text-decoration: none;

  &:focus {
    outline: 0;
  }

  &:first-child {
    color: ${colors.septenaryColor};
  }

  &:hover {
    cursor: pointer;
    color: ${colors.septenaryColor};
  }
`
export const Button2 = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
`
export const MenuWrapper = styled.div`
  display: none;
  margin-top: 10px;

  @media (max-width: 900px) {
    display: block;
  }
`
export const MenuAmburguerWrapper = styled.aside`
  width: 60%;
  height: 100vh;
  top: 0;
  right: 0;
  display: ${props => (props.isMenuVisible ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  text-transform: uppercase;
  background-color: #040e18;
  position: absolute;
  transition: 0.5s transform cubic-bezier(0.5, 0, 0, 1);

  @media (max-width: 900px) {
    display: flex;
    transform: ${props =>
      props.isMenuVisible ? "translateX(0)" : " translateX(100%)"};
  }
`
export const Text = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 0.7em;
  margin-left: 0.9em;
`
export const TextBtn = styled.h3`
  font-size: 0.855em;
  font-family: ${fonts.primaryFont}, sans-serif;
  letter-spacing: 0.075em;
  text-transform: uppercase;
`
