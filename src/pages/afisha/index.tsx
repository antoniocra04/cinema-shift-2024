import { useQuery } from '@tanstack/react-query';
import { FilmCard } from '@components/filmCard';
import { type Film, getAllFilms } from '@api/films';
import './style.scss';

export const AfishaPage: React.FC = () => {
	const films = useQuery({ queryKey: ['films'], queryFn: getAllFilms, enabled: true });
	return (
		<div className="afisha">
			<h1 className="afisha__header-text">Афиша</h1>
			<div className="afisha__card-container">
				{films.isSuccess
					? films.data.data.films.map((film: Film) => (
							<FilmCard
								coverImageUrl={film.img}
								genre={film.genres[0]}
								year={film.releaseDate}
								title={film.name}
								rating={film.userRatings.kinopoisk}
								key={film.id}
							/>
						))
					: ''}
			</div>
		</div>
	);
};
