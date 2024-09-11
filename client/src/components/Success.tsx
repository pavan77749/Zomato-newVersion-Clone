import React from "react";
import Image from "@/assets/hero_pizza.png";
import { IndianRupee } from "lucide-react";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Success = () => {
  const orders = [1];
  if (orders.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="font-bold text-2xl text-gray-700 dark:text-gray-300">
          {" "}
          Orders Not Found
        </h1>
      </div>
    );
  }
  return (
    <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="bg-whited dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800  dark:text-gray-200">
            Order Status: {""}
            <span className="text-red">{"confirm".toUpperCase()}</span>
          </h1>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Order Summary
          </h2>
          {/* Your Ordered Item Display heree  */}
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  className="w-14 h-14 rounded-md object-cover"
                  src={Image}
                  alt="orderImage"
                />
                <h3 className="ml-4 text-gray-800 dark:text-gray-200 font-medium">
                  Pizza
                </h3>
              </div>
              <div className="text-right">
                <div className="text-gray-800 dark:text-gray-200 flex items-center">
                  <IndianRupee />
                  <span className="text-lg font-medium">80</span>
                </div>
              </div>
            </div>
            <Separator className="my-4" />
          </div>
        </div>
        <Link to="/cart">
          <Button className="bg-red hover:bg-hoverRed w-full my-3 rounded-md">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
