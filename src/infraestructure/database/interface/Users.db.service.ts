import { InjectRepository } from "@nestjs/typeorm";
import { UsersDbInterface } from "./Users.db.interface";
import { UsersEntity } from "../entities/Users.entity";
import { Repository } from "typeorm";
import { UsersDto } from "src/domain/Users.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersDbService implements UsersDbInterface{

  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ){}

  /**
   * 
   * @description
   * Develop function
   * 
   */
  async find_all_users(): Promise<UsersDto[]>{
    return await this.usersRepository.find();
  }


  /**
   * 
   * @description
   * Admin function
   * 
   */
  async admin_find_user_by_id(
    id: string,
  ): Promise<UsersDto>{

    return await this
      .usersRepository
      .findOneBy({id});
  }


  /**
   * 
   * @description
   * Admin function
   * 
   */
  async admin_delete_one_user_by_id(
    id: string,
  ): Promise<void> {

    await this
      .usersRepository
      .delete(id);  
  }
}