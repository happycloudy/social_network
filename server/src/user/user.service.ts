import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async findOne(id: number) {
        return {
            user: 'NAN'
        }
    }

    async createUser(createUserDto: CreateUserDto){
        return this.userRepository.insert(createUserDto)
    }

    async updateUser({id, ...updateUserDto}: UpdateUserDto){
        const user = await this.userRepository.findOneBy({id})
        if (!user) return {error: 'User not found'}
        return this.userRepository.update({id: id}, updateUserDto)
    }
}
