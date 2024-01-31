import "./style.scss"
import { useRating } from "./hooks/useRating";

interface IStarRate{
    rating: number;
}

export const StarRate: React.FC<IStarRate> = ({rating}) => {
    const stars = useRating(rating)

    return(
        <div className="star-rate">
            {
                stars.map((e) => (
                    <span className={`star-rate__star ${e ? "checked" : ""}`}></span>
                ))
            }
        </div>
    )
}