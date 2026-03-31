
import './App.css'
import Footer from './components/Footer/Footer'
import Herosection from './components/Navbar/Herosection'
import Navbar from './components/Navbar/Navbar'
import RatingSection from './components/Rating/RatingSection'
import DigitalTools from "./components/DigitalTools/DigitalTools";
import Card from './components/Card/Card'


const getApi = async()=>{
 const res = await fetch("/public/DigitoolsApi.json")
 return res.json()
} 
const Apipromise = getApi()
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <RatingSection></RatingSection>
      <DigitalTools></DigitalTools>
      <Card Apipromise = {Apipromise}></Card>
      <Footer></Footer>
    </>
  )
}

export default App
