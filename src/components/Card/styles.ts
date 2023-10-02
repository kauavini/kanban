import styled, {css} from "styled-components";

interface CardProps{
  isDragging: boolean
}

export const Container =  styled.div<CardProps>`
  cursor: grab;
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.10); 

  &:hover{
    background-color: ${props => props.theme.colors.bgColor};
  }


  ${props => props.isDragging && css`
    border: 2px dashed black;
    background-color: transparent;
    cursor: grabbing;
    box-shadow: none;
    border-radius: 0;
    opacity: 09;
    pointer-events: none;
  `}
`

export const Title = styled.h3`
  font-size: 1rem;
`

export const Description = styled.p`
  color: ${props => props.theme.colors.textColor};
  font-family: 14px;
  line-height: 18px;
  margin-top: 24px;
`

export const Tags = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 1rem;
`


export const Tag = styled.span`
  font-size: 14px;
  padding: 0.5rem;
  border-radius: 8px;
  color: ${props => props.theme.colors.primaryColor};
  background-color: ${props => props.theme.colors.bgTag};
` 
