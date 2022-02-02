import { Container, Image, Title, Text, Btn, Content } from './styles';

export default function Modal(
  { image, name, status, gender, species, totalEpisode, location, handleClick }
  ) {
  return (
    <Container>
      
      <div>
        <Image src={image} alt="Character picture" />
      </div>
      
      <Content>
        <Title>{name}</Title>
        <Text>Status: <span>{status}</span></Text>
        <Text>Gender: <span>{gender}</span></Text>
        <Text>Specie: <span>{species}</span></Text>
        <Text>Episodes: <span>{totalEpisode}</span></Text>
        <Text>Location: <span>{location}</span></Text>

        <Btn onClick={handleClick}>Fechar</Btn>
      </Content>
      
     
    </Container>
  );
}