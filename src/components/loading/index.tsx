import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from 'utils/constants';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;

    h1 {
        color: ${colors.white};
    }
`;

const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
    border: 8px solid ${colors.white};
    border-top: 8px solid ${colors.primary.main};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation-name: ${spinAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    margin-right:8px;
`;

const Loading:React.FC = () => (
    <Container>
        <Loader />
        <h1>Carregando...</h1>
    </Container>
)

export default Loading;