import { TestingModule } from '@nestjs/testing';
import {
  afterAllUnitTest,
  beforeAllUnitTest,
} from '../../test/beforeAndAfterUnitTest';
import { PlanAttachmentService } from './plan-attachment.service';

describe('PlanAttachmentService', () => {
  let service: PlanAttachmentService;

  beforeEach(async () => {
    const module: TestingModule = await beforeAllUnitTest();
    service = module.get<PlanAttachmentService>(PlanAttachmentService);
  });

  afterEach(async () => {
    await afterAllUnitTest();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
