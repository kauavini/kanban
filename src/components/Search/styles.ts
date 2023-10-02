import styled from "styled-components";


export const Container = styled.div`
  flex: 2;
  display: flex;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.10); 
` 


export const Icon = styled.div`
  color: ${((props) =>  props.theme.colors.textGray)};
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`


export const Input = styled.input`
  position: relative;
  width: 100%;
  flex: 2;
  outline: none;
  font-size: 1rem;
  color: ${((props) =>  props.theme.colors.titleColor)};

  &::placeholder{
    font-size: 1rem;
    color: ${((props) =>  props.theme.colors.titleColor)};
  }
`