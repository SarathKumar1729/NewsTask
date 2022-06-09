import { HttpException, Injectable } from '@nestjs/common';
import { nextTick } from 'process';
import { json } from 'stream/consumers';


@Injectable()
export class LoginService {
   credentials={
    email:"intern@revyrieglobal.com",
    password:"intern@123"
  }
    loginpost(data){
  
      if(this.credentials.email===data.email && this.credentials.password===data.password){
         return "success";
        
        
      }
      else{

        throw new HttpException("USERNAME OR PASSWORD NOT MATCH",401);
        
      }
    }
      loginget(){
        return "Login.......!!!!"
      }

}
