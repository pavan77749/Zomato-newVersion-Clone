import React from "react";
import Image from "@/assets/Food.jpeg";
import { Badge } from "./ui/badge";
import { Timer } from "lucide-react";
import AvailableMenu from "./AvailableMenu";
import { Separator } from "./ui/separator";

const RestaurantDetail = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="w-full ">
        {/* Restaurant img  */}
        <div className="relative h-32 w-full md:h-64 lg:h-72">
          <img
            src={Image}
            alt="res_img"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        {/* Restaurant Details  */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-xl">Tandoori Tadka</h1>
            <div className="flex gap-2 my-2">
              {["biryani", "momos", "jalebi"].map(
                (cuisine: string, idx: number) => (
                  <Badge
                    key={idx}
                    className="text-red rounded-md hover:cursor-pointer  whitespace-nowrap"
                    variant={"outline"}
                  >
                    {cuisine}
                  </Badge>
                )
              )}
            </div>
            <div className="flex md:flex-row flex-col gap-2 my-2">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5" />
                <h1 className="flex items-center gap-2 font-medium">
                  Delivery Time: <span className="text-red">25 min</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Separator  className="mb-3 md:hidden"/>
        {/* Available Menu  */}
        <AvailableMenu  />
      </div>
    </div>
  );
};

export default RestaurantDetail;
