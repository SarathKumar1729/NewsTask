import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  newses=[]
  getHello() {
    if(typeof this.newses !== 'undefined' && this.newses.length === 0) {
      return "No News Available";
    }
    return this.newses;
  }
  newsposting(news){
    
    
      this.newses.push(news)
      return this.newses;
  }
  searchnews(headline){
    let head=this.newses.filter(news=>news.headline===headline)

    if(head==undefined){
      throw new HttpException("No record found",404);
    }
   
    
    return head;
    } 
  }

