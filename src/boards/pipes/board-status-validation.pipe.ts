import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

export class BoardStatusValidationtPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException();
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);

    return index !== -1;
  }
}
