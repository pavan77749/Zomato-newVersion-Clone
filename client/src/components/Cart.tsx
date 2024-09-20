import { Button } from "./ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from './ui/table'
  import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
  import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import CheckoutConfirmPage from "./CheckoutConfirmPage";

const Cart = () => {
    const [open,setOpen] = useState<boolean>(false)
  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10 mx-5 ">
        <div className="flex justify-end">
            <Button variant={'link'}>Clear All</Button>
        </div>
        <Table>
        <TableHeader>
        <TableRow>
          <TableHead>Items</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Total</TableHead>
          <TableHead className="text-right">Remove</TableHead>
        </TableRow>
      </TableHeader> 
      <TableBody> 
          <TableRow >
            <TableCell >
            <Avatar >
              <AvatarImage src="" alt=""/>
              <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>Tandoori Biryani</TableCell>
            <TableCell>₹80</TableCell>
            <TableCell>
                <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800 shadow-md ">
                    <Button size={'icon'} variant={'outline'} className="rounded-full bg-gray-200"><Minus/></Button>
                    <Button className="font-bold " variant={"outline"} size={"icon" } disabled>1</Button>
                    <Button size={'icon'} variant={'outline'} className="rounded-full  bg-red hover:bg-hoverRed hover:text-white"><Plus className=""/></Button>
                </div>
            </TableCell>
            <TableCell>₹80</TableCell>
            <TableCell className="text-right">
                <Button className="bg-red hover:bg-hoverRed" size={'sm'}>Remove</Button>
            </TableCell>
          </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow className="text-2xl">
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">₹80.00</TableCell>
        </TableRow>
      </TableFooter>
        </Table>
        <div className="flex justify-end my-5">
            <Button className="bg-red hover:bg-hoverRed" onClick={()=>setOpen(true)}>Proceed to Checkout </Button>
        </div>
        <CheckoutConfirmPage open={open} setOpen={setOpen} />
    </div>    
)
}

export default Cart