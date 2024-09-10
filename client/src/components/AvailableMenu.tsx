import React from "react";
import Image from "@/assets/Food.jpeg";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

const AvailableMenu = () => {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-3">Available Menu</h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="max-w-xs mx-auto rounded-lg shadow-lg overflow-hidden">
          <img
            src={Image}
            alt="menu_img"
            className="w-full h-40 object-cover"
          />
          <CardContent>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Biryani
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <h3 className="text-lg font-semibold mt-4 ">
              Price: <span className="text-red font-bold">₹80</span>
            </h3>
          </CardContent>
          <CardFooter className="flex justify-start">
            <Button className="bg-red hover:bg-hoverRed w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenu;
