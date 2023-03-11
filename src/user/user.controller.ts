import { UserService } from './user.service';
import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CustomException } from 'src/core/filters/custom.exception';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getHello(): string {
    return this.userService.getHello();
  }

  @Get('/hi')
  getHi() {
    throw new CustomException();
  }

  @Get('/error')
  getError() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
