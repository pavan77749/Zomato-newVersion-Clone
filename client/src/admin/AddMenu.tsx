import React, { useState,FormEvent } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
    DialogHeader
  } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Loader2, Plus } from 'lucide-react';
// import Image from "@/assets/Food.jpeg";
import EditMenu from './EditMenu';
import { menuFromSchema, MenuInputState } from '@/schema/menuSchema';
import { useMenuStore } from '@/store/useMenuStore';
import { useRestaurantStore } from '@/store/useRestaurantStore';

// const menus = [
//     {
//         name:"Biryani",
//         description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, minima?",
//         price:80,
//         image:`${Image}`
//     }
// ]

const AddMenu = () => {
    const [input,setInput] = useState<MenuInputState>({
        name:"",
        description:"",
        price:0,
        image:undefined
    })
    const [open,setOpen] = useState<boolean>(false)
    const [editOpen,setEditOpen] = useState<boolean>(false)
    const [selectedMenu,setSelectedMenu] = useState<any>()
    // const loading = false
    const {loading,createMenu} = useMenuStore()
    const {restaurant} = useRestaurantStore()
    const [errors, setErrors] = useState<Partial<MenuInputState>>({});
    const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setInput({ ...input, [name]: type === "number" ? Number(value) : value });
      };

      const SubmitHandler = async (e: FormEvent) => {
        e.preventDefault()
       
        const result = menuFromSchema.safeParse(input);
        if (!result.success) {
          const fieldErrors = result.error.formErrors.fieldErrors;
          setErrors(fieldErrors as Partial<MenuInputState>);
          return;
        }
        //api starts from here
        try {
          const formData = new FormData();
          formData.append("name", input.name);
          formData.append("description", input.description);
          formData.append("price", input.price.toString());
          if(input.image){
            formData.append("image", input.image);
          }
          await createMenu(formData);
        } catch (error) {
       
        }
       
      }

  return (
    <div className="max-w-6xl mx-auto my-10">
        <div className="flex justify-between">
            <h1 className='md:font-extrabold md:text-2xl font-bold text-lg'>Available Menus</h1>
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
        <Button className='bg-red hover:bg-hoverRed'><Plus className='mr-2'/> Add Menus</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add a new Menu</DialogTitle>
                <DialogDescription>Create a menu that will make your restaurant stand out.</DialogDescription>
            </DialogHeader>
            <form onSubmit={SubmitHandler}>
                <div>
                    <Label>Name</Label>
                    <Input 
                    type='text'
                    placeholder='Enter menu name'
                    name='name'
                    value={input.name}
                    onChange={changeEventHandler}
                    className='focus-visible:ring-0' />
                    {errors && (
                  <span className="text-sm text-red flex">
                    {errors.name}
                  </span>
                )}
                </div>
                <div>
                    <Label>Description</Label>
                    <Input 
                    type='text'
                    placeholder='Enter menu description'
                    name='description'
                    value={input.description}
                    onChange={changeEventHandler}
                    className='focus-visible:right-0' />
                       {errors && (
                  <span className="text-sm text-red flex">
                    {errors.description}
                  </span>
                )}
                </div>
                <div>
                    <Label>Price in (Rupees)</Label>
                    <Input 
                    type='number'
                    placeholder='Enter menu price'
                    name='price'
                    value={input.price}
                    onChange={changeEventHandler}
                    className='focus-visible:right-0' />
                      {errors && (
                  <span className="text-sm text-red flex">
                    {errors.price}
                  </span>
                )}
                </div>
                <div>
                    <Label>Upload menu Image</Label>
                    <Input 
                    type='file'
                    accept='image/*'
                    name='image'
                    onChange={(e) =>
                        setInput({
                          ...input,
                          image: e.target.files?.[0] || undefined,
                        })
                      }
                     />
                       {errors && (
                  <span className="text-sm text-red flex">
                    {errors.image?.name}
                  </span>
                )}
                </div>
                <DialogFooter className='mt-5'>
                    {
                        loading ? <Button disabled className='bg-red hover:bg-hoverRed w-full'> <Loader2 className='animate-spin mr-2 w-4 h-4'/> Please wait...</Button> : <Button className='bg-red hover:bg-hoverRed w-full'>Submit</Button>
                    }
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
        </div>
        {
            restaurant?.menus.map((menu:any,idx:number) => (
        <div className="mt-6 space-y-4" key={idx}>
            <div className='flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border'>
            <img
            src={menu.image}
            alt="res_img"
            className="md:h-24 md:w-24 h-16  object-cover rounded-lg"
          />
          <div className="flex-1">
                    <h1 className='font-medium text-lg text-gray-700'>{menu.name}</h1>
                    <p className='text-sm text-gray-600 mt-1'>{menu.description}</p>
                    <h2 className='text-md font-semibold mt-2'>
                        Price :<span className='text-red'>{menu.price}</span>
                    </h2>
          </div>
          <Button onClick={()=>{
setSelectedMenu(menu);
setEditOpen(true)
          }} size={'sm'} className='bg-red hover:bg-hoverRed mt-3'>Edit</Button>
            </div>
        </div>
            )
    )
        }
        <EditMenu selectedMenu={selectedMenu} editOpen={editOpen} setEditOpen={setEditOpen} />
        </div>
  )
}

export default AddMenu