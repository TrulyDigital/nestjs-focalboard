import { Module } from "@nestjs/common";
import { getRepositoryToken } from "@nestjs/typeorm";
import { BlocksEntity } from "../src/infraestructure/database/entities/Blocks.entity";
import { BlocksService } from "../src/services/blocks.service";
import { BlockDbServiceMockSpec } from "./Blocks.db.service.mock.spec";
import { I_BLOCKS_DB } from "../src/infraestructure/database/interface/Blocks.db.interface";
import { BlocksController } from "../src/infraestructure/controllers/blocks.controller";
import { mockBlocksRepository } from "./mocks.repository.spec";

@Module({
  imports: [],
  providers: [
    BlocksService,
    {
      useClass: BlockDbServiceMockSpec,
      provide: I_BLOCKS_DB,
    },
    {
      provide: getRepositoryToken(BlocksEntity),
      useValue: mockBlocksRepository,
    }
  ],
  controllers: [
    BlocksController,
  ],
})
export class AppModuleMockSpec{}