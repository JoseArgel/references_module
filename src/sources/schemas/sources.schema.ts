import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Sources extends Document {
  @Prop({ required: true })
    nombre: string;

  /*@Prop({ required: true, default: Date.now })
  /*reference_id: Objectid,ref:References;*/
}

export const SourcesSchema = SchemaFactory.createForClass(Sources);
