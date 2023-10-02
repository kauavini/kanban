import { useState } from 'react'
import Avatar from "./assets/avatar.svg"
import { Pen } from "lucide-react"
import './App.css'
import { Container, Header, Title, Perfil, TopHeader, Actions, Main, Todo, Doing, Done, Content, Cards, Subtitle} from './styles'
import Theme from './theme'
import Card from './components/Card'
import Sidebar from './components/Sidebar'
import Filter from './components/Filter'
import Search from './components/Search'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {

  return (
    <>
    <Theme>
      <Container>
        <Sidebar/>
        <Content>
        <Header>
          <TopHeader>
              <Title>Meu Kanban <Pen/></Title>
              <Perfil>  
                <img src={Avatar} alt="" />
              </Perfil>
            </TopHeader>
            <Actions>
              <Filter/>
              <Search/>
            </Actions>
        </Header>
        <Main>
          <DndProvider backend={HTML5Backend} >
          <Todo>
            <Subtitle>A fazer</Subtitle>
            <Cards>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </Cards>
          </Todo>
          <Doing>
          <Subtitle>Fazendo</Subtitle>
          <Cards>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </Cards>
          </Doing>
          <Done>
          <Subtitle>Feito</Subtitle>
          <Cards>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </Cards>
          </Done>
        </DndProvider>
        </Main>
        </Content>
      </Container>
      </Theme>
    </>
  )
}

export default App
