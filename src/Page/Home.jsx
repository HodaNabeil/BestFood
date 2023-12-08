
import Category from "../components/Category"
import FilterMenu from "../components/FilterMenu"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import NewProduct from "../components/NewProduct"
import ScrollTopButton from "../components/ScrollTopButton"


function Home() {
  return (
    <div className=" overflow-hidden">
      <Header/>
      <Hero/>
      <NewProduct/>
      <FilterMenu/>
      <Category/>
      <Footer/>
      <ScrollTopButton/>
          
    </div>
  )
}

export default Home
