import { TasksService } from './tasks.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Task } from '@prisma/client';
import { CreateTaskDto } from './dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch('edit/task/:id')
  update(@Param('id') id: string, @Body() dto: Task) {
    return this.tasksService.update(id, dto);
  }

  @Delete('remove/task/:id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
