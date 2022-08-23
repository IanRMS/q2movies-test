import styled from 'styled-components';
import { colors } from '../utils/constants';

export const Main = styled.main`
    width: 100vw;
    min-height: 100vh;
    background-color: #1C1C25;
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
    gap: 8px;
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
`;

export const MovieTitle = styled.h3`
    color: ${colors.white};
    font-size: 24px;
    margin-bottom: 4px;
    line-height: 24px;
`;

export const MovieOriginalTitle = styled.h4`
    color: ${colors.gray};
    font-size: 18px;
    margin-bottom: 12px;
`;