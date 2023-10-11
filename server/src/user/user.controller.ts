import {Body, Controller, Get, Patch, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    findOne(id: number) {
        return this.userService.findOne(id)
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto)
    }

    @Patch()
    updateUser(@Body() updateUserDto: UpdateUserDto){
        return this.userService.updateUser(updateUserDto)
    }
}
