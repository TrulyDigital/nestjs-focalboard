import { Repository } from "typeorm";
import { BlocksDbInterface } from "./Blocks.db.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { BlocksEntity } from "../entities/Blocks.entity";
import { BlocksDto } from "../../../domain/Blocks.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BlocksDbService implements BlocksDbInterface{

  constructor(
    @InjectRepository(BlocksEntity) 
    private blocksRepository: Repository<BlocksEntity>,
  ){}

  /**
   * 
   * @description
   * Develop function
   * 
   */
  async find_cards_by_some(
    dto: Partial<BlocksEntity>,
  ): Promise<BlocksDto[]> {

    return await this
      .blocksRepository
      .findBy(dto);
  }


  /**
   * 
   * @description
   * Develop function
   * 
   */
  async find_all_cards(): Promise<BlocksDto[]>{

    return await this
      .blocksRepository
      .find();
  }


  /**
   * 
   * @description
   * Admin function
   * 
   */
  async admin_add_block_to_board(
    blockDto: BlocksDto,
  ): Promise<BlocksDto>{

    return await this
      .blocksRepository
      .save(blockDto);
  }


  
}