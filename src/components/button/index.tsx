import './style.scss';

interface IButton {
	text: string;
	onClick?: () => void;
}

export const Button: React.FC<IButton> = ({ text, onClick }) => {
	return (
		<button className="button" onClick={onClick}>
			{text}
		</button>
	);
};
