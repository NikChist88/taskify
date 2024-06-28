import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'nestjs-prisma';
import { CreateTaskDto } from './dto';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreateTaskDto) {
    try {
      const newTask = await this.prismaService.task.create({
        data: { ...dto, completed: false },
      });

      return newTask;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        console.log(err);
      }
      throw err;
    }
  }

  async findAll() {
    const tasks = await this.prismaService.task.findMany();
    if (!tasks.length)
      throw new HttpException('Tasks not found!', HttpStatus.NOT_FOUND);
    return tasks;
  }

  async findOne(id: string) {
    const task = await this.prismaService.task.findFirst({ where: { id } });
    if (!task) throw new HttpException('Task not found!', HttpStatus.NOT_FOUND);
    return task;
  }

  async update(id: string, dto: CreateTaskDto) {
    const task = await this.prismaService.task.findFirst({ where: { id } });
    if (!task) throw new HttpException('Task not found!', HttpStatus.NOT_FOUND);

    return await this.prismaService.task.update({
      where: { id },
      data: { ...dto },
    });
  }

  async remove(id: string) {
    const task = await this.prismaService.task.findFirst({ where: { id } });
    if (!task) throw new HttpException('Task not found!', HttpStatus.NOT_FOUND);

    await this.prismaService.task.delete({ where: { id } });
    return { message: `Task ${task.title} deleted!` };
  }
}
