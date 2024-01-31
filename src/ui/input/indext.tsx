import './style.scss';

interface InputProps {
	placeholder?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
	return <input type="text" className="input" onChange={onChange} placeholder={placeholder} />;
};
