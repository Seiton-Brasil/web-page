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
      Firebase.database()
        .ref("form")
        .set({
          name,
          phone,
          email,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))

      setSuccess(!success)
    } else {
      alert("Por favor, preencha todos os campos!")
    }
  }

  return (
    <S.Wrapper>
      {success ? (
        <>
          <h4>Envie-nos seus dados para que possamos contatá-lo:</h4>
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
          <h2>Obrigado!</h2>
          <h4>
            Sua resposta foi enviada com sucesso! Agradecemos pela colaboração.
          </h4>
        </S.SuccessWrapper>
      )}
    </S.Wrapper>
  )
}

export default Form
