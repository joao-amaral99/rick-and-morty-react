import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { BtnDarkMode, Container, Image } from './styles';

import Logo from '../../assets/rickandmorty.png';
import Character from '../../components/Character';
import SearchBar from '../../components/SearchBar';

export default function Home() {
	const [characters, setCharacters] = useState([]);
	const [darkMode, setDarkMode] = useState(false);
	const [text, setText] = useState('');

	const apiURL = `https://rickandmortyapi.com/api/character/`;

	useEffect(() => {
		const fetchCharacters = async () => {
			const data = await fetchData(apiURL);

			setCharacters(data.results);
		};

		fetchCharacters();
	}, []);

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

	const fetchData = async (url) => {
		const response = await fetch(url);
		return response.json();
	};

	const handleWithDarkMode = () => {
		const body = document.body;
		darkMode
			? body.classList.remove('dark-mode')
			: body.classList.add('dark-mode');

		setDarkMode(!darkMode);
	};

	return (
		<>
			<Image src={Logo} alt="Logo image" width="600" height="360" />
			<BtnDarkMode
				onClick={handleWithDarkMode}
				darkMode={darkMode}
				light={'#e5e5e5'}
				dark={'#272727'}
			>
				{darkMode ? <BsSun /> : <BsFillMoonStarsFill />}
			</BtnDarkMode>

			<SearchBar value={text} onChange={(search) => setText(search)} />

			<Container>
				{characters.map((data) => (
					<Character key={data.id} data={data} />
				))}
			</Container>
		</>
	);
}
