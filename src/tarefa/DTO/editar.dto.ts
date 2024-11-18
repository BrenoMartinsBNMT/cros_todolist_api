import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class EditarTarefaDTO {
  @IsNumber()
  id: number;

  @IsNumber()
  usuarioId: number;

  @IsOptional()
  @IsString()
  titulo: string;

  @IsString()
  @IsOptional()
  descricao: string;

  @IsBoolean()
  @IsOptional()
  feito: boolean;
}
