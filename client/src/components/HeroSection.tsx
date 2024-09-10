import { useState } from "react"
import { Input } from "./ui/input"
import { Search } from "lucide-react"
import { Button } from "./ui/button"
import HeroImage from "@/assets/hero_pizza.png"
import {  useNavigate } from "react-router-dom"

const HeroSection = () => {
    const [searchText,setsearchText] = useState<string>("")
    const navigate = useNavigate()
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
    <div className="flex flex-col  gap-10 md:w-[40%]">
        <div className="font-bold  md:font-extrabold md:text-5xl text-2xl">
           <h1 className="font-bold md:font-extrabold mb-2  md:text-5xl text-4xl">Discover the best food & drinks</h1> 
           <p className="text-gray-500 font-bold"> Hey! Our Declicios food is waiting for you, we are always near to you</p>
        </div>
        <div className="relative flex items-center gap-2 w-full">
    
            <Input type="text " value={searchText} onChange={(e)=> setsearchText(e.target.value)} 
            className="pl-10 shadow-lg focus-visible:ring-1" placeholder="search by restaurant by name, Dish, City.."/>
            <Search className="text-gray-500 absolute inset-y-2 left-2" />
            <Button className="bg-red hover:bg-hoverRed " onClick={()=>navigate(`/search/${searchText}`)}>Search</Button>
        </div>
    </div>
    <div>
        <img src={HeroImage} alt="pizzaimg" className="object-cover w-full max-h-[500px]"/>
    </div>
    </div>
  )
}

export default HeroSection