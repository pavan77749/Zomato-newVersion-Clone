import { Dispatch, SetStateAction ,FormEvent,useState, useEffect} from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogHeader
  } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { MenuInputState } from "@/schema/menuSchema";

const EditMenu = ({selectedMenu,editOpen,setEditOpen}:{selectedMenu:MenuInputState; editOpen:boolean;setEditOpen:Dispatch<SetStateAction<boolean>>}) => {
    const loading = false
    const [input,setInput] = useState<MenuInputState>({
        name:"",
        description:"",
        price:0,
        image:undefined
    })

    const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setInput({ ...input, [name]: type === "number" ? Number(value) : value });
      };

      const SubmitHandler = (e: FormEvent) => {
        e.preventDefault()
        console.log(input)
        //api starts here
      }

      useEffect(()=>{
        setInput({
            name:selectedMenu?.name || "",
            description: selectedMenu?.description || "" ,
        price: selectedMenu?.price || 0,
        image:undefined
        })
      },[selectedMenu])
  return (
    <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit Menu</DialogTitle>
                <DialogDescription>
                    Update your menu to keep your offerings freash
                </DialogDescription>
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
                </div>
                <DialogFooter className='mt-5'>
                    {
                        loading ? <Button disabled className='bg-red hover:bg-hoverRed w-full'> <Loader2 className='animate-spin mr-2 w-4 h-4'/> Please wait...</Button> : <Button className='bg-red hover:bg-hoverRed w-full'>Submit</Button>
                    }
                </DialogFooter>
            </form>
        </DialogContent>

    </Dialog>
  )
}

export default EditMenu