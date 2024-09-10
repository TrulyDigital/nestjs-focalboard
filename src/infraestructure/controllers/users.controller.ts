import { Body, Controller, Delete, Get, UsePipes, ValidationPipe } from "@nestjs/common";
import { DeleteUserDto } from "src/domain/DeleteUser.dto";
import { UsersDto } from "src/domain/Users.dto";
import { AdminUsersService } from "src/services/admin.users.service";
import { UsersService } from "src/services/users.service";

@Controller('/api/focalboard')
export class UsersController{

  constructor(
    private readonly usersService: UsersService,
    private readonly adminUsersService: AdminUsersService,
  ){}

  /**
   * 
   * @description
   * Develop function
   * 
   */
  @Get('/users')
  @UsePipes(ValidationPipe)
  async find_all_users(): Promise<UsersDto[]>{

    return await this
      .usersService
      .find_all_users();
  }


  /**
   * 
   * @description
   * Admin function
   * 
   */
  @Get('/admin/users')
  @UsePipes(ValidationPipe)
  async customer_find_all_users(): Promise<UsersDto[]>{

    return await this
      .usersService
      .find_all_users();
  }


  /**
   * 
   * @description
   * Admin function
   * 
   */
  @Delete('/admin/users')
  @UsePipes(ValidationPipe)
  async customer_delete_one_user_by_id(
    @Body() bodyIn: DeleteUserDto,
  ): Promise<DeleteUserDto>{

    return await this
      .adminUsersService
      .admin_delete_one_user_by_id(bodyIn);
  }
}