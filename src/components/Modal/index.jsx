import { Btn, Container, Content, Image, Text, Title } from './styles';

export default function Modal({ data, handleClick }) {
	return (
		<Container>
			<div>
				<Image src={data.image} alt={data.name} />
			</div>

			<Content>
				<Title>{data.name}</Title>
				<Text>
					Status: <span>{data.status}</span>
				</Text>
				<Text>
					Gender: <span>{data.gender}</span>
				</Text>
				<Text>
					Specie: <span>{data.species}</span>
				</Text>
				<Text>
					Episodes: <span>{data.episode.length}</span>
				</Text>
				<Text>
					Location: <span>{data.location.name}</span>
				</Text>

				<Btn onClick={handleClick}>Fechar</Btn>
			</Content>
		</Container>
	);
}
