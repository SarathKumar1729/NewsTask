// import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
// import { log } from "console";
// import { NextFunction } from "express";
// import { LoginService } from "./login.service";

// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   constructor(private readonly userService: LoginService) {}

//   async use(req: Request, res: Response, next: NextFunction) {
//       console.log("user working on login section");
      
//     // const credential={
//     //     email:"intern@revyrieglobal.com",
//     //     password:"intern@123"
//     // }

//     // if(credential.email==="intern@revyrieglobal.com" && credential.password==="intern@123"){
//     //     return "login successfull"
//     //     next();
      
//     // }
      

//     //   else {
//     //     throw new HttpException('User not found.', HttpStatus.UNAUTHORIZED);
//     //   }

//   next();
//   console.log("login");
  
    
//   }
 
// }
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.route.path);
    console.log("login Middileware.................!");
    
    console.log('Response', res.req.body);

    next();
  }
}
