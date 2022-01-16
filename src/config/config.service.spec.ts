import { TestingModule } from '@nestjs/testing';
import {
  afterAllUnitTest,
  beforeAllUnitTest,
} from '../../test/beforeAndAfterUnitTest';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await beforeAllUnitTest();
    service = module.get<ConfigService>(ConfigService);
  });

  afterEach(async () => {
    await afterAllUnitTest();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
