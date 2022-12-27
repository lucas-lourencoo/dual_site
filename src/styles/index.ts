import styled from "styled-components";

export const HeroContainer = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 1080px;
  margin: 0 auto;
  height: calc(100vh - 7rem);

  @media (max-width: 560px) {
    grid-template-columns: none;
    padding: 0 1rem;
    gap: 0;
  }

  .textRight {
    h2 {
      font-family: "Inter", sans-serif;
      font-size: 3rem;
      line-height: 1.2;
      position: relative;
      margin-bottom: 2.5rem;

      @media (max-width: 560px) {
        font-size: 2.75rem;
      }

      &::before {
        content: "";
        position: absolute;
        width: 110%;
        height: 6px;
        background-color: var(--green-400);
        bottom: -1.5rem;
        left: -30%;
        border-radius: 5px;
      }
    }

    span {
      color: var(--gray-200);
      font-size: 1.25rem;
      display: inline-block;
    }

    a {
      display: inline-block;
      margin-top: 1.5rem;
      text-transform: uppercase;
      border: 2px solid var(--green-400);
      padding: 0.5rem 1.5rem;
      border-radius: 8px;
      transition: 0.2s;

      &:hover {
        background-color: var(--green-400);
      }
    }
  }

  img {
    transform: translateX(2rem);
    border-radius: 8px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);

    @media (max-width: 560px) {
      transform: translateX(0);
    }
  }
`;

export const ClientsContainer = styled.section`
  padding-bottom: 4.25rem;

  @media (max-width: 560px) {
    padding: 4.25rem 1rem;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1080px;
    margin: 0 auto;
    margin-bottom: 3.5rem;

    h2 {
      font-family: "Inter", sans-serif;
      font-size: 2.25rem;
      line-height: 1.2;
      position: relative;

      @media (max-width: 560px) {
        text-align: center;
      }

      &::before {
        content: "";
        position: absolute;
        width: 25%;
        height: 5px;
        background-color: var(--green-400);
        border-radius: 5px;
        bottom: -0.5rem;
      }
    }

    p {
      margin-top: 1.5rem;
      font-size: 1rem;
      color: var(--gray-200);
      text-align: center;
      line-height: 1.5;
      max-width: 70%;

      @media (max-width: 560px) {
        max-width: 100%;
      }
    }
  }

  .carrouselImage {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
`;

export const ServicesContainer = styled.section`
  background: var(--blue-100);
  padding: 3.5rem 0;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("/background-service.png");
    z-index: 0;
    top: 0;
  }

  h2 {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 2.25rem;
    z-index: 2;
    color: #2b2b2b;
    margin-bottom: 2.5rem;
    position: relative;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 2rem;
    }
  }

  .gridTemplate {
    position: relative;
    z-index: 2;
    margin: 0 auto;
    max-width: 1080px;

    display: grid;
    grid-auto-flow: column;
    overflow-x: auto;
    gap: 1.5rem;
    padding-bottom: 1rem;
    width: 100%;

    @media (max-width: 560px) {
      width: 90%;
    }

    .cardsItem {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: #f9f9f9;
      width: 15.6rem;

      box-shadow: 0px -2px 39px rgba(0, 0, 0, 0.07),
        0px -0.602941px 11.7574px rgba(0, 0, 0, 0.0456112),
        0px -0.250431px 4.88341px rgba(0, 0, 0, 0.035),
        0px -0.090576px 1.76623px rgba(0, 0, 0, 0.0243888);
      border-radius: 8px;

      span {
        color: #00334a;
        margin: 1rem 0;
        font-size: 1.5rem;
      }

      button {
        border: 1px solid var(--green-400);
        margin-bottom: 1.5rem;
        border-radius: 8px;
        color: var(--green-400);
        padding: 0.4rem 1.5rem;
        cursor: pointer;

        transition: 0.2s;

        &:hover {
          background: var(--green-400);
          color: var(--white);
        }
      }
    }

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #9a9a9a;
      border-radius: 20px;
    }
  }
`;

export const AboutUsContainer = styled.section`
  padding: 5rem 0;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 560px) {
    grid-template-columns: none;
    padding: 5rem 1rem;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url("/background-aboutUs.png");
    position: absolute;
    background-size: cover;
    z-index: 0;
    top: 0;
  }

  img {
    position: relative;
    z-index: 2;

    @media (max-width: 560px) {
      display: none;
    }
  }

  .aboutUsText {
    position: relative;
    z-index: 2;
    max-width: 90%;
    transform: translateX(-1rem);

    @media (max-width: 560px) {
      transform: translateX(0);
      max-width: 100%;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
      font-family: "Inter", sans-serif;
      font-size: 2.25rem;
      line-height: 1.2;
      position: relative;
      margin-bottom: 2.5rem;

      &::before {
        content: "";
        position: absolute;
        width: 40%;
        height: 5px;
        background-color: var(--green-400);
        border-radius: 5px;
        bottom: -0.5rem;
      }
    }

    p {
      color: var(--gray-200);
      line-height: 1.5;

      & + p {
        margin-top: 1.5rem;
      }
    }

    a {
      font-weight: 500;
      font-family: "Inter", sans-serif;
      text-transform: uppercase;
      padding: 0.7rem 2rem;
      margin-top: 2.5rem;

      border: 2px solid var(--green-400);
      border-radius: 8px;

      transition: 0.2s;

      &:hover {
        background: var(--green-400);
      }
    }
  }
`;
