import React from 'react';
import { MdClose } from 'react-icons/md';

import { apiMoviePath, colors } from '../../utils/constants';
import { MovieModalProps } from '../../utils/interfaces';
import { BackDrop, Banner, CloseButton, Description, Divider, Info, ModalCard, OriginalTitle, Row, Title, Value } from './styles';
import NotAvailable from 'assets/default-image-banner.jpg';

const Modal:React.FC<MovieModalProps> = ({movie, close}) => {

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
                <CloseButton onClick={close}>
                    <MdClose fontSize={24} />
                </CloseButton>
                <Banner
                    alt=""
                    src={
                        movie.backdrop_path ? `${apiMoviePath}${movie.backdrop_path}` : NotAvailable
                    }
                />
                <Title>{movie.title}</Title>
                <OriginalTitle>{movie.original_title}</OriginalTitle>

                <Info>Sinopse:</Info>
                <Divider style={{marginTop: 4}}/>
                    <Description>{movie.overview.length ? movie.overview : 'Não disponível'}</Description>
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
                    <h1 style={{
                        color: handleScoreColor(movie.vote_average)
                    }}>
                        {movie.vote_average}
                    </h1>
                </Row>
            </ModalCard>
        </BackDrop>
    )
}

export default Modal;