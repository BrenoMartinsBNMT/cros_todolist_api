import { Injectable } from '@nestjs/common';
import { todoInterface } from '../Models/Interface/todo.interface';

@Injectable()
export class TodoService {
  buscarTodo(todo: todoInterface) {
    return todo;
  }
  criarTodo(todo: todoInterface) {
    return todo;
  }
  atualizarTodo(todo: todoInterface) {
    return todo;
  }
  excluirTodo(todo: todoInterface) {
    return todo;
  }
}
