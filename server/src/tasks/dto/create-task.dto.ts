import { IsNotEmpty } from 'class-validator';
import { Labels } from '@prisma/client';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  description: string;
  labels: Labels;
  completed: boolean;
  userId: string;
}
