import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { LockKeyhole, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";

// type LoginInputState = {
//   email: string;
//   password: string;
// };

const Login = () => {
  // const loading = false;
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const [errors ,setErrors] = useState<Partial<LoginInputState>>({})
  const {loading,login} = useUserStore()
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const navigate = useNavigate()

  const loginSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    // form validation check start
    const result = userLoginSchema.safeParse(input)
    if(!result.success){
        const fieldErrors = result.error.formErrors.fieldErrors
        setErrors(fieldErrors as Partial<LoginInputState>)
        return
    }
    // api implemenation Login start here
    try {
      await login(input)
      navigate('/')
    } catch (error) {
      
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={loginSubmitHandler}
        className="md:border md:border-gray-200 w-full p-5 rounded-lg max-w-md  md:p-8"
      >
        <div className="flex justify-start ">
          <h1 className="p-3 font-bold text-2xl">Login</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              className="pl-10 focus-visible:ring-1"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            />
            <Mail className="absolute inset-2 left-2 text-gray-500 pointer-events-none" />
            {
                errors && <span className="text-sm text-red flex">{errors.email}</span>
            }
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              className="pl-10 focus-visible:ring-1"
              value={input.password}
              onChange={changeEventHandler}
            />
            <LockKeyhole className="absolute inset-2 left-2 text-gray-500 pointer-events-none" />
            {
                errors && <span className="text-sm text-red flex">{errors.password}</span>
            }
          </div>
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
            Login
          </Button>
          
        )}
        <div className="mt-3">
        <Link to="/forget-password" className="text-blue-500">Forget Password</Link>
        </div>
        <Separator className="my-4" />
        <p className="flex justify-start mt-2">
          New to Zomato?{" "}
          <Link to="/signup" className="text-blue-500 ml-2">
            Signup
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
