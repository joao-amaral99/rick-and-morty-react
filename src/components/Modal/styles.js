import styled from 'styled-components';

export const Container = styled.div`
	align-items: center;
	background-color: rgb(30, 30, 30);
	border-radius: 10px;
	display: flex;
	height: 500px;
	justify-content: space-evenly;
	max-width: 100%;
	position: fixed;
	top: 50%;
	transform: translateY(-50%);
	width: 1000px;

	@media (max-width: 1200px) {
		width: 800px;
	}

	@media (max-width: 950px) {
		flex-direction: column;
		height: auto;
		padding: 20px;
		width: 500px;
	}

	@media (max-width: 540px) {
		width: 350px;
	}
`;

export const Image = styled.img`
	border-radius: 50%;
	width: 300px;
	image-rendering: pixelated;
	object-fit: contain;

	@media (max-width: 1200px) {
		width: 290px;
	}

	@media (max-width: 950px) {
		width: 200px;
	}
`;

export const Text = styled.strong`
	color: #e5e5e5;
	font-size: 1.15rem;
	letter-spacing: 0.7px;
	margin: 0.8rem 0;

	span {
		color: #9e9e9e;
	}
`;

export const Btn = styled.button`
	background-color: #d63d2e;
	border: none;
	border-radius: 3px;
	color: #fff;
	font-size: 1.1rem;
	letter-spacing: 2px;
	margin-top: 1rem;
	transition: 0.2s;
	padding: 0.4rem 0;
	font-weight: 500;

	&:hover {
		box-shadow: 0 0 0 3px #d63d2e;
	}

	@media (max-width: 950px) {
		margin: 1rem auto;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h2`
	color: #e5e5e5;
	font-size: 2.2rem;
	letter-spacing: 1px;
	margin-bottom: 1rem;
	text-align: center;
`;
