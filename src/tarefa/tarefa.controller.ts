import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TarefaService } from './tarefa.service';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { usuarioTarefasDTO } from 'src/usuario/DTO/usuario-tarefas.dto';

import { CriarTarefaDTO } from './DTO/criar.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EditarTarefaDTO } from './DTO/editar.dto';
import { ExcluirTarefaDTO } from './DTO/excluir.dto';

/**
 * Controller responsável por gerenciar as tarefas.
 * Utiliza o JwtAuthGuard para proteger as rotas.
 */

@UseGuards(JwtAuthGuard)
@ApiTags('tarefas')
@Controller('tarefas')
export class TarefaController {
  constructor(private tarefaService: TarefaService) {}

  /**
   * Busca tarefas do usuário.
   * @param usuario - Dados do usuário para buscar tarefas.
   * @param feito - Dados do usuário para buscar tarefas que estão ou não feitas.
   * @returns Lista de tarefas do usuário.
   */ @Get('buscar')
  @ApiOperation({ summary: 'Busca tarefas do usuário' })
  @ApiResponse({
    status: 200,
    description: 'Lista de tarefas do usuário retornada com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  buscartarefa(@Body() usuario: usuarioTarefasDTO) {
    return this.tarefaService.buscarTarefas(usuario);
  }

  /**
   * Cria uma nova tarefa.
   * @param tarefa - Dados da tarefa a ser criada.
   * esses todos são obrigatórios, exceto parentId.
   * @returns A tarefa criada.
   */
  @Post('criar')
  @ApiOperation({ summary: 'Criação de tarefa' })
  @ApiResponse({ status: 201, description: 'Tarefa criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  criartarefa(@Body() tarefa: CriarTarefaDTO) {
    return this.tarefaService.criarTarefa(tarefa);
  }

  /**
   * Edita uma tarefa existente.
   * @param id - Dados da tarefa a ser editada.
   * @param usuarioId - Dados da tarefa a ser editada.
   * @param titulo - Dados da tarefa a ser editada.
   * @param descricao - Dados da tarefa a ser editada.
   * esses parêmetros são opcionais, os únicos que são obrigatórios são id e usuarioId.
   * @returns A tarefa editada.
   */
  @Put('editar')
  @ApiOperation({ summary: 'Edição de tarefa' })
  @ApiResponse({ status: 200, description: 'Tarefa editada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  editartarefa(@Body() tarefa: EditarTarefaDTO) {
    return this.tarefaService.editarTarefa(tarefa);
  }

  /**
   * Exclui uma tarefa.
   * @param id - Dados da tarefa a ser excluída.
   * @param usuarioId - Dados da tarefa a ser excluída.
   * @returns A tarefa excluída.
   */
  @Delete('excluir')
  @ApiOperation({ summary: 'Exclusão de tarefa' })
  @ApiResponse({ status: 200, description: 'Tarefa excluída com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  excluirtarefa(@Body() tarefa: ExcluirTarefaDTO) {
    return this.tarefaService.excluirTarefa(tarefa);
  }
}
