import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { useQuery } from "react-query";
import { BtnDarkMode, Container, Image } from "./styles";

import Logo from "../../assets/rickandmorty.png";
import Character from "../../components/Character";
import SearchBar from "../../components/SearchBar";
const apiURL = `https://rickandmortyapi.com/api/character/`;

const fetchData = async (apiUrl) => {
  const response = await fetch(apiUrl);
  return response.json();
};

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchCharacterByName = async (text) => {
      const data = await fetchData(`${apiURL}?name=${text}`);

      if (!data.results) {
        return null;
      }

      setCharacters(data.results);
    };

    fetchCharacterByName(text);
  }, [text]);

  const { data } = useQuery("characters", () => fetchData(apiURL), {
    onSuccess: (data) => {
      setCharacters(data.results);
    },
  });

  const handleWithDarkMode = () => {
    const body = document.body;
    darkMode
      ? body.classList.remove("dark-mode")
      : body.classList.add("dark-mode");

    setDarkMode(!darkMode);
  };

  return (
    <>
      <Image src={Logo} alt="Logo Rick and Morty" width="600" height="360" />
      <BtnDarkMode
        onClick={handleWithDarkMode}
        darkMode={darkMode}
        light={"#e5e5e5"}
        dark={"#272727"}
      >
        {darkMode ? <BsSun /> : <BsFillMoonStarsFill />}
      </BtnDarkMode>

      <SearchBar value={text} onChange={(search) => setText(search)} />

      <Container>
        {characters.map((character) => (
          <Character key={character.id} data={character} />
        ))}
      </Container>
    </>
  );
}
