import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'

// import Home from './Page/Home';
// import Services from './Page/Services';
import Header from './components/Header';
import { store } from './rtk/Store';
// import About from './Page/About';
import MenuOrder from './Page/MenuOrder';

const LazyServices = React.lazy(() =>import('./Page/Services'));

const LazyHome = React.lazy(()=> import("./Page/Home"));

const LazyAbout = React.lazy(()=> import("./Page/About"));


const router = createBrowserRouter([

  {
    path: "/",
    element: (
      <div>
      <Suspense fallback = "Loading Page Home ">
        <LazyHome/>
      </Suspense>
        
      </div>
    ),
  },
  {
    path: "/about",
    element: <div>
      <Header/>
      <Suspense fallbac= 'Loading Page About'>
        <LazyAbout/>
      </Suspense>
      </div>,
  }
  ,
  {
    path: "/services",
    element: <div>
        <Header/>
          <React.Suspense  fallback= 'Loading ..'>
          <LazyServices/>
          </React.Suspense>
        
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
      <Suspense fallback = "Loading Page Home ">
        <LazyHome/>
      </Suspense>
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


