import { Module } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TarefaController } from './tarefa.controller';
import { Repository } from 'typeorm';
import { TarefaEntity } from 'src/entity/tarefa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/entity/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TarefaEntity, UsuarioEntity])],
  controllers: [TarefaController],
  providers: [TarefaService, Repository],
})
export class TarefaModule {}
