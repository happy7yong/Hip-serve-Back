import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { HashService } from '../hash/hash.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'your-secret-key', // 여기에 실제로 안전한 비밀키를 사용하세요
      signOptions: { expiresIn: '1h' }, // 토큰의 유효기간 설정
    }),],
  providers: [UsersService, HashService],
  controllers: [UsersController],
})
export class UsersModule {}
