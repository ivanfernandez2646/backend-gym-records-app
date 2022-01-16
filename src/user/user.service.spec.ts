import { TestingModule } from '@nestjs/testing';
import {
  afterAllUnitTest,
  beforeAllUnitTest,
} from '../../test/beforeAndAfterUnitTest';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await beforeAllUnitTest();
    service = module.get<UserService>(UserService);
  });

  afterEach(async () => {
    await afterAllUnitTest();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
