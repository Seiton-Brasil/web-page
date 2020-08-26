import React from "react"

import { Container, Content, Header, Main, Title } from "./styles"

const Section = ({ title, height = "100vh", columns, id, bg, children }) => {
  return (
    <Container id={id} bg={bg} height={height}>
      <Content>
        {title && (
          <Header>
            <Title> {title} </Title>
          </Header>
        )}
        {columns ? <Main columns={columns}> {children} </Main> : children}
      </Content>
    </Container>
  )
}

export default Section
