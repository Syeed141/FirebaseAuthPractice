import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// react router 
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root/Root.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register.jsx/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children : [

      {path : "Login", Component:Login },
      {path : "Register", Component: Register  },


    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
