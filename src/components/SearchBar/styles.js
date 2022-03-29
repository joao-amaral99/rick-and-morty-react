import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  margin-top: 1rem;

  input {
    background-color: #eaecef;
    border: 2px solid #d6deeb;
    border-radius: 5px;
    font-size: 1.1rem;
    height: 2.5rem;
    letter-spacing: 0.6px;
    padding: 2px 8px;
    width: 400px;
    

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