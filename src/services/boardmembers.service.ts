import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { error } from "console";
import { BoardMembersDto } from "src/domain/BoardMembers.dto";
import { DeleteBoardMemberDto } from "src/domain/DeleteBoardMember.dto";
import { BoardMembersDbInterface, I_BOARD_MEMBERS_DB } from "src/infraestructure/database/interface/BoardMembers.db.interface";
import { DeleteResult } from "typeorm";

@Injectable()
export class BoardMembersService{

  constructor(
    @Inject(I_BOARD_MEMBERS_DB)
    private readonly dbBoardMembers: BoardMembersDbInterface,
  ){}


  /**
   * 
   * @description
   * Admin function
   * 
   */
  async find_board_memebers_by_board_id(
    bodyIn: BoardMembersDto
  ): Promise<BoardMembersDto[]>{

    const bodyInMap = Object.entries(bodyIn);
    const isBoardId = bodyIn.board_id !== undefined;

    if(bodyInMap.length == 0){
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Para consultar los miembros del tablero se debe enviar el id del tablero',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        }
      )
    }

    if(bodyInMap.length > 1){
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Para consultar los miembros del tablero solo se debe enviar el id del tablero',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        }
      )
    }

    if(bodyInMap.length === 1 && !isBoardId){
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Para consultar los miembros del tablero se debe enviar el id del tablero',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        }
      )
    }

    return await this
      .dbBoardMembers
      .find_board_members_by_board_id(bodyIn.board_id);
  }

  /**
   * 
   * @description
   * Admin function
   * 
   */
  async delete_one_board_memeber_by_user_id(
    bodyIn: DeleteBoardMemberDto,
  ): Promise<DeleteResult>{

    return await this
      .dbBoardMembers
      .delete_one_board_member_by_user_id(bodyIn);
  }
}