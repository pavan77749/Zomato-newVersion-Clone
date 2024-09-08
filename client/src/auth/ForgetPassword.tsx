import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Mail,Loader2 } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const ForgetPassword = () => {
    const loading = false
    const [email,setEmail] = useState<string>()
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
        <form  className="flex flex-col gap-5 md:border md:p-8 w-full max-w-md rounded-lg mx-4">
            <div className="text-center">
                <h1 className="font-extrabold text-2xl mb-2">Forget Password</h1>
                <p className="text-sm text-gray-600">Enter your email to reset your password</p>

            </div>
            <div className="relative">
                <Input type="text" value={email} className="pl-10 focus-visible:ring-1" onChange={(e)=> setEmail(e.target.value)} placeholder="enter your email"/>
                <Mail className="absolute inset-2 left-2 text-gray-500 pointer-events-none" />
            </div>
            {loading ? (
          <Button disabled className="bg-red hover:bg-hoverRed w-full">
            <Loader2 className="mr-2 h-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button
            type="submit"
            className="bg-red hover:bg-hoverRed w-full focus-visible:ring-0"
          >
            Send Resent Link
          </Button>
        )}
        <span>Back to {""} <Link to="/login" className="text-blue-500">Login</Link></span>
        </form>
    </div>
  )
}

export default ForgetPassword