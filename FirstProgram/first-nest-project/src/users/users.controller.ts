import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    GetUsers():String{
        return "Vishwanath"
    }

    @Get(':name')
    async getName(@Param('name') name:String):Promise<String>{
        console.log(name)
        return this.usersService.getLuc(name)
    }
    
    
}
