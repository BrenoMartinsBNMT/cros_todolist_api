import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtStrategy } from 'src/config/jwt.config';
import { JwtModule } from '@nestjs/jwt';
import { configDotenv } from 'dotenv';

@Module({
  imports: [
    JwtModule.register({
      secret: configDotenv().parsed.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
})
export class TodoModule {}
