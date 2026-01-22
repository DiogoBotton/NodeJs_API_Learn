import { BadRequestException, Injectable } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signUp(data: SignUpDTO) {
    const userAlreadyExists = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userAlreadyExists)
      throw new BadRequestException('Usuário com este email já existe.');

    const user = await this.prisma.user.create({ data });

    return user.id;
  }

  async signIn(data: SignInDTO) {
    console.log(data);

    return 'signIn';
  }
}
