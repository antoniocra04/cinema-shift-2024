import { StarRate } from "../starRate"
import {Button} from '../button/index'
import { BACKEND_URL } from "../../api/client";
import "./style.scss"

interface IFilmCard{
    coverImageUrl: string;
    genre: string;
    year: string;
    title: string;
    rating: number;
}

export const FilmCard: React.FC<IFilmCard> = ({coverImageUrl, genre, year, title, rating}) => {
    return(
        <div className="film-card">
            <div className="film-card__cover" style={{backgroundImage: `url("${BACKEND_URL}${coverImageUrl}")`}}>
                <div className="cover__info">
                    <p className="cover__genre">{genre}</p>
                    <p className="cover__location">{year}</p>
                </div>
            </div>
            <h2 className="film-card__title">{title}</h2>
            <StarRate rating={rating} />
            <p className="film-card__rating">kinopoisk {rating}</p>
            <Button text="Подробнее" />
        </div>
    )
}