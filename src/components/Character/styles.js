import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: rgba(30, 30, 30, 0.95);
  border-radius: 8px;
  box-shadow: 2px 3px 5px rgba(30, 30 ,30, 0.6);
  cursor: pointer;
  display: flex;
  height: 80px;
  transition: 0.2s;
  width: 340px;

  &:hover {
    box-shadow: 0 0 0 4px rgba(4, 173, 209, 0.8);
  }

  @media (max-width: 380px) {
    width: 300px;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 70px;
  margin-left: .5rem;
  width: 70px;

`;

export const Title = styled.strong`
  color: #e5e5e5;
  font-size: 1.11rem;
  letter-spacing: 0.6px;
  margin-left: 0.8rem;

  @media (max-width: 380px) {
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 380px) {
    overflow: hidden;
  }
`;

export const Text = styled.strong`
  align-items: center;
  border-radius: 3px;
  color: #9e9e9e;
  display: flex;
  justify-content: center;
  margin-left: 0.6rem;
  margin-top: 5px;
  width: 75px;

  &::before {
    background-color: 
    ${props => props.status === 'Dead' ? props.dead 
      : 
     props.status === 'Alive' ? props.alive : ''
    };
    border-radius: 50%;
    content: '';
    height: 10px;
    margin-right: 0.5rem;
    width: 10px;
    
  }
`;