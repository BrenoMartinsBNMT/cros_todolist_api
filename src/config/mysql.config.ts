import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { configDotenv } from 'dotenv';
import * as path from 'path';
import { TarefaEntity } from 'src/entity/tarefa.entity';

import { UsuarioEntity } from 'src/entity/usuario.entity';

export class MysqlService {
  public getTypeOrmConfig(): TypeOrmModuleOptions {
    const env = configDotenv().parsed;
    return {
      type: 'mysql',
      host: env.MYSQL_HOST,
      port: parseInt(env.MYSQL_PORT),
      username: env.MYSQL_USER,
      password: env.MYSQL_PASSWORD,
      database: env.MYSQL_DB,

      entities: [UsuarioEntity, TarefaEntity],
      migrations: [path.join(__dirname, 'src/migrations/*{.ts,.js}')],

      ssl: env.MYSQL_SSL === 'true',
      synchronize: true,
    };
  }
}

export const exportConfigPostgres = new MysqlService();
