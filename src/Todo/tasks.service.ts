import { Injectable } from '@nestjs/common';
import { tasksInterface } from './Models/Interface/tasks.interface';

@Injectable()
export class TasksService {
  buscarTasks(tasks: tasksInterface) {
    return tasks;
  }
  criarTasks(tasks: tasksInterface) {
    return tasks;
  }
  atualizarTasks(tasks: tasksInterface) {
    return tasks;
  }
  excluirTasks(tasks: tasksInterface) {
    return tasks;
  }
}
