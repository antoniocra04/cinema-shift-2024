import './style.scss';

interface IInput {
	placeholder?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInput> = ({ placeholder, onChange }) => {
	return <input type="text" className="input" onChange={onChange} placeholder={placeholder} />;
};
