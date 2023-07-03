import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import PersonalInfo from './pages/PersonalInfo';
import CustomerHistory from './pages/CustomerHistory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/PersonalInfo",
    element: <PersonalInfo />,
  },{
    path: "/CustomerHistory",
    element: <CustomerHistory />
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
reportWebVitals();