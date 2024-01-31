import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { AuthPage } from './pages/auth'
import { Header } from './components/header'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage/>
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
