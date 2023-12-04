import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { FieldsService } from './fields.service';

@Controller('fields')
export class FieldsController {
  constructor(private readonly fieldsService: FieldsService) {}

  // find one by id findOne(id)

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fieldsService.findOne(id);
  }

  @Get()
  findAll() {
    return this.fieldsService.findAll();
  }

  @Post()
  create(@Body() createFieldsDto) {
    return this.fieldsService.create(createFieldsDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateFields): string {
    return this.fieldsService.update(id, updateFields);
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return this.fieldsService.delete(id);
  }
}
