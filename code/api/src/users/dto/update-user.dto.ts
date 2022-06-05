import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  organization?: number;
}
