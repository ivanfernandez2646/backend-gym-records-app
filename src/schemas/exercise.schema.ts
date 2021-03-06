import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MuscleEnum } from '../enums/muscle.enum';
import { Mark } from './mark.schema';

export type ExerciseDocument = Exercise & Document;

@Schema()
export class Exercise {
  @Prop({ type: String, required: true, index: true, unique: true })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String, required: true })
  muscle: MuscleEnum;

  @Prop({ type: Boolean, default: false, name: 'is_monitorized' })
  isMonitorized: boolean;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Marks' }] })
  marks: Mark[];
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
ExerciseSchema.pre('deleteOne', { document: true }, function (next) {
  this.model('Mark').deleteMany({ exercise: this._id }).exec();
  next();
});
