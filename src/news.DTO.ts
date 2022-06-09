import { IsDate, IsEnum, IsString} from "class-validator";

export class news{
    @IsString()
 
    headline:string;
    @IsString()
    summary:string;
    @IsString()
    image:string;
    @IsString()
    date:string;
}