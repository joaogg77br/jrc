import { createBrowserRouter, RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Contato from "./Pages/Contato.tsx"
import About from './Pages/About.tsx'
import Services from './Pages/Services.tsx'
import SgePage from './Pages/SgePage.tsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/contato",
    element: <Contato />
  },
  {
    path: "/sobre",
    element: <About />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/sge",
    element: <SgePage />
  }

])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
