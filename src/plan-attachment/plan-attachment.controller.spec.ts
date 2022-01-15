import { TestingModule } from '@nestjs/testing';
import { afterAllUnitTest, beforeAllUnitTest } from '../../test/beforeUnitTest';
import { PlanAttachmentController } from './plan-attachment.controller';

describe('PlanAttachmentController', () => {
  let controller: PlanAttachmentController;

  beforeEach(async () => {
    const module: TestingModule = await beforeAllUnitTest();
    controller = module.get<PlanAttachmentController>(PlanAttachmentController);
  });

  afterEach(async () => {
    await afterAllUnitTest();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
