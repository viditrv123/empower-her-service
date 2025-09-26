import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './users.service';
import { AppGaurd } from '../core/gaurds/app.gaurd';
import createUserDto from './dto/createUser.dto';
import loginUserDto from './dto/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/createUser')
  createUser(@Body() dto: createUserDto): object {
    const { userName, password, email } = dto;
    return this.userService.createUser({ userName, password, email });
  }

  @Post('/login')
  login(@Body() dto: loginUserDto): object {
    const { userName, password } = dto;
    return this.userService.login({ userName, password });
  }

  @UseGuards(AppGaurd)
  @Get('/check')
  check(): string {
    return 'Correct';
  }
}
