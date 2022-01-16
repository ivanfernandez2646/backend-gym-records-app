import { TestingModule } from '@nestjs/testing';
import {
  afterAllUnitTest,
  beforeAllUnitTest,
} from '../../test/beforeAndAfterUnitTest';
import { MarkService } from './mark.service';

describe('MarkService', () => {
  let service: MarkService;

  beforeEach(async () => {
    const module: TestingModule = await beforeAllUnitTest();
    service = module.get<MarkService>(MarkService);
  });

  afterEach(async () => {
    await afterAllUnitTest();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
