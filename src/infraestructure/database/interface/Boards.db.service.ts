import { InjectRepository } from "@nestjs/typeorm";
import { BoardsDbInterface } from "./Boards.db.interface";
import { BoardsEntity } from "../entities/Boards.entity";
import { DeleteResult, Repository } from "typeorm";
import { BoardsDto } from "src/domain/Boards.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BoardsDbService implements BoardsDbInterface{

  constructor(
    @InjectRepository(BoardsEntity)
    private boardsRepository: Repository<BoardsEntity>,
  ){}


  /**
   * 
   * @description
   * Develop funcion
   * 
   */
  async find_all_boards_where_is_template(
    bodyIn: Partial<BoardsDto>,
  ): Promise<BoardsDto[]>{
    return await this.boardsRepository.find({
      where: {
        ...bodyIn,
      }
    })
  }


  /**
   * 
   * @description
   * Develop funcion
   * 
   */
  async delete_one_board_by_id(
    id: string,
  ): Promise<DeleteResult>{
    return await this.boardsRepository.delete(id);
  }

  /**
   * 
   * @description
   * Admin funcion
   * 
   */
  async admin_find_all_boards(): Promise<BoardsDto[]>{
    return await this.boardsRepository.find({
      where: {
        is_template: false,
      }
    })
  }

  /**
   * 
   * @description
   * Admin funcion
   * 
   */
  async admin_create_one_board(
    newBoard: BoardsDto,
  ): Promise<BoardsDto>{
    return await this.boardsRepository.save(newBoard);
  }
}