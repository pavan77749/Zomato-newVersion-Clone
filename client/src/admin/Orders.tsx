import React from 'react'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select'

const Orders = () => {
  return (
    <div className='max-w-6xl mx-auto py-10 '>
        <h1 className='text-2xl font-extrabold text-gray-900 dark:text-white mb-10'>Orders OverView</h1>
        <div className="space-y-8">
            {/* Rstaurant Orders display here */}
            <div className="flex flex-col md:flex-row justify-between items-start sm:items-center bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex-1 mb-6 sm:mb-0">
            <h1 className='font-semibold text-xl text-gray-800 dark:text-gray-100'>Chicken Biryani</h1>
            <p className='text-gray-600 dark:text-gray-400 mt-2'><span className='font-semibold'>Address:</span> Mira Road Mumbai</p>
            <p className='text-gray-600 dark:text-gray-400 mt-2'><span className='font-semibold'>Total Amount:</span> 80.00</p>
            </div>
            <div className="w-full sm:w-1/3">
                <Label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>Order Status</Label>
                <Select>
      <SelectTrigger className='focus-visible:ring-0'>
        <SelectValue placeholder="Select Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
         {
            ["Pending","Preparing","Confirmed","OutForDelivery","Delivered"].map((status:string,idx:number)=>(
                <SelectItem key={idx} value={status.toLocaleLowerCase()}>{status}</SelectItem>
            ))
         }
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Orders