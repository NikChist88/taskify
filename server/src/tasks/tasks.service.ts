import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(dto: Task) {
    try {
      const newTask = await this.prisma.task.create({
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
    const tasks = await this.prisma.task.findMany();
    if (!tasks.length) throw new NotFoundException('Tasks not found!');
    return tasks;
  }

  async findOne(id: string) {
    const task = await this.prisma.task.findFirst({ where: { id } });
    if (!task) throw new NotFoundException('Task not found!');
    return task;
  }

  async update(id: string, dto: Task) {
    const task = await this.prisma.task.findFirst({ where: { id } });
    if (!task) throw new NotFoundException('Task not found!');
    return await this.prisma.task.update({ where: { id }, data: { ...dto } });
  }

  async remove(id: string) {
    const task = await this.prisma.task.findFirst({ where: { id } });
    if (!task) throw new NotFoundException('Task not found!');
    await this.prisma.task.delete({ where: { id } });
    return { message: `Task ${task.title} deleted!` };
  }
}
