
import './App.css'
import About from './Home/About'
import Bolg from './Home/Bolg'
import Department from './Home/Department'
import Doctor from './Home/Doctor'
import Footer from './Home/Footer'
import Header from './Home/Header'
import Navbar from './Home/Navbar'
import Regervation from './Home/Regervation'
import Services from './Home/Services'

function App() {


  return (
    <>
     <Navbar/>
     <Header/>
     <About/>
     <Services/>
     <Department/>
     <Doctor/>
     <Regervation/>
     <Bolg/> 
     <Footer/>
    </>
  )
}

export default App
