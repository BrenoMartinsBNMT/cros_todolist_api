import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, TreeRepository } from 'typeorm';
import { TarefaEntity } from 'src/entity/tarefa.entity';
import { InjectRepository } from '@nestjs/typeorm';

import { usuarioTarefasDTO } from 'src/usuario/DTO/usuario-tarefas.dto';

import { CriarTarefaDTO } from './DTO/criar.dto';
import { EditarTarefaDTO } from './DTO/editar.dto';
import { ExcluirTarefaDTO } from './DTO/excluir.dto';

@Injectable()
export class TarefaService {
  constructor(
    @InjectRepository(TarefaEntity)
    private readonly tarefasRepository: Repository<TarefaEntity>,
    @InjectRepository(TarefaEntity)
    private readonly tarefasRepositoryTree: TreeRepository<TarefaEntity>,
  ) {}

  async buscarTarefas(usuario: usuarioTarefasDTO) {
    const tarefas = await this.tarefasRepositoryTree.findTrees({
      relations: ['usuario'],
    });
    const tarefasUsuario = [];
    if (usuario.idUsuario && usuario.feito === undefined) {
      tarefas.map((tarefa) => {
        if (tarefa.usuario.id === usuario.idUsuario) {
          tarefasUsuario.push(tarefa);
        }
      });
      return tarefasUsuario;
    }
    tarefas.map((tarefa) => {
      if (
        tarefa.usuario.id === usuario.idUsuario &&
        tarefa.feito === usuario.feito
      ) {
        tarefasUsuario.push(tarefa);
      }
    });
    return tarefasUsuario;
  }

  criarTarefa(tarefa: CriarTarefaDTO) {
    if (tarefa.parentId) {
      return this.criarSubTarefa(tarefa);
    }
    return this.criarTarefaRaiz(tarefa);
  }

  async editarTarefa(tarefa: EditarTarefaDTO) {
    const tarefaResponse = this.tarefasRepository.findOne({
      where: { id: tarefa.id },
    });
    if (!tarefaResponse) {
      throw new NotFoundException('Tarefa não encontrada');
    }
    const camposParaAtualizar = {};
    if (tarefa.titulo !== undefined) {
      camposParaAtualizar['titulo'] = tarefa.titulo;
    }
    if (tarefa.descricao !== undefined) {
      camposParaAtualizar['descricao'] = tarefa.descricao;
    }
    if (tarefa.feito !== undefined) {
      camposParaAtualizar['feito'] = tarefa.feito;
    }
    await this.tarefasRepository.update(tarefa.id, camposParaAtualizar);

    return this.tarefasRepository.findOne({ where: { id: tarefa.id } });
  }

  async excluirTarefa(tarefa: ExcluirTarefaDTO) {
    const tarefaExistente = await this.tarefasRepositoryTree.findOne({
      where: { id: tarefa.id, usuario: { id: tarefa.usuarioId } },
    });

    if (!tarefaExistente) {
      throw new NotFoundException('Tarefa não encontrada');
    }
    const tarefaComDescendentes =
      await this.tarefasRepositoryTree.findDescendantsTree(tarefaExistente);
    await this.tarefasRepositoryTree.remove(tarefaComDescendentes);

    return { message: 'Tarefa e suas sub-tarefas foram excluídas com sucesso' };
  }

  private criarSubTarefa(tarefa: CriarTarefaDTO) {
    const criarSubTarefa = this.tarefasRepository.create({
      usuario: { id: tarefa.usuarioId },
      titulo: tarefa.titulo,
      descricao: tarefa.descricao,
      feito: false,
      parent: { id: tarefa.parentId },
    });
    return this.tarefasRepository.save(criarSubTarefa);
  }
  private criarTarefaRaiz(tarefa: CriarTarefaDTO) {
    const criarTarefaRaiz = this.tarefasRepository.create({
      usuario: { id: tarefa.usuarioId },
      titulo: tarefa.titulo,
      descricao: tarefa.descricao,
      feito: false,
    });
    return this.tarefasRepository.save(criarTarefaRaiz);
  }
}
