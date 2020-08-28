import React, { useState } from "react"
import Firebase from "../../services/Firebase"

import * as S from "./styles"

const Form = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(true)

  const handleEnvForm = e => {
    e.preventDefault()
    if (name && phone && email) {
      Firebase.database().ref().push().set({
        name: name,
        phone: phone,
        email: email,
      })

      setSuccess(!success)
    } else {
      alert("Por favor, preencha todos os campos!")
    }
  }

  return (
    <S.Wrapper>
      {success ? (
        <>
          <S.Title>Envie-nos seus dados para que possamos contatá-lo:</S.Title>
          <form onSubmit={handleEnvForm}>
            <S.Input
              placeholder="Nome"
              onChange={event => setName(event.target.value)}
            />
            <S.Input
              placeholder="Telefone"
              onChange={event => setPhone(event.target.value)}
            />
            <S.Input
              placeholder="Email"
              onChange={event => setEmail(event.target.value)}
            />

            <S.Button type="submit">
              <S.Text>ENVIAR</S.Text>
            </S.Button>
          </form>
        </>
      ) : (
        <S.SuccessWrapper>
          <h3>Obrigado!</h3>
          <S.Text>
            Sua resposta foi enviada com sucesso! Agradecemos pela colaboração.
          </S.Text>
        </S.SuccessWrapper>
      )}
    </S.Wrapper>
  )
}

export default Form
