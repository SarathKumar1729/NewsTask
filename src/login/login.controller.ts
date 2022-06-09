import { Body, Controller, Get, HttpException, Post, UseInterceptors } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthMiddleware } from './login.middileware';
import { loginterceptor } from './login.interceptor';
@Controller('login')
@UseInterceptors(loginterceptor)
export class LoginController {

    constructor(private readonly loginService: LoginService) {} 
    @Post()
  postHello(@Body()data){
    console.log(data);
    
    return this.loginService.loginpost(data);
  }
@Get()
getHello(){
  return this.loginService.loginget();
}

}


