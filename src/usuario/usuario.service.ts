import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import {
  criarSenhaCriptografada,
  verificarSenhaUsuario,
} from 'src/config/hash.config';
import { UsuarioEntity } from 'src/entity/usuario.entity';

import { Repository } from 'typeorm';
import { usuarioDTO } from './DTO/usuario.dto';
import { usuarioLoginDTO } from './DTO/usuario-login.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly userRepository: Repository<UsuarioEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async loginUser(usuario: usuarioLoginDTO) {
    try {
      const usuarioEncontrado = await this.userRepository.findOne({
        where: { email: usuario.email },
      });
      const senhaCorreta = await verificarSenhaUsuario(
        usuario.senha,
        usuarioEncontrado.senha,
      );

      if (usuarioEncontrado && senhaCorreta) {
        const token = this.jwtService.sign(
          {
            email: usuario.email,
          },
          { expiresIn: '24h' },
        );

        return { token: token, id: usuarioEncontrado.id };
      }
      return { message: 'Email ou senha incorretos' };
    } catch (error) {
      throw new BadRequestException('Erro ao logar', error);
    }
  }

  async criarUser(criarUsuario: usuarioDTO) {
    try {
      const senhaCriptografada = await criarSenhaCriptografada(
        criarUsuario.senha,
      );
      criarUsuario.senha = senhaCriptografada;

      const salvarUsuario = this.userRepository.create(criarUsuario);
      await this.userRepository.save(salvarUsuario);

      return { message: 'Usuário criado com sucesso' };
    } catch (error) {
      throw new BadRequestException('Erro ao criar usuário', error.message);
    }
  }
}
