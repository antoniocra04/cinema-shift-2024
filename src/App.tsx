import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthPage } from './pages/auth';
import { AfishaPage } from './pages/afisha';
import { FilmPage } from './pages/film';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AuthPage />,
	},
	{
		path: 'afisha',
		element: <AfishaPage />,
	},
	{
		path: 'film/:filmId',
		element: <FilmPage />,
	},
]);

export const App: React.FC = () => {
	return <RouterProvider router={router} />;
};
