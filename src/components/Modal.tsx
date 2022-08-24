import React from 'react';
import styled from 'styled-components';
import { apiMoviePath, colors } from '../utils/constants';
import { MovieModalProps } from '../utils/interfaces';


const BackDrop = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    top: 0px;
    right: 0px;
    min-height: 470px;
`;

export const ModalCard = styled.div`
    background: ${colors.background};
    padding: 16px 12px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 35%) 0px 2px 8px 0px;
    z-index: 1001;
    width: 98%;
    max-width: 960px;
    position: relative;
`;

export const Title = styled.h2`
    color: ${colors.white};
    font-size: 28px;
`;

export const OriginalTitle = styled.h3`
    color: ${colors.gray};
    margin-bottom: 12px;
    font-size: 14px;
`;

export const Divider = styled.hr`
    background-color: ${colors.gray};
    width: 100%;
    height: 2px;
`;

export const Description = styled.h4`
    color: ${colors.white};
    margin: 12px 0px;
`;

export const Info = styled.h4`
    color: ${colors.white};
    margin-right: 8px;
`;

export const Row = styled.div`
    margin: 8px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Banner = styled.img``;

export const Value = styled.span`
    color: ${colors.gray};
`;

export const CloseButton = styled.button`
    background-color: ${colors.negative};
    padding: 8px;
    border-radius: 4px;
    position: absolute;
    top: 8px;
    right: 8px;
    outline: none;
    border: none;
`;

const Modal:React.FC<MovieModalProps> = ({movie}) => {

    const handleScoreColor = (score: number):string => {
        if (score >= 8 ) {
            return colors.positive
        } else if (score > 6 && score < 8) {
            return colors.medium
        }
        return colors.negative
    }
    
    return (
        <BackDrop>
            <ModalCard>
                <CloseButton></CloseButton>
                {/* <Banner alt="" src={`${apiMoviePath}${movie.backdrop_path}`}/> */}
                <Title>{movie.title}</Title>
                <OriginalTitle>{movie.original_title}</OriginalTitle>

                <Info>Sinopse:</Info>
                <Divider style={{marginTop: 4}}/>
                    <Description>{movie.overview}</Description>
                <Divider/>
                <Row>
                    <Info>Data de lançamento:</Info>
                    <Value>{new Date(movie.release_date).toLocaleDateString()}</Value>
                </Row>
                <Row>
                    <Info>Idioma original:</Info>
                    <Value>{movie.original_language}</Value>
                </Row>
                <Row>
                    <Info>Conteúdo adulto:</Info>
                    <Value>{movie.adult ? 'Sim' : 'Não'}</Value>
                </Row>
                <Row>
                    <Info>Média do público:</Info> 
                    <h1 style={{color: handleScoreColor(movie.vote_average)}}>{movie.vote_average}</h1>
                </Row>
            </ModalCard>
        </BackDrop>
    )
}

export default Modal;