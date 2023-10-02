import { useDrag } from "react-dnd";
import { Container, Description, Tag, Tags, Title } from "./styles";
import { Monitor } from "lucide-react";

export default function Card(){
  const [{isDragging}, dragRef] = useDrag({
    type: 'CARD',
    item: {
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return(
    <Container ref={dragRef} isDragging={isDragging} >
      <Title>Desenvolver a tela de login</Title>
      <Description> Lorem, ipsum dolor sit amet consectesumenda eius, dolore soluta accusamus accusantium architecto voluptatum perspiciatis. Consectetur accusamus itaque reiciendis! </Description>
      <Tags>
        <Tag>javascript</Tag>
        <Tag>challenge</Tag>
        <Tag>react</Tag>
      </Tags>
    </Container>
  )
} 