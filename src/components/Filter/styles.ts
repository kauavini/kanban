import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  background-color: ${((props) =>  props.theme.colors.primaryColor)};
  padding:  0.75rem 1.5rem;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
` 


export const Icon = styled.div`
  color: ${((props) =>  props.theme.colors.textWhite)};
  display: flex;
  align-items: center;
  justify-content: center;
`


export const Text = styled.span`
  color: ${((props) =>  props.theme.colors.textWhite)};
  font-weight: 500;
`