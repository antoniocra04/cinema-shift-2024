import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { AuthPage } from './pages/auth'
import { Header } from './components/header'
import { AfishaPage } from './pages/afisha'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage/>
  },
  {
    path: "afisha",
    element: <AfishaPage/>
  }
])

export const App: React.FC = () => {

  return (
    <>
      <Header/>
      <div className="page-content">
        <RouterProvider router={router} />
      </div>
    </>
  )
}
