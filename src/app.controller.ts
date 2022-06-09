import { Body, Controller, Get, Param, Post, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggingInterceptor } from './interceptor.module';
import { news } from './news.DTO';
@Controller('news')
@UseInterceptors(LoggingInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
  @Post()
  postnews(@Body(ValidationPipe)news:news){

    return this.appService.newsposting(news)
  }
  @Get(':headline')
  search(@Param('headline')headline:string){
    return this.appService.searchnews(headline)
  }
}
