import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class usuarioDTO {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  nome: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  senha: string;
}
