import { Icon , Container, Input} from "./styles";
import { Search } from "lucide-react";

export default function SearchComponent(){



  return(
    <Container>
      <Icon>
        <Search/>
      </Icon>
      <Input placeholder="Digite o que quiser...." />
    </Container>
  )
}