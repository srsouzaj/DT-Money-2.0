import * as Dialog from "@radix-ui/react-dialog";
import LogoIcon from "../../assets/Logo.icon";
import { NewTransactionModal } from "../NewTransactionModal";
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

          <NewTransactionModal />
        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
  );
};
