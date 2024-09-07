import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { LockKeyhole, Mail , Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";


type SignupInputState = {
fullname:string;
  email: string;
  password: string;
  contact:number
};

const Signup = () => {
  const loading = false;
  const [input, setInput] = useState<SignupInputState>({
    fullname:"",
    email: "",
    password: "",
    contact:""
  });
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const SignupSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={SignupSubmitHandler}
        className="md:border md:border-gray-200 w-full rounded-lg max-w-md md:p-8 "
      >
        <div className="flex justify-start ">
          <h1 className="p-3 font-bold text-2xl">Signup</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Fullname"
              className="pl-10 focus-visible:ring-1"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
            />
            <User className="absolute inset-2 left-2 text-gray-500 pointer-events-none" />
          </div>
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
          </div>
        </div>
        <div className="mb-4">
        <div className="relative">
            <Input
              type="text"
              placeholder="9867XXXXXX"
              name="contact"
              className="pl-10 focus-visible:ring-1"
              value={input.contact}
              onChange={changeEventHandler}
            />
            <Phone className="absolute inset-2 left-2 text-gray-500 pointer-events-none" />
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
            Signup
          </Button>
        )}
        <Separator className="my-4" />
        <p className="flex justify-start mt-2">
          New to Zomato?{" "}
          <Link to="/login" className="text-blue-500 ml-2">
            Login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Signup;
