import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModuleMockSpec } from './app.module.mock.spec';

describe('BlocksController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModuleMockSpec],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) - findBy', () => {
    return request(app.getHttpServer())
      .get('/api/focalboard/blocks/findBy/?board_id=1')
      .expect(200)
  });
});
