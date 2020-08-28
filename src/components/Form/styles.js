import styled from "styled-components"
import { colors } from "../../styles/Global"

export const Wrapper = styled.div``

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 0.2em;
  border: 0;
  padding-left: 1em;
  background-color: ${colors.secondaryColor};
  border-radius: 2px;

  ::placeholder {
    color: #333;
    font-weight: bold;
  }

  :focus {
    outline: none;
  }
`
export const SuccessWrapper = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 1em;
  background-color: ${colors.white};
  color: ${colors.quitenaryColor};
  transition: all 200ms;
  cursor: pointer;
  border: 0.5px solid ${colors.quitenaryColor};
  border-radius: 2px;

  :hover {
    border: 0.5px solid ${colors.quartenaryColor};
    color: ${colors.quartenaryColor};
  }

  :focus {
    outline: none;
  }
`
export const Text = styled.h3`
  font-size: 1em;
  font-weight: bold;
  margin: 0.5em;
  letter-spacing: 1px;
  text-align: center;
`
export const Title = styled.h4`
  font-size: 1.2em;
`
