import { configDotenv } from 'dotenv';
import { TarefaEntity } from 'src/entity/tarefa.entity';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { DataSource } from 'typeorm';

const env = configDotenv().parsed;
export default new DataSource({
  type: 'mysql',
  host: env.MYSQL_HOST,
  port: parseInt(env.MYSQL_PORT),
  username: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DB,
  entities: [UsuarioEntity, TarefaEntity],
  migrations: ['src/migrations/'],
});
