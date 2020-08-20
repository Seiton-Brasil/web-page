import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 1em;
`

export const Title = styled.h3`
  color: ${props => props.color};
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`

export const Description = styled.p`
  font-size: 1em;
  letter-spacing: 1px;
  text-align: center;
`

export const IconWrapper = styled.div`
  color: ${props => props.color};
  font-size: 100px;
  margin-bottom: 0.35em;
`
