import { axiosClient } from './client';

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

export const getAllFilms = async () => {
	return axiosClient.get('/cinema/today');
};
