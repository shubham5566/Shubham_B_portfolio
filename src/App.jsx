import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componants/header/Header'
import Nav from './componants/nav/Nav'
import About from './componants/about/About'
import Experiance from './componants/experiance/Experiance'
import Services from './componants/services/Services'
import Portfolio from './componants/portfolio/Portfolio'
import Textmonial from './componants/textmonial/Textmonial'
import Contact from './componants/contacts/Contact'
import Footer from './componants/footer/Footer'

import './App.css'

function App() {
  
  return (
    <>
     <Header/>
    <Nav/>
    <About/>
    <Experiance/>
    {/* <Services/> */}
    <Portfolio/>
    <Textmonial/>
    <Contact/>
    <Footer/>

     </>
  )
}

export default App
