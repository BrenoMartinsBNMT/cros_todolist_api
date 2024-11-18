import { IsNumber } from 'class-validator';

export class ExcluirTarefaDTO {
  @IsNumber()
  id: number;

  @IsNumber()
  usuarioId: number;
}
