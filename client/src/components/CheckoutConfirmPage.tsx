import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useUserStore } from "@/store/useUserStore";
import { useCartStore } from "@/store/useCartStore";
import { useRestaurantStore } from "@/store/useRestaurantStore";
import { CheckoutSessionRequest } from "@/types/orderTypes";
import { useOrderStore } from "@/store/useOrderStore";

const CheckoutConfirmPage = ({ open, setOpen,}: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>>;}) => {
  const {user} = useUserStore()
    const [input,setInput] = useState({
        name:user?.fullname || "",
        email:user?.email || "",
        contact:user?.contact.toString() || "",
        address:user?.address || "",
        city:user?.city || "",
        country:user?.country || ""
    })
    const {cart} = useCartStore()
    const {restaurant} = useRestaurantStore()
    const {createCheckoutSession,loading}= useOrderStore()
    const changeEventHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setInput({...input, [name]:value})
    }
    const checkoutHandler = async  (e:FormEvent) =>{
        e.preventDefault()
        //api implementation starts here
       
        try {
          const checkoutData:  CheckoutSessionRequest = {
            cartItems:cart.map((cartItem)=>({
              menuId:cartItem._id,
              name:cartItem.name,
              image:cartItem.image,
              price:cartItem.price.toString(),
              quantity:cartItem.quantity.toString()
            })),
            deliveryDetails:input,
            restaurantId:restaurant?._id as string,

          }
          await createCheckoutSession(checkoutData)
        } catch (error) {
         console.log(error)
        }
    }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
          <DialogTitle className="font-semibold ">Review your Order</DialogTitle>
          <DialogDescription className="text-xs">
            Double-check your delivery details and ensure everything is in
            order. When you are ready ,hit confirm button to finalize your order
          </DialogDescription>
          <form onSubmit={checkoutHandler}>
            <div className="md:grid grid-cols-2 gap-2 space-y-1 md:space-y-0">
                <div>
                <Label>Fullname</Label>
                <Input type="text" name="name" value={input.name} onChange={changeEventHandler} className="focus-visible:ring-0"/>
                </div>
                <div>
                <Label>Email</Label>
                <Input type="email" name="email" disabled value={input.email} onChange={changeEventHandler} className="focus-visible:ring-0"/>
                </div>
                <div>
                <Label>Contact</Label>
                <Input type="text" name="contact" value={input.contact} onChange={changeEventHandler}
                className="focus-visible:ring-0"/>
                </div>
                <div>
                <Label>Address</Label>
                <Input type="text" name="address" value={input.address} onChange={changeEventHandler}
                className="focus-visible:ring-0"/>
                </div>
                <div>
                <Label>City</Label>
                <Input type="text" name="city" value={input.city} onChange={changeEventHandler}
                className="focus-visible:ring-0"/>
                </div>
                <div>
                <Label>Country</Label>
                <Input type="text" name="country" value={input.country} onChange={changeEventHandler}
                className="focus-visible:ring-0"/>
                </div>
            </div>
      <DialogFooter className="col-span-2 pt-5">
        {
          loading ? (
            <Button   disabled className="bg-red hover:bg-hoverRed"> <Loader2 className="mr-2 h-4 w-4 animate-spin"/> please wait</Button> 
          ) 
          :
          (<Button type="submit" className="bg-red hover:bg-hoverRed">Continue to Payment</Button>)
        }
      </DialogFooter>
          </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutConfirmPage;
