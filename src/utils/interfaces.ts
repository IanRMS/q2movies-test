export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    length: number;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: false
    vote_average: number;
    vote_count: number;
}

export interface MovieModalProps {
    movie: Movie;
    close: () => void;
}

export interface ErrorModalProps {
    close: () => void;
}