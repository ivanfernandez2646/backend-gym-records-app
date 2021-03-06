import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigController } from '../src/config/config.controller';
import { ExerciseController } from '../src/exercise/exercise.controller';
import { ExerciseService } from '../src/exercise/exercise.service';
import { MarkController } from '../src/mark/mark.controller';
import { MarkService } from '../src/mark/mark.service';
import { PlanAttachmentController } from '../src/plan-attachment/plan-attachment.controller';
import { PlanAttachmentService } from '../src/plan-attachment/plan-attachment.service';
import { Config, ConfigSchema } from '../src/schemas/config.schema';
import { Exercise, ExerciseSchema } from '../src/schemas/exercise.schema';
import { Mark, MarkSchema } from '../src/schemas/mark.schema';
import {
  PlanAttachment,
  PlanAttachmentSchema,
} from '../src/schemas/plan-attachment.schema';
import { User, UserSchema } from '../src/schemas/user.schema';
import { UserController } from '../src/user/user.controller';
import { UserService } from '../src/user/user.service';
import { closeMongoD, initMongoD } from './mongod';

let testingModule: TestingModule;

export const beforeAllUnitTest = async (): Promise<TestingModule> => {
  testingModule = await Test.createTestingModule({
    imports: [
      initMongoD({ useCreateIndex: true, useFindAndModify: false }),
      MongooseModule.forFeature([
        { name: User.name, schema: UserSchema },
        { name: Config.name, schema: ConfigSchema },
        { name: Exercise.name, schema: ExerciseSchema },
        { name: Mark.name, schema: MarkSchema },
        { name: Exercise.name, schema: ExerciseSchema },
        { name: User.name, schema: UserSchema },
        { name: PlanAttachment.name, schema: PlanAttachmentSchema },
      ]),
    ],
    controllers: [
      MarkController,
      UserController,
      ConfigController,
      ExerciseController,
      PlanAttachmentController,
    ],
    providers: [
      MarkService,
      UserService,
      ConfigService,
      ExerciseService,
      PlanAttachmentService,
    ],
  }).compile();
  return testingModule;
};

export const afterAllUnitTest = async (): Promise<void> => {
  await closeMongoD();
  if (testingModule) {
    await testingModule.close();
  }
};
