import { AuthService } from './auth.service';
import { SignupDto, SigninDto } from './dto/';
import { User } from '@prisma/client';
import { GetUser } from './decorators/get-user.decorator';
import { JwtGuard } from './guards/jwt.gaurd';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  async signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(@Body() dto: SigninDto) {
    const { email } = await this.authService.validateUser(
      dto.email,
      dto.password,
    );

    return this.authService.signin(email);
  }

  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
