import { Injectable } from '@nestjs/common';
import { Styles } from './schemas/styles.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StylesService {
  constructor(
    @InjectModel('Style')
    private readonly styleModel: Model<Styles>,
  ) {}

  private styles: any[] = [];

  async findOne(id: string): Promise<Styles[]> {
    const styles = await this.styleModel.find({ _id: id }).exec();
    return styles;
  }

  async findAll(): Promise<Styles[]> {
    const sources = await this.styleModel.find().exec();
    return sources;
  }

  create(createStylesDto): Promise<Styles> {
    const createdStyles = new this.styleModel(createStylesDto);
    return createdStyles.save();
  }

  update(id, updateStyles): string {
    return 'styles updated successfully' + updateStyles;
  }

  delete(id): string {
    return 'styles deleted successfully';
  }
}
