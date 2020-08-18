import styled from "styled-components"
import Img from "gatsby-image"

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageTeam = styled(Img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

export const Name = styled.h2`
  font-size: 1.6em;
  font-weight: bold;
  color: #000;
  margin-top: 1em;
`
export const Occupation = styled.h3`
  font-size: 1.2em;
  color: #000;
  text-transform: uppercase;
  margin-top: 0.7em;
  text-align: center;
`
export const SocialWrapper = styled.div`
  margin-top: 2em;
  font-size: 30px;

  @media (max-width: 450px) {
    margin-top: 0.8em;
    font-size: 20px;
    margin-bottom: 2.5em;
  }
`
