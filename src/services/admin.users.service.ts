import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { error } from "console";
import { DeleteUserDto } from "src/domain/DeleteUser.dto";
import { ErrorDto } from "src/domain/Error.dto";
import { UsersDto } from "src/domain/Users.dto";
import { BoardMembersDbInterface, I_BOARD_MEMBERS_DB } from "src/infraestructure/database/interface/BoardMembers.db.interface";
import { I_USERS_DB, UsersDbInterface } from "src/infraestructure/database/interface/Users.db.interface";

@Injectable()
export class AdminUsersService{

  constructor(
    @Inject(I_USERS_DB)
    private readonly dbUsers: UsersDbInterface,
    @Inject(I_BOARD_MEMBERS_DB)
    private readonly dbBoardMembers: BoardMembersDbInterface,
  ){}

  async admin_delete_one_user_by_id(
    bodyIn: DeleteUserDto,
  ): Promise<DeleteUserDto>{

    const user: UsersDto = await this.dbUsers.admin_find_user_by_id(bodyIn.user_id);

    if(user === null || user === undefined){

      const newError: ErrorDto = {
        message: `No existe user_id = ${bodyIn.user_id}`,
        error: 'Bad Request',
        statusCode: HttpStatus.BAD_REQUEST,
      };

      throw new HttpException(
        newError,
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        }
      );
    }

    if(user.username === 'admin'){

      const newError: ErrorDto = {
        message: 'No se puede eliminar el usuario admin',
        error: 'Unprocessable Entity',
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      };

      throw new HttpException(
        newError,
        HttpStatus.UNPROCESSABLE_ENTITY,
        {
          cause: error,
        }
      );
    }

    const boardMember = await this.dbBoardMembers.admin_find_member_by_board_id(bodyIn.user_id);
    await this.dbUsers.admin_delete_one_user_by_id(bodyIn.user_id);

    return{
      process: "exitoso",
      user_id: bodyIn.user_id,
      user_name: bodyIn.user_name,
    }
  }

}