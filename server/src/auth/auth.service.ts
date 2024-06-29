import { PrismaService } from 'nestjs-prisma';
import { SignupDto } from './dto/signup.dto';
import { hash, verify } from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signup(dto: SignupDto) {
    try {
      const passwordHash = await hash(dto.password);
      const user = await this.prismaService.user.create({
        data: {
          email: dto.email,
          hash: passwordHash,
          firstName: dto.firstName,
          lastName: dto.lastName,
        },
        select: {
          id: true,
          email: true,
          createdAt: true,
          firstName: true,
          lastName: true,
        },
      });

      return user;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new ForbiddenException('Credentials taken!');
        }
      }
      throw err;
    }
  }

  async signin(email: string) {
    const payload = { email };
    const secret = this.configService.get('JWT_SECRET');

    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '1d',
        secret: secret,
      }),
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('User not found!');
    }

    const pwMatches = await verify(user.hash, password);
    if (!pwMatches) {
      throw new UnauthorizedException('Wrong password!');
    }

    return { email: user.email };
  }
}
