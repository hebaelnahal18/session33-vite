import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutPage from './About/AboutPage.jsx'
import DownloadPage from './Download/DownloadPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
        {
      path:'about',
      element:<AboutPage/>
    },
        {
      path:'download',
      element:<DownloadPage/>
    },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
