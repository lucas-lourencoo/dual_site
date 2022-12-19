import styled from "styled-components";

export const Container = styled.footer`
  background: var(--blue-100);
  padding: 2.5rem 0;
  color: var(--black);

  .wrapper {
    max-width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (max-width: 560px) {
      grid-template-columns: none;
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .talkWithUs {
      width: 100%;

      h3 {
        font-size: 1.5rem;
        font-family: "Inter", sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
      }

      ul li {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        a {
          margin-left: 0.5rem;
          font-weight: 600;
        }
      }
    }

    .madeBy {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      span {
        font-size: 0.875rem;
        margin-bottom: 1rem;
      }
    }
  }
`;
