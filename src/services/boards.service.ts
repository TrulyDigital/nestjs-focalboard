import { Inject, Injectable } from "@nestjs/common";
import { BoardsDto } from "src/domain/Boards.dto";
import { DeleteBoardById } from "src/domain/DeleteBoardById.dto";
import { BoardsDbInterface, I_BOARDS_DB } from "src/infraestructure/database/interface/Boards.db.interface";
import { DeleteResult } from "typeorm";

@Injectable()
export class BoardsService{

  constructor(
    @Inject(I_BOARDS_DB) 
    private dbBoards: BoardsDbInterface,
  ){}

  async find_all_boards_where_is_template(
    bodyIn: Partial<BoardsDto>
  ): Promise<BoardsDto[]>{

    return await this
      .dbBoards
      .find_all_boards_where_is_template(bodyIn);
  }

  async delete_one_board_by_id(
    bodyIn: DeleteBoardById,
  ): Promise<DeleteResult>{

    return await this
      .dbBoards
      .delete_one_board_by_id(bodyIn.id);
  }
}