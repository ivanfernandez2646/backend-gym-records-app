import { TestingModule } from '@nestjs/testing';
import { afterAllUnitTest, beforeAllUnitTest } from '../../test/beforeUnitTest';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await beforeAllUnitTest();
    controller = module.get<UserController>(UserController);
  });

  afterEach(async () => {
    await afterAllUnitTest();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
