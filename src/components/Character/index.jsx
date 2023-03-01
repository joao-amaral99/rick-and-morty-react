import { useState } from 'react';
import { Container, ContentWrap, Image, Text, Title } from './styles';

import Modal from '../Modal';

export default function Character({ data }) {
	const [modalData, setModalData] = useState(null);

	function openModal(data) {
		setModalData(data);
	}

	function closeModal() {
		setModalData(null);
	}

	return (
		<>
			<Container onClick={() => openModal(data)}>
				<Image src={data.image} alt={data.name} width="100" height="90" />
				<ContentWrap>
					<Title>{data.name}</Title>
					<Text status={data.status} alive={'#55CC44'} dead={'#D63D2E'}>
						{data.status}
					</Text>
				</ContentWrap>
			</Container>

			{modalData && <Modal data={data} handleClick={closeModal} />}
		</>
	);
}
