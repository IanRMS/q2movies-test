import styled from 'styled-components';
import { colors } from '../utils/constants';

export const Main = styled.main`
    max-width: 100vw;
    min-height: 100vh;
    background-color: ${colors.background};
    overflow-x: hidden;
    padding: 24px 0px;
`;


export const Content = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Header = styled.header`
    width: 100%;
    max-width: 944px;
    margin-top: 24px;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid ${colors.gray};
    padding: 8px;
    margin-bottom: 12px;

    > img {
        width: 98%;
        max-width: 280px;
        margin-bottom: 12px;
    }
`;

export const MoviesContainer = styled.div`
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    max-width: 960px;
    padding: 12px;
    margin-bottom: 8px;

    @media(max-width: 580px) {
        grid-template-columns: 1fr 1fr;
    }

    @media(max-width: 375px) {
        grid-template-columns: 1fr;
    }
`;

export const Bottom = styled.div`
    width: 98%;
    max-width: 944px;
    border-top: 2px solid ${colors.gray};
    padding: 12px 0px;
    color: ${colors.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
        margin-left: 12px;

        &:disabled {
         filter: brightness(0.7);
         cursor: not-allowed;   
        }

        svg {
            color: ${colors.white};
            font-size: 28px;

            &:hover {
                color: ${colors.primary.main}
            }
        }
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