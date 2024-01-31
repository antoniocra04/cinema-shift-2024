import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames';

import { createOtpCode, signIn } from '@api/auth';

import { useUserDispatch } from '@store/user/userHooks';
import { setToken } from '@store/user/userSlice';

import { Button } from '@ui/button';
import { Input } from '@ui/input/indext';

import { useTimer } from '@hooks/useTimer';

import './style.scss';

export const AuthPage: React.FC = () => {
	const [phone, setPhone] = useState<string>('');
	const [code, setCode] = useState<string>('');
	const [timer, setTimer] = useTimer();

	const resendCodeClass = classNames({
		'auth__resend-text--disabled': timer > 0,
		'auth__resend-text--enabled': timer === 0,
	});

	const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setPhone(e.target.value);
	};
	const onCodeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setCode(e.target.value);
	};
	const sendCode = (): void => {
		if (timer === 0) {
			createCode.refetch();
			setTimer(120);
		}
	};
	const onSignIn = (): void => {
		userAuth.refetch();
	};

	const createCode = useQuery({
		queryKey: ['code'],
		queryFn: async () => createOtpCode(phone),
	});
	const userAuth = useQuery({
		queryKey: ['signin'],
		queryFn: async () => signIn(phone, parseInt(code)),
	});

	const userDispatch = useUserDispatch();

	useEffect(() => {
		if (userAuth.isSuccess) {
			userDispatch(setToken(userAuth.data.data.token));
		}
	}, [userAuth]);

	return (
		<div className="auth">
			<h1 className="auth__header-text">Авторизация</h1>
			<p className="auth__subtitle-text">Введите номер телефона для входа в личный кабинет</p>
			<Input placeholder="Телефон" onChange={onPhoneChange} />
			{createCode.isSuccess ? (
				<>
					<Input placeholder="Проверочный код" onChange={onCodeChange} />
					{userAuth.isError ? <p className="auth__input-error">Неверный код</p> : ''}
					<Button onClick={onSignIn}>Войти</Button>
					<p onClick={sendCode} className={resendCodeClass}>
						Запросить код {timer > 0 ? `повторно можно через ${timer} секунд` : ''}{' '}
					</p>
				</>
			) : (
				<Button onClick={sendCode}>Продолжить</Button>
			)}
		</div>
	);
};
