import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { CloseButton, StyledContent, StyledOverlay } from "./styles";
import { FiX } from "react-icons/fi";

interface ModalProps {
  isModalOpen: boolean;
  title: string;
  children: ReactNode;
  setModalOpen: (value: boolean) => void;
}

export function Modal({
  isModalOpen,
  title,
  children,
  setModalOpen,
}: ModalProps) {
  return (
    <Dialog.Root open={isModalOpen}>
      <Dialog.Portal>
        <StyledOverlay>
          <StyledContent>
            <Dialog.Title>
              <h2>{title}</h2>
            </Dialog.Title>
            <Dialog.Description>
              <div className="contentGrid">{children}</div>
            </Dialog.Description>

            <CloseButton onClick={() => setModalOpen(false)}>
              <FiX strokeWidth={3} />
            </CloseButton>
          </StyledContent>
        </StyledOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
