import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './Service/Todo.service';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
