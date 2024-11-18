import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MysqlService } from './config/mysql.config';
import { UsuarioModule } from './usuario/usuario.module';
import { TarefaModule } from './Tarefa/tarefa.module';
import { UsuarioEntity } from './entity/usuario.entity';
import { TarefaEntity } from './entity/tarefa.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => new MysqlService().getTypeOrmConfig(),
    }),
    TypeOrmModule.forFeature([UsuarioEntity, TarefaEntity]),
    UsuarioModule,
    TarefaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
