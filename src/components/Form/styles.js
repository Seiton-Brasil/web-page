import styled from "styled-components"

export const Wrapper = styled.div``

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 0.2em;
  border: 0;
  padding-left: 1em;
  background-color: #e7ff6e;
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
  background-color: #ffffff;
  color: #bfbfbf;
  transition: all 200ms;
  cursor: pointer;
  border: 0.5px solid #bfbfbf;
  border-radius: 2px;

  :hover {
    border: 0.5px solid #737373;
    color: #737373;
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
