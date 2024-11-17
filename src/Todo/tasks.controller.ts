import { Body, Controller } from '@nestjs/common';
import { tasksInterface } from './Models/Interface/tasks.interface';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  buscarTasks(@Body() todo: tasksInterface) {
    return this.tasksService.buscarTasks(todo);
  }
  criarTasks(@Body() todo: tasksInterface) {
    return this.tasksService.criarTasks(todo);
  }
  atualizarTasks(@Body() todo: tasksInterface) {
    return this.tasksService.atualizarTasks(todo);
  }
  excluirTasks(@Body() todo: tasksInterface) {
    return this.tasksService.excluirTasks(todo);
  }
}
