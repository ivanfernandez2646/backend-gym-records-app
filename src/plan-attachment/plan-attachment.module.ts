import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import {
  PlanAttachment,
  PlanAttachmentSchema,
} from '../schemas/plan-attachment.schema';
import { User, UserSchema } from '../schemas/user.schema';
import { PlanAttachmentController } from './plan-attachment.controller';
import { PlanAttachmentService } from './plan-attachment.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlanAttachment.name, schema: PlanAttachmentSchema },
      { name: User.name, schema: UserSchema },
    ]),
    MulterModule.register({
      storage: memoryStorage(),
    }),
  ],
  controllers: [PlanAttachmentController],
  providers: [PlanAttachmentService],
})
export class PlanAttachmentModule {}
