import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { CustomException } from '../filters/custom.exception';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, metadata);
    if (typeof value === 'string') {
      throw new CustomException();
    }
    return value;
  }
}
