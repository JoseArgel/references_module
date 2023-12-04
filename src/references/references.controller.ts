import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ReferencesService } from './references.service';

@Controller('references')
export class ReferencesController {
  constructor(private readonly referencesService: ReferencesService) {}

  // find one by id findOne(id)

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.referencesService.findOne(id);
  }

  @Get()
  findAll() {
    return this.referencesService.findAll();
  }

  @Post()
  create(@Body() createReferencesDto) {
    return this.referencesService.create(createReferencesDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateReferences): string {
    return this.referencesService.update(id, updateReferences);
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return this.referencesService.delete(id);
  }
}
