import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // Isto serve para realizar a importação das variáveis de ambiente (.env)
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Importação dos módulos
    AuthModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
