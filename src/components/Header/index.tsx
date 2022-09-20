
import LogoIcon from "../../assets/Logo.icon";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

export const Header = () => {
    return (
      <HeaderContainer>
        <HeaderContent>
          <LogoIcon />
          <NewTransactionButton>Nova Transação</NewTransactionButton>
        </HeaderContent>
      </HeaderContainer>
    );
}