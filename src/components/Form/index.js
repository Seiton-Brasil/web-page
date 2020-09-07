import React, { useState } from "react"
import Firebase from "../../services/Firebase"

import * as S from "./styles"

const Form = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [nameErr, setNameErr] = useState(false)
  const [phoneErr, setPhoneErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [success, setSuccess] = useState(true)

  const handleEnvForm = e => {
    e.preventDefault()

    setNameErr(name ? false : true)
    setPhoneErr(phone ? false : true)
    setEmailErr(email ? false : true)

    if (name && phone && email) {
      Firebase.database().ref().push().set({
        name: name,
        phone: phone,
        email: email,
      })
      setSuccess(!success)
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
              error={nameErr}
              onChange={event => setName(event.target.value)}
            />
            <S.Input
              placeholder="Telefone"
              error={phoneErr}
              onChange={event => setPhone(event.target.value)}
            />
            <S.Input
              placeholder="Email"
              error={emailErr}
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
