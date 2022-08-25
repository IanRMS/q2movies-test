import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from 'utils/constants';

import Logo from 'assets/project-logo.png';

const Container = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    background-color: ${colors.background};
    overflow-x: hidden;
    display: flex;
    align-items:center;
    justify-content:center;
`;

const opacityAnimation = keyframes`
    0% { opacity: 1.0 }
    50% { opacity: 0.5 }
    100% {opacity: 1.0}
`;


const Image = styled.img`
    width: calc(100% - 16px);
    max-width: 320px;
    animation-name: ${opacityAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;


const Splash:React.FC = () => (
    <Container>
        <Image alt="" src={Logo}/>
    </Container>
)

export default Splash