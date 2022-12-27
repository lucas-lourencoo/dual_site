import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const StyledOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContent = styled(Dialog.Content)`
  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(-1.5rem);
    }
    to {
      opacity: 1;
      transform: translate(0);
    }
  }

  z-index: 1000;
  height: 28rem;
  max-width: 50rem;
  background: var(--white);
  color: var(--black);
  border-radius: 8px;
  padding: 1.5rem;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: appear 0.3s ease-out forwards;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    font-family: "Inter", sans-serif;
    letter-spacing: -0.2px;
  }

  .contentGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2.5rem;

    img {
      border-radius: 8px;
      box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.3);
    }

    p {
      font-weight: 600;
      line-height: 1.5;
      font-size: 1.1rem;
    }

    a {
      display: inline-block;
      color: var(--white);
      background: var(--green-400);
      border-radius: 8px;
      padding: 0.4rem 1.5rem;
      margin-top: 1rem;

      cursor: pointer;
      transition: 0.2s;

      &:hover {
        filter: brightness(95%);
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: #b71c1c;
  transition: 0.2s;

  &:hover {
    filter: brightness(120%);
  }
`;
