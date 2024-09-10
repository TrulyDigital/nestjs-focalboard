import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { BoardsDto, CardPropertyNewBoardDto } from "src/domain/Boards.dto";
import { BoardsDbInterface, I_BOARDS_DB } from "src/infraestructure/database/interface/Boards.db.interface";
import { ToolsService } from "./tools.service";
import { CreateOneBoardDto } from "src/domain/CreateOneBoard.dto";
import { I_USERS_DB, UsersDbInterface } from "src/infraestructure/database/interface/Users.db.interface";
import { ErrorDto } from "src/domain/Error.dto";
import { error } from "console";
import { BoardMembersDbInterface, I_BOARD_MEMBERS_DB } from "src/infraestructure/database/interface/BoardMembers.db.interface";
import { BoardMembersDto } from "src/domain/BoardMembers.dto";
import { BlocksDbInterface, I_BLOCKS_DB } from "src/infraestructure/database/interface/Blocks.db.interface";
import { BlocksDto } from "src/domain/Blocks.dto";

@Injectable()
export class AdminBoardsService{

  constructor(
    private readonly tools: ToolsService,
    @Inject(I_BOARDS_DB) 
    private readonly dbBoards: BoardsDbInterface,
    @Inject(I_USERS_DB)
    private readonly dbUsers: UsersDbInterface,
    @Inject(I_BOARD_MEMBERS_DB)
    private readonly dbBoardMembers: BoardMembersDbInterface,
    @Inject(I_BLOCKS_DB)
    private readonly dbBlocks: BlocksDbInterface,
  ){}

  async admin_find_all_boards(): Promise<BoardsDto[]>{
    return await this.dbBoards.admin_find_all_boards();
  }

  async admin_create_one_board(
    bodyIn: CreateOneBoardDto,
  ): Promise<BoardsDto>{

    // get admin user
    const user = await this.dbUsers.admin_find_user_by_id(bodyIn.user_id);

    // validate admin user
    if(user === null || user === undefined){

      const newError: ErrorDto = {
        message: 'No existe el user_id',
        error: 'Unprocessable Entity',
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      };

      throw new HttpException(
        newError,
        HttpStatus.UNPROCESSABLE_ENTITY,
        {
          cause: error,
        }
      );
    }

    // validate admin user
    if(user.username !== 'admin'){

      const newError: ErrorDto = {
        message: 'Solo el usuario administrador puede crear tableros',
        error: 'Unprocessable Entity',
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      };

      throw new HttpException(
        newError,
        HttpStatus.UNPROCESSABLE_ENTITY,
        {
          cause: error,
        }
      );
    }

    // build board
    const card_properties: CardPropertyNewBoardDto[] = [
      {
        id: this.tools.generateRandomString(27),
        name: 'Status',
        type: 'select',
        options: [
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorYellow',
            value: 'No Iniciado',
          },
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorYellow',
            value: 'En Proceso',
          },
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorRed',
            value: 'Bloqueado',
          },
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorYellow',
            value: 'Completado',
          },
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorYellow',
            value: 'Finalizado',
          },
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorYellow',
            value: 'Pruebas',
          },
        ]
      },
      {
        id: this.tools.generateRandomString(27),
        name: 'Tarea_Padre',
        type: 'select',
        options: [
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorGray',
            value: 'MSServiceOrderEYNTemp_V1.0'
          },
        ]
      },
      {
        id: this.tools.generateRandomString(27),
        name: 'Tipo_Tarea',
        type: 'select',
        options: [
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorPurple',
            value: 'TAREA_PADRE',
          },
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorYellow',
            value: 'TAREA_HIJA',
          }
        ]
      },
      {
        id: this.tools.generateRandomString(27),
        name: 'Tipo_Actividad',
        type: 'select',
        options: [
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorBlue',
            value: 'DESARROLLO',
          },
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorRed',
            value: 'ESCALAMIENTO',
          },
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorRed',
            value: 'BUG',
          },
        ]
      },
      {
        id: this.tools.generateRandomString(27),
        name: 'Responsable',
        type: 'person',
        options: [],
      },
      {
        id: this.tools.generateRandomString(27),
        name: 'Complejidad',
        type: 'select',
        options: [
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorPink',
            value: 'ALTA',
          },
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorPink',
            value: 'MEDIA',
          },
          {
            id: this.tools.generateRandomString(27),
            color: 'propColorPink',
            value: 'BAJA',
          },
        ]
      },
      {
        id: this.tools.generateRandomString(27),
        name: 'Fecha_Inicio',
        type: 'date',
        options: [],
      },
      {
        id: this.tools.generateRandomString(27),
        name: 'Fecha_Fin',
        type: 'date',
        options: [],
      }
    ];

    const newBoard: BoardsDto = {
      id: this.tools.generateRandomString(27),
      insert_at: new Date(this.tools.getCurrentDate()),
      team_id: '0',
      channel_id: '',
      created_by: 'ui6wsk455jjdm8rnurnk1ktd11h',
      modified_by: 'ui6wsk455jjdm8rnurnk1ktd11h',
      type: 'P',
      title: bodyIn.title,
      description: '',
      icon: '',
      show_description: false,
      is_template: false,
      template_version: 0,
      properties: {},
      card_properties: card_properties,
      create_at: new Date().getTime().toString(),
      update_at: new Date().getTime().toString(),
      delete_at: '0',
      minimum_role: '',
    };

    // create board
    const newBoardResult: BoardsDto = await this
      .dbBoards
      .admin_create_one_board(newBoard);

    // build board member
    const newBoardMember: BoardMembersDto = {
      board_id: newBoardResult.id,
      user_id: bodyIn.user_id,
      roles: '',
      scheme_admin: true,
      scheme_editor: true,
      scheme_commenter: false,
      scheme_viewer: false,
    };

    // create board memeber
    const newBoardMemberResult: BoardMembersDto = await this
      .dbBoardMembers
      .admin_add_member_to_board(newBoardMember);

    // build block - panel view for board
    const cardPropertiesStatus = card_properties.filter(item => item.name === 'Status');
    const statusIds = cardPropertiesStatus[0].options.map(item => item.id);
    const newBlock: BlocksDto = {
      id: this.tools.generateRandomString(27),
      insert_at: new Date(this.tools.getCurrentDate()),
      parent_id: this.tools.generateRandomString(27),
      schema: '1',
      type: 'view',
      title: 'Vista de panel',
      fields: {
        cardOrder: [],
        collapsedOptionIds: [],
        columnCalculations: {},
        columnWidths: {},
        defaultTemplateId: '',
        filter: {
          filters: [],
          operation: 'and'
        },
        hiddenOptionIds: [''],
        kanbanCalculations: {},
        sortOptions: [],
        viewType: 'board',
        visibleOptionIds: statusIds,
        visiblePropertyIds: []
      },
      create_at: new Date().getTime().toString(),
      update_at: new Date().getTime().toString(),
      delete_at: '0',
      root_id: null,
      modified_by: bodyIn.user_id,
      channel_id: '',
      created_by: bodyIn.user_id,
      board_id: newBoardResult.id,
    };

    // create block - view panel for board
    const newBlockResult: BlocksDto = await this
      .dbBlocks
      .admin_add_block_to_board(newBlock);

    return newBoardResult;
  }

}