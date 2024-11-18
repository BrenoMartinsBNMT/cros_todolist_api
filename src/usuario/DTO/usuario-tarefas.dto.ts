import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class usuarioTarefasDTO {
  @IsNumber()
  idUsuario: number;
  @IsBoolean()
  @IsOptional()
  feito: boolean;
}
