import { createRoot } from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Tiles from './views/tiles'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />  {/* Render the child component */}
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'map',
        element: <Tiles />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
