import { Body, Controller, Delete, Get, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { BoardsService } from "../../services/boards.service";
import { BoardsDto } from "src/domain/Boards.dto";
import { AdminBoardsService } from "src/services/admin.boards.service";
import { CreateOneBoardDto } from "src/domain/CreateOneBoard.dto";
import { DeleteBoardById } from "src/domain/DeleteBoardById.dto";
import { DeleteResult } from "typeorm";

@Controller('/api/focalboard')
export class BoardsController{

  constructor(
    private readonly boardsService: BoardsService,
    private readonly adminBoardsService: AdminBoardsService,
  ){}

  /**
   * 
   * @description
   * Develop funcion
   * 
   */
  @Get('/boards/')
  @UsePipes(ValidationPipe)
  async find_all_boards_where_is_template(
    @Query() bodyIn: Partial<BoardsDto>
  ): Promise<BoardsDto[]>{

    return await this
      .boardsService
      .find_all_boards_where_is_template(bodyIn);
  }


  /**
   * 
   * @description
   * Develop funcion
   * 
   */
  @Delete('/boards/')
  @UsePipes(ValidationPipe)
  async delete_one_board_by_id(
    @Query() bodyIn: DeleteBoardById,
  ): Promise<DeleteResult>{

    return this
      .boardsService
      .delete_one_board_by_id(bodyIn);
  }


  /**
   * 
   * @description
   * Admin funcion
   * 
   */
  @Get('/admin/boards/')
  @UsePipes(ValidationPipe)
  async admin_find_all_boards(): Promise<BoardsDto[]>{

    return await this
      .adminBoardsService
      .admin_find_all_boards();
  }


  /**
   * 
   * @description
   * Admin funcion
   * 
   */
  @Post('/admin/boards')
  @UsePipes(ValidationPipe)
  async admin_create_one_board(
    @Body() bodyIn: CreateOneBoardDto,
  ): Promise<BoardsDto>{

    return await this
      .adminBoardsService
      .admin_create_one_board(bodyIn);
  }
}