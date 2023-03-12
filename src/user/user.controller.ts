import { UserService } from './user.service';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CustomException } from 'src/core/filters/custom.exception';
import { ValidationPipe } from 'src/core/pipes/validation.pipe';

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

  @Get(':id')
  getUserById(@Param('id', ValidationPipe) id: number) {
    console.log(id);
    return id;
  }

  @Get('/name/:id')
  getUserByName(@Param('id', ParseIntPipe) id: number) {
    return id;
  }

  @Get('/error')
  getError() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
