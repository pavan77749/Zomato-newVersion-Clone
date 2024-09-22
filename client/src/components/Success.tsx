import React from "react";
import Image from "@/assets/hero_pizza.png";
import { useEffect } from "react";
import { IndianRupee } from "lucide-react";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useOrderStore } from "../store/useOrderStore";
import { Orders } from "@/types/orderTypes";
import { CartItem } from "@/types/cartTypes";


const Success = () => {
  // const orders = [1];
  const {orders,getOrderDetails} = useOrderStore()
  
  useEffect(()=>{
    getOrderDetails()
  },[getOrderDetails])
  if (orders.length === 0) 
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="font-bold text-2xl text-gray-700 dark:text-gray-300">
          {" "}
          Orders Not Found
        </h1>
      </div>
    );
   
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="bg-whited dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="text-center mb-6">
             {
               orders.map((order:any,index:number)=>(

          <h1 className="text-2xl font-bold text-gray-800  dark:text-gray-200">
            Order Status: {""}
           
            <span className="text-red">{order.status}</span>
          </h1>
               ))
            }
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Order Summary
          </h2>
          {/* Your Ordered Item Display heree  */}
          {
            orders.map((order:any,index:number)=>(
<div key={index}>
{
  order.cartItems.map((item:CartItem)=>(

          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  className="w-14 h-14 rounded-md object-cover"
                  src={item.image}
                  alt="orderImage"
                />
                <h3 className="ml-4 text-gray-800 dark:text-gray-200 font-medium">
                  {item.name}
                <h4>Quantity:{item.quantity}</h4>
                </h3>
            
              </div>
              <div className="text-right">
                <div className="text-gray-800 dark:text-gray-200 flex items-center">
                  <IndianRupee />
                  <span className="text-lg font-medium">{item.price}/Quantity</span>
                </div>
              </div>
            </div>
            <Separator className="my-4" />
          </div>
  ))}
</div>
  )) }
        </div>
        <Link to="/cart">
          <Button className="bg-red hover:bg-hoverRed w-full my-3 rounded-md">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
