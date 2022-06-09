import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { LoginController } from './login.controller';
import { AuthMiddleware } from './login.middileware';
import { LoginService } from './login.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
    .forRoutes(
  {
    path:'login',
    method:RequestMethod.POST,  
  })
   
  }
  
}
