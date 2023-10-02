import styled from "styled-components";


export const Container = styled.div`
  width: 50rem;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
`

export const Options = styled.ul`
  padding: 2rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  & li{
    color: ${(props) => props.theme.colors.textWhite};
  }
`

export const Option = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  padding: 0.5rem 0.5rem;
  cursor: pointer;

  &:hover{
    opacity: 0.8;
    font-weight: bold;
    /* background-color: ${(props) => props.theme.colors.secondaryColor};; */
  }
`