import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	text-align: center;
`;

const Home = () => {
	return (
		<Container>
			<h1>Welcome to Friends App!</h1>
		</Container>
	);
};

export default Home;
