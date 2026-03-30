
import './App.css'
import Footer from './components/Footer/Footer'
import Herosection from './components/Navbar/Herosection'
import Navbar from './components/Navbar/Navbar'
import RatingSection from './components/Rating/RatingSection'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <RatingSection></RatingSection>
      <Footer></Footer>
    </>
  )
}

export default App
