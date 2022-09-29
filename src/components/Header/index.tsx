import * as Dialog from "@radix-ui/react-dialog";
import LogoIcon from "../../assets/Logo.icon";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoIcon />
        
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>

              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
