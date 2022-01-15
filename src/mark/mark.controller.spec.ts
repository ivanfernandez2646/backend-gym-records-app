import { TestingModule } from '@nestjs/testing';
import { afterAllUnitTest, beforeAllUnitTest } from '../../test/beforeUnitTest';
import { MarkController } from './mark.controller';

describe('MarkController', () => {
  let controller: MarkController;

  beforeEach(async () => {
    const module: TestingModule = await beforeAllUnitTest();
    controller = module.get<MarkController>(MarkController);
  });

  afterEach(async () => {
    await afterAllUnitTest();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
