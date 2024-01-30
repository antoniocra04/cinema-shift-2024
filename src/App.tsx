import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { AuthPage } from './pages/auth'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage/>
  }
])

export const App: React.FC = () => {

  return (
    <>
      <div className="page-content">
        <RouterProvider router={router} />
      </div>
    </>
  )
}
