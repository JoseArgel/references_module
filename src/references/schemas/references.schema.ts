import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class References extends Document {
  /*  @Prop({ required: true })
    autor: Objectid,ref:User;*/

  @Prop({ required: true, default: Date.now })
  fecha: Date;
}

export const ReferencesSchema = SchemaFactory.createForClass(References);
