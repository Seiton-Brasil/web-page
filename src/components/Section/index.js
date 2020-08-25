import React from "react"

import { Container, Content, Header, Main, Title } from "./styles"

const Section = ({ title, columns, id, bg, children }) => {
  return (
    <Container id={id} bg={bg}>
      <Content>
        <Header>
          <Title> {title} </Title>
        </Header>
        {columns ? <Main columns={columns}> {children} </Main> : children}
      </Content>
    </Container>
  )
}

export default Section
