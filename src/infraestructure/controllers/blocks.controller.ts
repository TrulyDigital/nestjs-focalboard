import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BlocksService } from '../../services/blocks.service';
import { BlocksDto } from '../../domain/Blocks.dto';

@Controller('/api/focalboard')
export class BlocksController {

  constructor(
    private readonly blocksService: BlocksService,
  ){}


  /**
   * 
   * @description
   * Develop function
   * 
   */
  @Get('/blocks/findBy/')
  @UsePipes(ValidationPipe)
  async get_blocks_find_by(
    @Query() bodyIn: Partial<BlocksDto>,
  ): Promise<BlocksDto[]> {

    return await this
      .blocksService
      .get_blocks_find_by(bodyIn);
  }


  /**
   * 
   * @description
   * Develop function
   * 
   */
  @Get('/blocks/')
  async find_all_cards(): Promise<BlocksDto[]>{

    return await this
      .blocksService
      .find_all_cards();
  }
}
