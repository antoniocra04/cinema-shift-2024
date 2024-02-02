import { Link } from 'react-router-dom';
import { LoginIcon } from '../../assets/icons/LoginIcon';
import { LogoutIcon } from '../../assets/icons/LogoutIcon';
import { useUserDispatch, useUserSelector } from '../../store/user/userHooks';
import './style.scss';
import { setToken } from '@store/user/userSlice';

export const Header: React.FC = () => {
	const tokenDispatch = useUserDispatch();
	const token = useUserSelector((state) => state.user.token);

	const onLogout = (): void => {
		tokenDispatch(setToken(''));
	};
	return (
		<header className="header">
			<div className="header__container">
				<nav className="header__menu">
					<Link to="/afisha" className="header__logo">
						<img src="../Logo.png" alt="" className="logo__image" />
					</Link>
					<ul className="header__menu-list">
						<li className="header__menu-item">
							<Link to={'/profile'} className="header__menu-link">
								Профиль
							</Link>
						</li>
						<li className="header__menu-item">
							<Link to={'/tickets'} className="header__menu-link">
								Билеты
							</Link>
						</li>
					</ul>
				</nav>
				{token ? (
					<button className="header__button" onClick={onLogout}>
						<LoginIcon className="button__image" fill="#000000" />
						<p className="button__text">Выйти</p>
					</button>
				) : (
					<Link to={'/'}>
						<button className="header__button">
							<LogoutIcon className="button__image" fill="#000000" />
							<p className="button__text">Войти</p>
						</button>
					</Link>
				)}
			</div>
		</header>
	);
};
