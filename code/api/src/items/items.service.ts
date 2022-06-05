import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  create(createItemDto: CreateItemDto) {
    return this.itemRepository.save(createItemDto as any);
  }

  findAll() {
    return this.itemRepository.find();
  }

  findOne(id: number) {
    return this.itemRepository.findOne(id);
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.itemRepository.update(id, updateItemDto as any);
  }

  remove(id: number) {
    return this.itemRepository.delete(id);
  }
}
