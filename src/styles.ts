import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.primaryColor};
`

export const Content = styled.div`
  display: flex;
  margin-top: .5rem;
  flex-direction: column;
  border-top-left-radius: 50px;
  padding: 3rem 3rem;
  background-color: ${(props) => props.theme.colors.bgColor};
`
// header

export const Header = styled.header`

`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;

  svg{
    color: ${(props) => props.theme.colors.textGray};
    font-size: 16px;
  }
`

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`



export const Perfil = styled.div`

`

export const Actions = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
`

export const Filter = styled.div`

`

export const Search = styled.input`

`


// main


export const Main = styled.main`
  display: flex;
  margin-top: 2rem;

`

export const Cards = styled.div`
  padding: 1.5rem;
  display: grid;
  gap: 2rem;
`
export const Subtitle = styled.h3`
  padding: 0 1.5rem;
`

export const Todo = styled.div`
  
`

export const Doing = styled.div`

`


export const Done = styled.div`


`