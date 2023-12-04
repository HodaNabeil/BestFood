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

import Header from './components/Header';
import { store } from './rtk/Store';
import About from './components/About';
import MenuOrder from './Page/MenuOrder';





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
        <MenuOrder/>
      </div>
  }
,
  {
    path : '/home',
    element : <div>
        <Home/>
      </div>
  },{
    path: '/menuorder',
    element:<>
    <Header/>
    <MenuOrder/>
    </>
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
