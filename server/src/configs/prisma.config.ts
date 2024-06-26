import { ConfigService } from '@nestjs/config';
import { PrismaServiceOptions } from 'nestjs-prisma';

export const getPrismaConfig = async (
  configService: ConfigService,
): Promise<PrismaServiceOptions> => {
  return {
    prismaOptions: {
      datasources: {
        db: {
          url: configService.get('DATABASE_URL'),
        },
      },
    },
  };
};
