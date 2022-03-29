import { useState} from 'react';
import { Container, Image, Title, ContentWrap, Text } from './styles';

import Modal from '../Modal';

export default function Character({ data }) {
  const [ showModal, setShowModal] = useState(false);

    function handleClick() {
      setShowModal(!showModal);
    }

  return (
    <>
      <Container onClick={handleClick}>
        <Image 
          src={data.image} 
          alt="Character picture"
          width="100"
          height="90"
        />
        <ContentWrap>
          <Title>{data.name}</Title>
          <Text 
            status={data.status} 
            alive={'#55CC44'} dead={'#D63D2E'}
          >
            {data.status}
          </Text>
        </ContentWrap>
      </Container>

      {showModal ? (
        <Modal data={data} handleClick={handleClick}/>
      ) : ''}
    </>
  );
}