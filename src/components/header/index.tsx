import { LoginIcon } from '../../assets/icons/LoginIcon';
import { LogoutIcon } from '../../assets/icons/LogoutIcon';
import { useUserSelector } from '../../store/user/userHooks';
import './style.scss';

export const Header: React.FC = () => {
	const token = useUserSelector((state) => state.user.token);
	return (
		<header className="header">
			<div className="header__container">
				<nav className="header__menu">
					<a href="" className="header__logo">
						<img src="./Logo.png" alt="" className="logo__image" />
					</a>
					<ul className="header__menu-list">
						<li className="header__menu-item">
							<a href="q" className="header__menu-link">
								Профиль
							</a>
						</li>
						<li className="header__menu-item">
							<a href="q" className="header__menu-link">
								Билеты
							</a>
						</li>
					</ul>
				</nav>
				<button className="header__button">
					{token ? (
						<LoginIcon className="button__image" fill="#000000" />
					) : (
						<LogoutIcon className="button__image" fill="#000000" />
					)}
					<p className="button__text">{token ? 'Выйти' : 'Войти'}</p>
				</button>
			</div>
		</header>
	);
};
