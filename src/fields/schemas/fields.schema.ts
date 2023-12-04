import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Fields extends Document {
    @Prop({ required: true })
    nombre: string;
    existencia: boolean;

  /*@Prop({ required: true, default: Date.now })
  reference_id: Objectid,ref:References;*/
}

export const FieldsSchema = SchemaFactory.createForClass(Fields);
