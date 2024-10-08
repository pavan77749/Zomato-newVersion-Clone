import React from "react";
import Image from "@/assets/Food.jpeg";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { MenuItem } from "@/types/restaurantTypes";
import { useCartStore } from "@/store/useCartStore";
import { useNavigate } from "react-router-dom";

const AvailableMenu = ({ menus = [] }: { menus: MenuItem[] }) => {
  const { addToCart } = useCartStore();
  const navigate = useNavigate();
  
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-3">Available Menu</h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        {
          menus.length > 0 ? (
            menus.map((menu: MenuItem) => (
              <Card className="max-w-xs mx-auto rounded-lg shadow-lg overflow-hidden" key={menu.menuId}>
                <img
                  src={menu.image}
                  alt="menu_img"
                  className="w-full h-40 object-cover"
                />
                <CardContent>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {menu.name}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    {menu.description}
                  </p>
                  <h3 className="text-lg font-semibold mt-4 ">
                    Price: <span className="text-red font-bold">₹{menu.price}</span>
                  </h3>
                </CardContent>
                <CardFooter className="flex justify-start">
                  <Button onClick={() => { addToCart(menu); navigate("/cart") }} className="bg-red hover:bg-hoverRed w-full">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p>No menu items available</p>
          )
        }
      </div>
    </div>
  );
};

export default AvailableMenu;
