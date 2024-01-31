import './style.scss';
import { useRating } from './hooks/useRating';

interface StarRateProps {
	rating: number;
}

export const StarRate: React.FC<StarRateProps> = ({ rating }) => {
	const stars = useRating(rating);

	return (
		<div className="star-rate">
			{stars.map((e, index) => (
				<span key={index} className={`star-rate__star ${e ? 'checked' : ''}`}></span>
			))}
		</div>
	);
};
