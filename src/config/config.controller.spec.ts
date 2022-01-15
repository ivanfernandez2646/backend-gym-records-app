import { TestingModule } from '@nestjs/testing';
import { afterAllUnitTest, beforeAllUnitTest } from '../../test/beforeUnitTest';
import { ConfigController } from './config.controller';

describe('ConfigController', () => {
  let controller: ConfigController;

  beforeEach(async () => {
    const module: TestingModule = await beforeAllUnitTest();
    controller = module.get<ConfigController>(ConfigController);
  });

  afterEach(async () => {
    await afterAllUnitTest();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
