import { Injectable } from '@nestjs/common';
import { References } from './schemas/references.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReferencesService {
  constructor(
    @InjectModel('Reference')
    private readonly referenceModel: Model<References>,
  ) {}

  private references: any[] = [];

  async findOne(id: string): Promise<References[]> {
    const reference = await this.referenceModel.find({ _id: id }).exec();
    return reference;
  }

  async findAll(): Promise<References[]> {
    const references = await this.referenceModel.find().exec();
    return references;
  }

  create(createReferencesDto): Promise<References> {
    const createdReferences = new this.referenceModel(createReferencesDto);
    return createdReferences.save();
  }

  update(id, updateReferences): string {
    return 'references updated successfully' + updateReferences;
  }

  delete(id): string {
    return 'references deleted successfully';
  }
}
