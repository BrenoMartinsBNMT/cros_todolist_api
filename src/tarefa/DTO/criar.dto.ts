import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CriarTarefaDTO {
  @IsNumber()
  id: number;

  @IsNumber()
  usuarioId: number;

  @IsString()
  titulo: string;

  @IsString()
  descricao: string;

  @IsBoolean()
  feito: boolean;

  @IsNumber()
  @IsOptional()
  parentId: number;
}
