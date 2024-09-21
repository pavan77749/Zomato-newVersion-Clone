import React, { useEffect } from "react";
// import Image from "@/assets/Food.jpeg";
import { Badge } from "./ui/badge";
import { Timer } from "lucide-react";
import AvailableMenu from "./AvailableMenu";
import { Separator } from "./ui/separator";
import { useRestaurantStore } from "@/store/useRestaurantStore";
import { useParams } from "react-router-dom";

const RestaurantDetail = () => {
  const params = useParams()
  const {getSingleRestaurant,singleRestaurant} = useRestaurantStore()

  useEffect(()=>{
    getSingleRestaurant(params.id!)
    // console.log(singleRestaurant)
  },[params.id])

  return (
    <div className="max-w-6xl mx-auto my-5">
      <div className="w-full ">
        {/* Restaurant img  */}
        <div className="relative h-32 w-full md:h-64 lg:h-72">
          <img
            src={singleRestaurant?.imageUrl}
            alt="res_img"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        {/* Restaurant Details  */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-xl">{singleRestaurant?.restaurantName || "loading..."}</h1>
            <div className="flex gap-2 my-2">
              {singleRestaurant?.cuisines.map(
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
                  Delivery Time: <span className="text-red">{singleRestaurant?.deliveryTime} min</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Separator  className="mb-3 md:hidden"/>
        {/* Available Menu  */}
        <AvailableMenu menus ={singleRestaurant?.menus} />
      </div>
    </div>
  );
};

export default RestaurantDetail;
