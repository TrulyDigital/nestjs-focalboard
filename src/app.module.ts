import { Module } from '@nestjs/common';
import { BlocksController } from './infraestructure/controllers/blocks.controller';
import { BlocksService } from './services/blocks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlocksEntity } from './infraestructure/database/entities/Blocks.entity';
import { BoardsEntity } from './infraestructure/database/entities/Boards.entity';
import { BoardsService } from './services/boards.service';
import { BoardsController } from './infraestructure/controllers/boards.controller';
import { BlocksDbService } from './infraestructure/database/interface/Blocks.db.service';
import { I_BLOCKS_DB } from './infraestructure/database/interface/Blocks.db.interface';
import { BoardsDbService } from './infraestructure/database/interface/Boards.db.service';
import { I_BOARDS_DB } from './infraestructure/database/interface/Boards.db.interface';
import { UsersService } from './services/users.service';
import { UsersDbService } from './infraestructure/database/interface/Users.db.service';
import { I_USERS_DB } from './infraestructure/database/interface/Users.db.interface';
import { UsersController } from './infraestructure/controllers/users.controller';
import { UsersEntity } from './infraestructure/database/entities/Users.entity';
import { BoardMembersEntity } from './infraestructure/database/entities/BoardMembers.entity';
import { BoardMembersDbService } from './infraestructure/database/interface/BoardMembers.db.service';
import { I_BOARD_MEMBERS_DB } from './infraestructure/database/interface/BoardMembers.db.interface';
import { BoardMembersService } from './services/boardmembers.service';
import { BoardMembersController } from './infraestructure/controllers/boardmembers.controller';
import { ToolsService } from './services/tools.service';
import { AdminUsersService } from './services/admin.users.service';
import { AdminBoardsService } from './services/admin.boards.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'focalboard',
      password: 'focalboard_12345',
      database: 'focalboard_db',
      entities: [
        BlocksEntity,
        BoardsEntity,
        UsersEntity,
        BoardMembersEntity,
      ],
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([
      BlocksEntity,
      BoardsEntity,
      UsersEntity,
      BoardMembersEntity,
    ]),
  ],
  providers: [
    ToolsService,
    BlocksService,
    {
      useClass: BlocksDbService,
      provide: I_BLOCKS_DB,
    },
    BoardsService,
    AdminBoardsService,
    {
      useClass: BoardsDbService,
      provide: I_BOARDS_DB,
    },
    UsersService,
    AdminUsersService,
    {
      useClass: UsersDbService,
      provide: I_USERS_DB,
    },
    BoardMembersService,
    {
      useClass: BoardMembersDbService,
      provide: I_BOARD_MEMBERS_DB,
    }
  ],
  controllers: [
    BlocksController,
    BoardsController,
    UsersController,
    BoardMembersController,
  ],
})
export class AppModule {}
