import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 560px) {
    padding: 0 0.5rem;
  }

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-image: url("/background.png");
    background-size: cover;
    z-index: -1;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1080px;
    width: 100%;
    padding: 0 0.5rem;
  }

  nav ul {
    display: flex;
    gap: 2.5rem;

    @media (max-width: 560px) {
      display: none;
    }

    li {
      display: inline-block;

      a {
        font-family: "Inter", sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--white);
        transition: 0.2s;

        &:hover {
          filter: brightness(80%);
        }
      }
    }
  }

  .budgetButton {
    background: var(--green-400);
    padding: 0.5rem 1.25rem;
    border-radius: 8px;

    transition: 0.2s;

    &:hover {
      filter: brightness(95%);
    }
  }
`;
