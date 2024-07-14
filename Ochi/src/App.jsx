import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Play from './components/Play'
import Feature from './components/Feature'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll()
  return (
    <>
     <div className=" w-full h-screen bg-[]   ">
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <About/>
      <Play/>
      <Feature/>
      <Cards/>
      <Footer/>
     </div>

    </>
  )
}

export default App
