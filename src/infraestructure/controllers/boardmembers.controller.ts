import { Body, Controller, Delete, Get, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { BoardMembersDto } from "src/domain/BoardMembers.dto";
import { DeleteBoardMemberDto } from "src/domain/DeleteBoardMember.dto";
import { BoardMembersService } from "src/services/boardmembers.service";
import { DeleteResult } from "typeorm";

@Controller('/api/focalboard')
export class BoardMembersController{

  constructor(
    private readonly boardMembersService: BoardMembersService,
  ){}

  /**
   * 
   * @description
   * Admin function
   * 
   */
  @Get('/board/members/findBy/')
  @UsePipes(ValidationPipe)
  async find_board_members_by_board_id(
    @Query() bodyIn: BoardMembersDto
  ): Promise<BoardMembersDto[]>{

    return await this
      .boardMembersService
      .find_board_memebers_by_board_id(bodyIn);
  }

  /**
   * 
   * @description
   * Admin function
   * 
   */
  @Delete('/board/members/deleteOne/')
  @UsePipes(ValidationPipe)
  async delete_one_board_memeber_by_user_id(
    @Body() bodyIn: DeleteBoardMemberDto,
  ): Promise<DeleteResult>{

    return await this
      .boardMembersService
      .delete_one_board_memeber_by_user_id(bodyIn);

  }
}