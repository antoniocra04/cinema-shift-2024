import type { ComponentProps } from 'react';
import './style.scss';

interface InputProps extends ComponentProps<'input'> {}

export const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
	return <input type="text" className="input" onChange={onChange} placeholder={placeholder} />;
};
