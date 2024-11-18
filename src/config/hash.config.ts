import * as bcrypt from 'bcrypt';
import { configDotenv } from 'dotenv';

export function criarSenhaCriptografada(senha: string) {
  const saltRounds = parseInt(configDotenv().parsed.SALT_ROUNDS);
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hash(senha, salt);
}

export function verificarSenhaUsuario(
  senha: string,
  senhaCriptografada: string,
) {
  return bcrypt.compare(senha, senhaCriptografada);
}
