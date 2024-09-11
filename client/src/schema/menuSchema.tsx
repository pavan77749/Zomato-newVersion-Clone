import { z } from "zod";

export const menuFromSchema = z.object({
    name:z.string().nonempty({message:"Name is required"}),
    description:z.string().nonempty({message:"Description is required"}),
    price:z.number().min(0,{message:"Price can not to negative"}),
    image:z.instanceof(File).optional().refine((file)=> file?.size != 0, {message:"Image file is required"})
})

export type MenuInputState = z.infer<typeof menuFromSchema>