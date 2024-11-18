import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { JwtStrategy } from 'src/auth/jwt.config';
import { Repository } from 'typeorm';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity]), AuthModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, JwtStrategy, Repository],
})
export class UsuarioModule {}
