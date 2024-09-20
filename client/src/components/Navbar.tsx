import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarTrigger,
  MenubarContent,
  MenubarMenu,
  MenubarItem,
} from "./ui/menubar";
import { Separator } from "./ui/separator";
import {
    Sheet,
    SheetClose,
    SheetContent,
   SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "./ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Moon, Sun, ShoppingCart,Loader2,Menu,User, HandPlatter, SquareMenu, Utensils, PackageIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useUserStore } from "@/store/useUserStore";



const Navbar = () => {
  const {user,loading,logout} = useUserStore();
 
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center h-14 mx-2">
        <Link to="/">
          <h1 className="font-extrabold md:font-extrabold text-2xl font-sanf text-red">
            Zomato
          </h1>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/order/status">Order</Link>
          
          {user?.admin && (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Dashboard</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link to="/admin/restaurant">Restaurant</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to="/admin/menu">Menu</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to="/admin/orders">Order</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link to="/cart" className="relative cursor-pointer">
            <ShoppingCart />
            <Button
              size={"icon"}
              className="absolute -inset-y-3 left-2 text-xs rounded-full h-4 w-4 bg-red hover:bg-hoverRed"
            >
              5
            </Button>
          </Link>
          <div>
            <Avatar>
              <AvatarImage />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="">
          {loading ? (
          <Button disabled className="bg-red hover:bg-hoverRed w-full">
            <Loader2 className="mr-2 h-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button
          onClick={logout}
            className="bg-red hover:bg-hoverRed w-full focus-visible:ring-0"
          >
            Logout
          </Button>
          
        )}
          </div>
        </div>
        </div>
        <div className="md:hidden lg:hidden">
            {/* Mobile Responsive  */}
        <MobileNavbar/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () =>{
    const {user,logout} = useUserStore()
    return (

        <Sheet>
        <SheetTrigger asChild>
          <Button size={'icon'} className="rounded-full bg-gray-200 text-black hover:bg-gray-200" variant="outline">
            <Menu  size={'18'}/>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader className="flex flex-row items-center justify-between mt-2">
            <SheetTitle className="font-sans font-extrabold text-red">Zomato</SheetTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SheetHeader>
          <Separator className="my-2" />
            <SheetDescription className="flex-1">
        <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 py-3 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
        <User />
        <span>Profile</span>
        </Link>
        <Link to="/order/status" className="flex items-center gap-4 hover:bg-gray-200 py-3 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
        <HandPlatter />
        <span>Order</span>
        </Link>
        <Link to="/cart" className="flex items-center gap-4 hover:bg-gray-200 py-3 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
        <ShoppingCart />
        <span>Cart (0)</span>
        </Link>
        {
          user?.admin && (
            <>
        <Link to="/admin/menu" className="flex items-center gap-4 hover:bg-gray-200 py-3 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
        <SquareMenu />
        <span>Menu</span>
        </Link>

        <Link to="/admin/restaurant" className="flex items-center gap-4 hover:bg-gray-200 py-3 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
        <Utensils />
        <span>Restaurant</span>
        </Link>
        <Link to="/admin/orders" className="flex items-center gap-4 hover:bg-gray-200 py-3 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
        <PackageIcon />
        <span>Restaurant Orders</span>
        </Link>
            </>
          )
        }
            </SheetDescription>
          <SheetFooter className="flex flex-col gap-5">
            
                    <div className="flex flex-row items-center gap-2">
                    <Avatar>
              <AvatarImage />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
              <h1 className="font-sans font-bold text-xl">{user?.fullname}</h1>
                    </div>
                  
                    <SheetClose asChild>
                    <Button type="submit" className="bg-red hover:bg-hoverRed"  onClick={logout}>Logout</Button>
                  </SheetClose>
              
          
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
}
