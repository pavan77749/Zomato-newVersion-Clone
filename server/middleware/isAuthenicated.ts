import jwt from "jsonwebtoken"
import { NextFunction, Request,Response } from "express"

declare global {
    namespace Express{
        interface Request{
            id:string
        }
    }
}

export const isAutheticateed = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"User not authenicated"
            })
        }
        //verify token
        const decode = jwt.verify(token, process.env.SECRET_KEY!) as jwt.JwtPayload
        //check is decoding was successfull
        if(!decode){
            return res.status(401).json({
                success:false,
                message:"Invalid Token"
            })
        }
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal server error"}) 
    }
}