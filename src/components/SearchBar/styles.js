import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1rem auto;

  input {
    background-color: #eaecef;
    border: 2px solid #d6deeb;
    border-radius: 5px;
    display: flex;
    font-size: 1.1rem;
    height: 2.5rem;
    letter-spacing: 0.6px;
    margin: 3rem 0;
    padding: 2px 8px;
    width: 450px;

    &:focus {
      background-color: #fff;
      box-shadow: 0 0 0 3px rgba(4, 173, 209, 0.8);
      outline: none;
      transition: 0.2s;
    }

    @media (max-width: 480px) {
      width: 300px;
    }
  }
`;
