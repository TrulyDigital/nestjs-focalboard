import { Inject, Injectable } from "@nestjs/common";
import { UsersDto } from "src/domain/Users.dto";
import { I_USERS_DB, UsersDbInterface } from "src/infraestructure/database/interface/Users.db.interface";

@Injectable()
export class UsersService{

  constructor(
    @Inject(I_USERS_DB)
    private readonly dbUsers: UsersDbInterface,
  ){}

  async find_all_users(): Promise<UsersDto[]>{
    return await this.dbUsers.find_all_users();
  }
}