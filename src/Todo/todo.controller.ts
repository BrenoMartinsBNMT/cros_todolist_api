import { Body, Controller } from '@nestjs/common';
import { todoInterface } from './Models/Interface/todo.interface';
import { TodoService } from './Service/Todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  buscarTodo(@Body() todo: todoInterface) {
    return this.todoService.buscarTodo(todo);
  }
  criarTodo(@Body() todo: todoInterface) {
    return this.todoService.criarTodo(todo);
  }
  atualizarTodo(@Body() todo: todoInterface) {
    return this.todoService.atualizarTodo(todo);
  }
  excluirTodo(@Body() todo: todoInterface) {
    return this.todoService.excluirTodo(todo);
  }
}
