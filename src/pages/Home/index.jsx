import { useState, useEffect } from 'react';
import { Container, Image, WrapButton, Btn, BtnDarkMode } from './styles';
import { BsSun, BsFillMoonStarsFill } from 'react-icons/bs';

import Character from '../../components/Character'; 
import SearchBar from '../../components/SearchBar';
import Logo from '../../assets/rickandmorty.png';


export default function Home() {
  const [ characters, setCharacters ] = useState([]);
  const [ darkMode, setDarkMode ] = useState(false);
  const [ page, setPage ] = useState({});

  const apiURL = `https://rickandmortyapi.com/api/character/`;

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await fetchData(apiURL);

      setCharacters(data.results);
      setPage(data.info);
    } 

    fetchCharacters();
  }, []);

  const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json();
  }

  const searchCharactersByPage = async (url) => {
    const data = await fetchData(url);

    setCharacters(data.results);
    setPage(data.info);
  }

  const handleWithDarkMode = () => {
    const body = document.body;
    darkMode ? body.classList.remove('dark-mode') : body.classList.add('dark-mode');
    
    setDarkMode(!darkMode);
  }

  const onTermSubmit = async (term) => {
    const data = await fetchData(`${apiURL}?name=${term}`);

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

      <SearchBar onTermSubmit={onTermSubmit} />

      <Container>
        { characters.map((data) => (   
          <Character key={data.id} data={data}/>
        ))}  
      </Container>

      <WrapButton>
        {page.prev ? (
          <Btn onClick={() => searchCharactersByPage(page.prev)}>&larr; Prev</Btn>
         ) : (
          <Btn disabled>&larr; Prev</Btn>
        )} 
        {page.next ? (
          <Btn onClick={() => searchCharactersByPage(page.next)}>Next &rarr;</Btn>
        ) : (
          <Btn disabled>Next &rarr;</Btn>
        )}
      </WrapButton>
    </>
  );
};