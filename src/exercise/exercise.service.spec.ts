import { TestingModule } from '@nestjs/testing';
import { afterAllUnitTest, beforeAllUnitTest } from '../../test/beforeUnitTest';
import { ExerciseService } from './exercise.service';

describe('ExerciseService', () => {
  let service: ExerciseService;

  beforeEach(async () => {
    const module: TestingModule = await beforeAllUnitTest();
    service = module.get<ExerciseService>(ExerciseService);
  });

  afterEach(async () => {
    await afterAllUnitTest();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
