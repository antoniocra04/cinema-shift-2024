import { axiosClient } from '../client';

export interface Film {
	id: number;
	img: string;
	genres: string[];
	country: { name: string };
	releaseDate: string;
	name: string;
	description: string;
	userRatings: { kinopoisk: number };
}

interface GetAllFilmsDto {
	data: {
		success: boolean;
		reason: string;
		films: Film[];
	};
}

export const getAllFilms = async (): Promise<GetAllFilmsDto> => {
	return await axiosClient.get('/cinema/today');
};
