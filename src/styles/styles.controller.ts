import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { StylesService } from './styles.service';

@Controller('styles')
export class StylesController {
  constructor(private readonly stylesService: StylesService) {}

  // find one by id findOne(id)

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stylesService.findOne(id);
  }

  @Get()
  findAll() {
    return this.stylesService.findAll();
  }

  @Post()
  create(@Body() createStylesDto) {
    return this.stylesService.create(createStylesDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateStyles): string {
    return this.stylesService.update(id, updateStyles);
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return this.stylesService.delete(id);
  }
}
