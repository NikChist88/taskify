import { User } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  description: string;
  labels: Labels;
  completed: boolean;
  userId: string;
  user: User;
}

enum Labels {
  project,
  frontend,
  backend,
  issue,
  work,
}
