import { Injectable } from '@nestjs/common';
import { Sources } from './schemas/sources.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SourcesService {
  constructor(
    @InjectModel('Source')
    private readonly sourceModel: Model<Sources>,
  ) {}

  private sources: any[] = [];

  async findOne(id: string): Promise<Sources[]> {
    const sources = await this.sourceModel.find({ _id: id }).exec();
    return sources;
  }

  async findAll(): Promise<Sources[]> {
    const sources = await this.sourceModel.find().exec();
    return sources;
  }

  create(createSourcesDto): Promise<Sources> {
    const createdSources = new this.sourceModel(createSourcesDto);
    return createdSources.save();
  }

  update(id, updateSources): string {
    return 'sources updated successfully' + updateSources;
  }

  delete(id): string {
    return 'sources deleted successfully';
  }
}
