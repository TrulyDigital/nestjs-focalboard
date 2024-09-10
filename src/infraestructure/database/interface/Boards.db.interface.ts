import { BoardsDto } from "src/domain/Boards.dto";
import { DeleteResult } from "typeorm";

export const I_BOARDS_DB = "I_BOARDS_DB";

export interface BoardsDbInterface{

  /**
   * 
   * @description
   * Develop funcion
   * 
   */
  find_all_boards_where_is_template(
    bodyIn: Partial<BoardsDto>,
  ): Promise<BoardsDto[]>;


  /**
   * 
   * @description
   * Develop funcion
   * 
   */
  delete_one_board_by_id(
    id: string,
  ): Promise<DeleteResult>;


  /**
   * 
   * @description
   * Admin funcion
   * 
   */
  admin_find_all_boards(): Promise<BoardsDto[]>;

  admin_create_one_board(
    newBoard: BoardsDto,
  ): Promise<BoardsDto>;
}