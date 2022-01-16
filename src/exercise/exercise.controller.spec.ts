import { TestingModule } from '@nestjs/testing';
import {
  afterAllUnitTest,
  beforeAllUnitTest,
} from '../../test/beforeAndAfterUnitTest';
import { ExerciseController } from './exercise.controller';

describe('ExerciseController', () => {
  let controller: ExerciseController;

  beforeEach(async () => {
    const module: TestingModule = await beforeAllUnitTest();
    controller = module.get<ExerciseController>(ExerciseController);
  });

  afterEach(async () => {
    await afterAllUnitTest();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
