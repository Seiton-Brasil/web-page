import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30%;
`

export const ImageTeam = styled(Img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;

  @media (max-width: 1650px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 900px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 450px) {
    width: 140px;
    height: 140px;
  }
`

export const Name = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
  margin: 1em 0 0.8em 0;
`
export const Occupation = styled.h3`
  font-size: 1em;
  font-weight: 400;
  color: #262626;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
`
export const SocialWrapper = styled.div`
  margin-top: 1em;
  font-size: 30px;

  @media (max-width: 450px) {
    margin-top: 0.8em;
    font-size: 20px;
    margin-bottom: 2.5em;
  }
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`
