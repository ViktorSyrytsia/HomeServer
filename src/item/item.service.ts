import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../models/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly repo: Repository<Item>,
  ) {}

  public async getAll(): Promise<Item[]> {
    return await this.repo.find();
  }

  public async createItem(): Promise<Item> {
    return  this.repo.save({
      createDateTime: new Date(Date.now()),
      createdBy: 'Admin',
      description: 'Some short description',
      internalComment: 'Internal comment test',
      isActive: true,
      isArchived: false,
      lastChangedBy: 'Admin',
      lastChangedDateTime: new Date(Date.now()),
      name: 'First test item'
    });
  }
}
