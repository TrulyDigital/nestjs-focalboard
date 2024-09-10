import { InjectRepository } from "@nestjs/typeorm";
import { BoardMembersDbInterface } from "./BoardMembers.db.interface";
import { BoardMembersEntity } from "../entities/BoardMembers.entity";
import { DeleteResult, Repository } from "typeorm";
import { BoardMembersDto } from "src/domain/BoardMembers.dto";
import { Injectable } from "@nestjs/common";
import { DeleteBoardMemberDto } from "src/domain/DeleteBoardMember.dto";

@Injectable()
export class BoardMembersDbService implements BoardMembersDbInterface{

  constructor(
    @InjectRepository(BoardMembersEntity)
    private boardMembersRepository: Repository<BoardMembersEntity>,
  ){}


  /**
   * 
   * @description
   * Develop function
   * 
   */
  async find_board_members_by_board_id(
    board_id: string
  ): Promise<BoardMembersDto[]>{
    return await this.boardMembersRepository.find({
      where: {
        board_id,
      }
    });
  }


  /**
   * 
   * @description
   * Develop function
   * 
   */
  async delete_one_board_member_by_user_id(
    deleteBoardMemberDto: DeleteBoardMemberDto,
  ): Promise<DeleteResult>{

    return await this
      .boardMembersRepository
      .delete(deleteBoardMemberDto);
  }


  /**
   * 
   * @description
   * Admin function
   * 
   */
  async admin_find_member_by_board_id(
    board_id: string,
  ): Promise<BoardMembersDto> {
    return await this.boardMembersRepository.findOneBy({ board_id });  
  }


  /**
   * 
   * @description
   * Admin function
   * 
   */
  async admin_add_member_to_board(
    boardMember: BoardMembersDto,
  ): Promise<BoardMembersDto>{

    return this
      .boardMembersRepository
      .save(boardMember);
  }
}