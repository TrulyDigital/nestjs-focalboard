import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { BlocksDbInterface, I_BLOCKS_DB } from '../infraestructure/database/interface/Blocks.db.interface';
import { BlocksDto } from '../domain/Blocks.dto';
import { error } from 'console';
import { ErrorDto } from 'src/domain/Error.dto';


@Injectable()
export class BlocksService {

  constructor(
    @Inject(I_BLOCKS_DB) 
    private readonly dbBlocks: BlocksDbInterface,
  ){}

  async get_blocks_find_by(
    bodyIn: Partial<BlocksDto>,
  ): Promise<BlocksDto[]> {

    const bodyInMap = Object.entries(bodyIn);
    
    if(bodyInMap.length  == 0){

      const newError: ErrorDto = {
        message: 'Para consultar tareas se debe enviar al menos un parámetro',
        error: 'Bad Request',
        statusCode: HttpStatus.BAD_REQUEST,
      };

      throw new HttpException(
        newError, 
        HttpStatus.BAD_REQUEST, 
        {
          cause: error,
        }
      );
    }

    if(bodyInMap.length > 1){

      const newError: ErrorDto = {
        message: 'Para consultar tareas se debe enviar unicamente un parámetro',
        error: 'Bad Request',
        statusCode: HttpStatus.BAD_REQUEST,
      };

      throw new HttpException(
        newError, 
        HttpStatus.BAD_REQUEST, 
        {
          cause: error
        }
      );
    }

    return await this.dbBlocks.find_cards_by_some(bodyIn);
  }

  async find_all_cards(): Promise<BlocksDto[]>{

    return await this
      .dbBlocks
      .find_all_cards();
  }
}
