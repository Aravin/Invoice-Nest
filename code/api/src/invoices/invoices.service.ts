import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {}

  create(createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceRepository.save(createInvoiceDto as any);
  }

  findAll() {
    return this.invoiceRepository.find({ relations: { customer: true } });
  }

  findOne(id: number) {
    return this.invoiceRepository.findOne({
      where: [{ invoiceId: id }],
      relations: ['customer', 'taxes'],
    });
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoiceRepository.save(updateInvoiceDto as any);
  }

  remove(id: number) {
    return this.invoiceRepository.delete(id);
  }

  nextSequenceNumber() {
    return this.invoiceRepository.query(`SELECT nextval('invoice_number_seq')`);
  }
}
