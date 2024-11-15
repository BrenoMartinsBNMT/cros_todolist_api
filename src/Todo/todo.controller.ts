import { Body, Controller } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  criarItem(@Body) {}
}
