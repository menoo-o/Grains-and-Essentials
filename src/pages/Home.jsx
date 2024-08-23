// COMPONENTS
// import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Welcome from "../Components/Welcome"
import Categories from "../Components/Categories"
import NewArrivals from "../Components/NewArrivals"
import SaleItems from "../Components/SaleItem"
import Recipes from "../Components/Recipes"
// import Footer from "../Components/Footer"
// CSS
import '../App.css'
import '../index.css'


function Home() {
  return (
    <div className="app-container">

      
      {/* <nav>
        <Navbar />
      </nav> */}

      <main>
          <Hero />
          <Welcome />
          <Categories />
          <NewArrivals />
          <SaleItems />
          <Recipes />
      </main>
      
        {/* <Footer /> */}
      
      
    </div>
  );
}

export default Home;