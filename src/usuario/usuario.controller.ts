import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';

import { UsuarioService } from './usuario.service';
import { usuarioLoginDTO } from './DTO/usuario-login.dto';
import { usuarioDTO } from './DTO/usuario.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

/**
 * Controlador para lidar com operações relacionadas ao usuário.
 */
@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {
  /**
   * Cria uma instância de UsuarioController.
   * @param usuarioService - O serviço usado para lidar com operações de usuário.
   */
  constructor(private readonly usuarioService: UsuarioService) {}

  /**
   * Lida com o login do usuário.
   * @param usuario - O objeto de transferência de dados de login do usuário.
   * @returns O resultado da operação de login.
   */
  @Post('login')
  @ApiOperation({ summary: 'Login de usuário' })
  @ApiResponse({ status: 200, description: 'Login bem-sucedido.' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas.' })
  loginUser(@Body(new ValidationPipe()) usuario: usuarioLoginDTO) {
    return this.usuarioService.loginUser(usuario);
  }

  /**
   * Lida com a criação de usuário.
   * @param usuario - O objeto de transferência de dados do usuário.
   * @returns O resultado da operação de criação de usuário.
   */
  @Post('criar')
  @ApiOperation({ summary: 'Criação de usuário' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  criarUser(@Body(new ValidationPipe()) usuario: usuarioDTO) {
    return this.usuarioService.criarUser(usuario);
  }
}
