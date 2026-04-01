
import './App.css'
import Footer from './components/Footer/Footer'
import Herosection from './components/Navbar/Herosection'
import Navbar from './components/Navbar/Navbar'
import RatingSection from './components/Rating/RatingSection'
import DigitalTools from "./components/DigitalTools/DigitalTools";
import Card from './components/Card/Card'
import { useState } from 'react'
import ShowCart from './components/ShowCart/ShowCart'


const getApi = async()=>{
 const res = await fetch("/DigitoolsApi.json")
 return res.json()
} 
const Apipromise = getApi()
function App() {
const [activeTab,setactiveTab] = useState("Products")
const [carts,setcarts] = useState([])
console.log(carts)
const Showcart = ()=>{

}
  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <RatingSection></RatingSection>
      <DigitalTools setactiveTab={setactiveTab}></DigitalTools>
      {activeTab == "Products" && <Card Apipromise={Apipromise} carts={carts} setcarts={setcarts}></Card>}
      {activeTab == "Cart" && <ShowCart carts={carts}></ShowCart>}
      
      <Footer></Footer>
    </>
  );
}

export default App
