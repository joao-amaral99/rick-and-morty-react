import { useState, useEffect } from 'react';
import { Container, Image, WrapButton, Btn, BtnDarkMode, Form } from './styles';
import { BsSun, BsFillMoonStarsFill } from 'react-icons/bs';

import Character from '../../components/Character'; 
import Logo from '../../assets/rickandmorty.png';


export default function Home() {
  const [ characters, setCharacters ] = useState([]);
  const [ darkMode, setDarkMode ] = useState(false);
  const [ page, setPage ] = useState({});
  const [ inputValue, setInputValue ] = useState('');
  const [test, setTest] = useState('');
 console.log(test);
  
  const apiURL = `https://rickandmortyapi.com/api/character/`;

  useEffect(async () => {
    const data = await fetchData(apiURL);

    setCharacters(data.results);
    setPage(data.info);
  }, []);

  const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json();
  }

  const getMoreCharacters = async (url) => {
    const data = await fetchData(url);

    setCharacters(data.results);
    setPage(data.info);
  }

  const handleWithDarkMode = () => {
    const body = document.body;
    darkMode ? body.classList.remove('dark-mode') : body.classList.add('dark-mode');
    
    setDarkMode(!darkMode);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    searchCharacter(inputValue.trim());
  }

  const searchCharacter = async (params) => {
    const data = await fetchData(`${apiURL}?name=${params}`);
    setCharacters(data.results);
    setPage(data.info);
  }

  return (
    <>
      <Image src={Logo} alt="Logo image" width="600" height="360" />
      <BtnDarkMode 
        onClick={handleWithDarkMode}
        darkMode={darkMode}
        light={'#e5e5e5'}
        dark={'#272727'}
      >
        {
          darkMode ? <BsSun /> : <BsFillMoonStarsFill />
        }
      </BtnDarkMode>

      <Form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          placeholder="Busque por algum personagem..."
          onChange={(e) => setInputValue(e.target.value)} 
        />
      </Form>

      <Container>
        { characters.map(({ name, image, id, status, species, episode, location, gender }) => (   
          <Character
            key={id}
            image={image} 
            name={name}
            status={status}
            species={species}
            gender={gender}
            totalEpisode={episode.length}
            location={location.name}
          />
        ))}  
      </Container>

      <WrapButton>
        {page.prev ? (
          <Btn onClick={() => getMoreCharacters(page.prev)}>&larr; Prev</Btn>
         ) : (
          <Btn disabled>&larr; Prev</Btn>
        )} 
        {page.next ? (
          <Btn onClick={() => getMoreCharacters(page.next)}>Next &rarr;</Btn>
        ) : (
          <Btn disabled>Next &rarr;</Btn>
        )}
      </WrapButton>
    </>
  );
}
