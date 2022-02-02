import { useState} from 'react';
import { Container, Image, Title, ContentWrap, Text } from './styles';

import Modal from '../Modal';

export default function Character(
  {name, status, image, location, totalEpisode, gender, species}
  ) {
  const [ showModal, setShowModal] = useState(false);

    function handleClick() {
      setShowModal(!showModal);
    }

  return (
    <>
      <Container onClick={handleClick}>
        <Image 
          src={image} 
          alt="Character picture"
          width="100"
          height="90"
        />
        <ContentWrap>
          <Title>{name}</Title>
          <Text status={status} alive={'#55CC44'} dead={'#D63D2E'}>{status}</Text>
        </ContentWrap>
      </Container>

      {showModal ? (
        <Modal 
          name={name}
          status={status}
          image={image}
          location={location}
          totalEpisode={totalEpisode}
          gender={gender}
          species={species}
          handleClick={handleClick}
        />
      ) : ''}
      
    </>
  );
}