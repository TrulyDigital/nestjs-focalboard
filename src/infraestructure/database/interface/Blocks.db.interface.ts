import { BlocksDto } from "../../../domain/Blocks.dto";
import { BlocksEntity } from "../entities/Blocks.entity";

export const I_BLOCKS_DB = "I_BLOCKS_DB";

export interface BlocksDbInterface{

  /**
   * 
   * @description
   * Develop function
   * 
   */
  find_cards_by_some(
    dto: Partial<BlocksEntity>,
  ): Promise<BlocksDto[]>;


  /**
   * 
   * @description
   * Develop function
   * 
   */
  find_all_cards(): Promise<BlocksDto[]>;


  /**
   * 
   * @description
   * Admin function
   * 
   */
  admin_add_block_to_board(
    blockDto: BlocksDto,
  ): Promise<BlocksDto>;
}