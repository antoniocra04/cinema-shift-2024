import { useQuery } from '@tanstack/react-query';
import { Button } from '../../components/button';
import { Input } from '../../components/input/indext';
import './style.scss';
import { createOtpCode, signIn } from '../../api/auth';
import { useEffect, useState } from 'react';
import { useUserDispatch } from '../../store/user/userHooks';
import { setToken } from '../../store/user/userSlice';

export const AuthPage: React.FC = () => {
	const [phone, setPhone] = useState<string>('');
	const [code, setCode] = useState<string>('');
	const [timer, setTimer] = useState<number>(0);
	const userDispatch = useUserDispatch();

	const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(e.target.value);
	};
	const onCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCode(e.target.value);
	};

	const createCode = useQuery({
		queryKey: ['code'],
		queryFn: () => createOtpCode(phone),
		refetchOnWindowFocus: false,
		enabled: false,
	});
	const userAuth = useQuery({
		queryKey: ['signin'],
		queryFn: () => signIn(phone, parseInt(code)),
		refetchOnWindowFocus: false,
		enabled: false,
	});

	const sendCode = () => {
		if (timer == 0) {
			createCode.refetch();
			setTimer(120);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (timer > 0) {
				setTimer(timer - 1);
			} else {
				clearInterval(interval);
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [timer]);

	useEffect(() => {
		if (userAuth.isSuccess) {
			userDispatch(setToken(userAuth.data.data.token));
		}
	}, [userAuth]);

	return (
		<div className="auth">
			<h1 className="auth__header-text">Авторизация</h1>
			<p className="auth__subtitle-text">Введите номер телефона для входа в личный кабинет </p>
			<Input placeholder="Телефон" onChange={onPhoneChange} />
			{createCode.isSuccess ? <Input placeholder="Проверочный код" onChange={onCodeChange} /> : ''}
			{createCode.isSuccess && userAuth.isError ? <p className="auth__input-error">Неверный код</p> : ''}
			{createCode.isSuccess ? (
				<Button text="Войти" onClick={userAuth.refetch} />
			) : (
				<Button text="Продолжить" onClick={sendCode} />
			)}
			{createCode.isSuccess ? (
				<p
					onClick={sendCode}
					className={`${timer > 0 ? 'auth__resend-text--disabled' : 'auth__resend-text--enabled'} `}
				>
					Запросить код {timer > 0 ? `повторно можно через ${timer} секунд` : ''}{' '}
				</p>
			) : (
				''
			)}
		</div>
	);
};
