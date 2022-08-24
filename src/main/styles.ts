import styled from 'styled-components';
import { colors } from '../utils/constants';

export const Main = styled.main`
    max-width: 100vw;
    min-height: 100vh;
    background-color: ${colors.background};
    overflow-x: hidden;
`;

export const Content = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MoviesContainer = styled.div`
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    max-width: 960px;
    padding: 12px;

    @media(max-width: 580px) {
        grid-template-columns: 1fr 1fr;
    }

    @media(max-width: 375px) {
        grid-template-columns: 1fr;
    }
`;

export const MovieCard = styled.div`
    box-shadow: rgb(0 0 0 / 35%) 0px 2px 8px 0px;
    border-radius: 10px;
    padding: 8px;
    cursor: pointer;
    user-select: none;
    position: relative;
    border: 2px solid rgba(0, 0, 0, 0.0);
    transition: 0.2s;

    &:hover {
        border-color: ${colors.primary.dark};
        filter: brightness(1.15);
    }
    
`;

export const MovieImage = styled.img`
    width: 100%;
    max-height: 360px;
    border-radius: 4px;
    object-fit: cover;
    margin-bottom: 8px;
`;


export const MovieTitle = styled.h3`
    color: ${colors.white};
    font-size: 24px;
    margin-bottom: 4px;
    line-height: 24px;
`;

export const MovieOriginalTitle = styled.h4`
    color: ${colors.gray};
    font-size: 16px;
    margin-bottom: 40px;
`;

export const MoreInfoButton = styled.button`
    outline: none;
    border: none;
    color: ${colors.primary.main};
    font-size: 16px;
    background: none;
    position: absolute;
    bottom: 8px;

    &:hover {
        cursor: pointer;
        color: ${colors.primary.dark};
    }
`;