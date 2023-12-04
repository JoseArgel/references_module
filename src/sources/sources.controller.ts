import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { SourcesService } from './sources.service';

@Controller('sources')
export class SourcesController {
  constructor(private readonly sourcesService: SourcesService) {}

  // find one by id findOne(id)

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sourcesService.findOne(id);
  }

  @Get()
  findAll() {
    return this.sourcesService.findAll();
  }

  @Post()
  create(@Body() createSourcesDto) {
    return this.sourcesService.create(createSourcesDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSources): string {
    return this.sourcesService.update(id, updateSources);
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return this.sourcesService.delete(id);
  }
}
