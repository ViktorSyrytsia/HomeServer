import { Controller, Get, Post } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private service: ItemService) {}

  @Get()
  public async getAll() {
    return await this.service.getAll();
  }

  @Post()
  public async createItem() {
    return await this.service.createItem();
  }
}
