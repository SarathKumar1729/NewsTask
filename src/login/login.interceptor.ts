import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Req, HttpStatus, HttpCode } from '@nestjs/common';
import { STATUS_CODES } from 'http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class loginterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const Request =context.switchToHttp().getRequest()


    return next
      .handle()
      .pipe(   
        map(data=> {       
          return{        
            statusCode: context.switchToHttp().getResponse().statusCode,
            Response:data
          }
        }),
      );
  }
}