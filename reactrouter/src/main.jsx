import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
//import router from './router/router.jsx'
import Layout from './Layout.jsx'
import Home from './Components/home/home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github,{githubInfoLoader} from './Components/Github/Github.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/user/:id",
        element: <User/>,
      },
      {
        path: "/github",
        element: <Github/>,
        loader: githubInfoLoader
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
