import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'



import Home from './Page/Home';
import Services from './Page/Services';

import Contect from './Page/Contect';
import Header from './components/Header';
import { store } from './rtk/Store';
import About from './components/About';





const router = createBrowserRouter([

  {
    path: "/",
    element: (
      <div>
    
          <Home/>
      </div>
    ),
  },
  {
    path: "/about",
    element: <div>
      <Header/>
      <About/> 
      </div>,
  }
  ,
  {
    path: "/services",
    element: <div>
          <Header/>
      <Services/> 
      </div>,
  },
  {
    path : '/contect',
    element : <div>
        <Header/>
        <Contect/>
      </div>
  }
  ,
  {
    path : '/contect',
    element : <div>
        <Header/>
        <Contect/>
      </div>
  }
  ,
  {
    path : '/home',
    element : <div>
        <Home/>
    
      </div>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>
);

reportWebVitals();
