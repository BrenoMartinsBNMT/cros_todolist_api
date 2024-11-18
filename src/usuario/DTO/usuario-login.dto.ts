import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class usuarioLoginDTO {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  senha: string;
}
