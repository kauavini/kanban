import { Container, Icon, Text } from "./styles";
import { ListFilter } from "lucide-react";

export default function Filter(){


  return(
    <Container>
      <Icon>
        <ListFilter/>
      </Icon>
      <Text>
        Filtrar
      </Text>
    </Container>
  )
}  