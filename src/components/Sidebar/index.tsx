import { Container, Logo, Options, Option} from "./styles"
import { KanbanSquare, HelpingHand, ScrollText, Settings } from "lucide-react"
import LogoSvg from "../../assets/logo.svg"

export default function Sidebar(){

  return(
    <Container>
        <Logo>
          <img src={LogoSvg} alt="" />
        </Logo>
        <Options>
          <Option> <KanbanSquare/> Boards</Option>
          <Option> <HelpingHand/> Equipes</Option>
          <Option> <ScrollText/> Relatorios</Option>
          <Option> <Settings/> Ajustes</Option>
        </Options>
    </Container>

  ) 
}


