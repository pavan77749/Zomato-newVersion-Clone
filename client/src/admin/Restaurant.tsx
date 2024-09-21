import React, { useState, FormEvent, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  RestaurantInputState,
  restaurantFromSchema,
} from "@/schema/restaurantSchema";
import { useRestaurantStore } from "@/store/useRestaurantStore";

const Restaurant = () => {
  // const loading = false;
  // const restaurantHai = false;
  const [input, setInput] = useState<RestaurantInputState>({
    restaurantName: "",
    city: "",
    country: "",
    deliveryTime: 0,
    cuisines: [],
    imageFile: undefined,
  });
  const [errors, setErrors] = useState<Partial<RestaurantInputState>>({});
  const {loading,restaurant,updateRestaurant,createRestaurant,getRestaurant} = useRestaurantStore()
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };
  const restaurantSubmitHandler = async(e: FormEvent) => {
    e.preventDefault();
    // form validation check start
    const result = restaurantFromSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<RestaurantInputState>);
      return;
    }
    // api implemenation Login start here
    console.log(input);
    const formData = new FormData;
    formData.append("restaurantName",input.restaurantName)
    formData.append("city",input.city)
    formData.append("country",input.country)
    formData.append("deliveryTime",input.deliveryTime.toString())
    formData.append("cuisines",JSON.stringify(input.cuisines))

    if(input.imageFile){
      formData.append("imageFile",input.imageFile)
    }
    if(restaurant){
      // update 
      await updateRestaurant(formData)
    }else{
      //create
      await createRestaurant(formData)
    }
  };
  useEffect(()=>{
    const fetchRestaurant = async () => {
      await getRestaurant();
      setInput({
        restaurantName: restaurant.restaurantName || "",
        city: restaurant.city || "",
        country: restaurant.country || "",
        deliveryTime: restaurant.deliveryTime || 0,
        cuisines: restaurant.cuisines ? restaurant.cuisines.map((cuisines:string)=>cuisines) : [],
        imageFile: undefined,
      })
    }
    fetchRestaurant()
  },[])
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <div>
          <h1 className="font-extrabold text-2xl mb-2">Add Restaurants</h1>
          <form action="" onSubmit={restaurantSubmitHandler}>
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              {/* Restaurant Name  */}
              <div>
                <Label>Restaurant Name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  value={input.restaurantName}
                  placeholder="Enter your restaurant name"
                  className="focus-visible:ring-0"
                  onChange={changeEventHandler}
                />
                {errors && (
                  <span className="text-sm text-red flex">
                    {errors.restaurantName}
                  </span>
                )}
              </div>
              <div>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  value={input.city}
                  placeholder="Enter your city"
                  className="focus-visible:ring-0"
                  onChange={changeEventHandler}
                />
                {errors && (
                  <span className="text-sm text-red flex">{errors.city}</span>
                )}
              </div>
              <div>
                <Label>Country</Label>
                <Input
                  type="text"
                  name="country"
                  value={input.country}
                  placeholder="Enter your Country"
                  className="focus-visible:ring-0"
                  onChange={changeEventHandler}
                />
                {errors && (
                  <span className="text-sm text-red flex">
                    {errors.country}
                  </span>
                )}
              </div>
              <div>
                <Label>Estimated Delivery Time (minutes)</Label>
                <Input
                  type="number"
                  name="deliveryTime"
                  value={input.deliveryTime}
                  placeholder="Enter your Delivery Time"
                  className="focus-visible:ring-0"
                  onChange={changeEventHandler}
                />
                {errors && (
                  <span className="text-sm text-red flex">
                    {errors.deliveryTime}
                  </span>
                )}
              </div>
              <div>
                <Label>Cuisines</Label>
                <Input
                  type="text"
                  name="cuisines"
                  value={input.cuisines}
                  placeholder="Enter your cuisines"
                  className="focus-visible:ring-0"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      cuisines: e.target.value.split(","),
                    })
                  }
                />
                {errors && (
                  <span className="text-sm text-red flex">
                    {errors.cuisines}
                  </span>
                )}
              </div>
              <div>
                <Label>Upload Image</Label>
                <Input
                  type="file"
                  accept="image/*"
                  name="imageFile"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      imageFile: e.target.files?.[0] || undefined,
                    })
                  }
                />
                {errors && (
                  <span className="text-sm text-red flex">
                    {errors.imageFile?.name}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              {loading ? (
                <Button
                  disabled
                  className="bg-red hover:bg-hoverRed w-full md:w-fit "
                >
                  <Loader2 className="mr-2 h-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button className="w-full bg-red md:w-fit hover:bg-hoverRed">
                  {restaurant
                    ? "Update Your Restaurant"
                    : "Add your Restaurant"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
