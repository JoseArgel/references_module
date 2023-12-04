import { Injectable } from '@nestjs/common';
import { Fields } from './schemas/fields.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FieldsService {
  constructor(
    @InjectModel('Field')
    private readonly fieldModel: Model<Fields>,
  ) {}

  private fields: any[] = [];

  async findOne(id: string): Promise<Fields[]> {
    const field = await this.fieldModel.find({ _id: id }).exec();
    return field;
  }

  async findAll(): Promise<Fields[]> {
    const fields = await this.fieldModel.find().exec();
    return fields;
  }

  create(createFieldsDto): Promise<Fields> {
    const createdFields = new this.fieldModel(createFieldsDto);
    return createdFields.save();
  }

  update(id, updateFields): string {
    return 'fields updated successfully' + updateFields;
  }

  delete(id): string {
    return 'fields deleted successfully';
  }
}
