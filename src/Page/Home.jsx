
import React, { Suspense } from "react"
import Category from "../components/Category"
import Footer from "../components/Footer"
import Header from "../components/Header"
// import FilterMenu from "../components/FilterMenu"
// import Hero from "../components/Hero"
// import NewProduct from "../components/NewProduct"


import ScrollTopButton from "../components/ScrollTopButton"

const LazyFilterMenu = React.lazy(() => import('../components/FilterMenu'))

const LazyNewProduct =React.lazy(()=> import ("../components/NewProduct"));


const LazyHero = React.lazy(()=> import('../components/Hero'));

function Home() {
  return (
    <div className=" overflow-hidden">
      <Header/>
      <Suspense fallback='landing Page '>
        <LazyHero/>
      </Suspense>
      <Suspense  fallback=" newprodcut ">
        <LazyNewProduct/>
      </Suspense>
      <Suspense fallback= " Filter Menu">
        <LazyFilterMenu/>
      </Suspense>
      <Category/>
      <Footer/>
      <ScrollTopButton/>
          
    </div>
  )
}

export default Home
