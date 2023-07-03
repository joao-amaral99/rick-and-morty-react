import styled from "styled-components";

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 1.5rem;
  justify-content: center;
  padding-bottom: 3rem;
`;

export const Image = styled.img`
  height: 220px;
  left: 50%;
  margin: 2rem 0;
  position: relative;
  transform: translateX(-50%);
  width: 640px;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 400px;
  }

  @media (max-width: 420px) {
    max-width: 100%;
    width: 320px;
  }

  @media (max-width: 380px) {
    width: 280px;
  }

  @media (max-width: 320px) {
    visibility: hidden;
  }
`;

export const BtnDarkMode = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 4rem;
  top: 2rem;

  svg {
    color: ${(props) => (props.darkMode ? props.light : props.dark)};
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    left: 50%;
    margin-top: 5rem;
    right: 50%;
    transform: translateX(-50%);

    svg {
      font-size: 5rem;
    }
  }
`;

export const WrapButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;

  @media (max-width: 480px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Btn = styled.button`
  align-items: center;
  background-color: transparent;
  border: 3px solid rgba(4, 173, 209, 0.8);
  border-radius: 7px;
  color: rgba(4, 173, 209, 0.8);
  display: flex;
  font-size: 1.12rem;
  font-weight: bold;
  height: 2.5rem;
  justify-content: center;
  letter-spacing: 0.7px;
  margin-bottom: 2rem;
  transition: all 0.2s;
  width: 8rem;

  &:disabled {
    border: none;
    background-color: #b4b4b4;
    cursor: not-allowed;
    color: #ccc;

    &:hover {
      box-shadow: none;
    }
  }

  &:hover {
    box-shadow: 0 0 0 1px rgba(4, 173, 209, 0.8);
  }

  @media (max-width: 480px) {
    width: 10rem;
  }
`;
