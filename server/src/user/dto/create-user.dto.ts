import {User} from "../user.entity"

export interface CreateUserDto extends User {
    passwordRepeat: string
}