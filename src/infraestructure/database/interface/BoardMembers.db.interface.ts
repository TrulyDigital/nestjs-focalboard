import { BoardMembersDto } from "src/domain/BoardMembers.dto";
import { DeleteBoardMemberDto } from "src/domain/DeleteBoardMember.dto";
import { DeleteResult } from "typeorm";

export const I_BOARD_MEMBERS_DB = "I_BOARD_MEMBERS_DB";

export interface BoardMembersDbInterface{


  /**
   * 
   * @description
   * Develop function
   * 
   */
  find_board_members_by_board_id(
    board_id: string,
  ): Promise<BoardMembersDto[]>;
  

  /**
   * 
   * @description
   * Develop function
   * 
   */
  delete_one_board_member_by_user_id(
    deleteBoardMemberDto: DeleteBoardMemberDto,
  ): Promise<DeleteResult>;

  
  /**
   * 
   * @description
   * Admin function
   * 
   */
  admin_find_member_by_board_id(
    board_id: string,
  ): Promise<BoardMembersDto>;


  /**
   * 
   * @description
   * Admin function
   * 
   */
  admin_add_member_to_board(
    boardMember: BoardMembersDto,
  ): Promise<BoardMembersDto>;
}