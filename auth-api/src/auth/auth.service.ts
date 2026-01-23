import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signUp(data: SignUpDTO) {
    const userAlreadyExists = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userAlreadyExists)
      throw new BadRequestException('Usuário com este email já existe.');

    const hashedPassword = await hash(data.password, 10);

    const user = await this.prisma.user.create({
      data: {
        ...data, // Passa tudo enviado pela requisição
        password: hashedPassword, // Sobrescreve senha com hash
      },
    });

    return user.id;
  }

  async signIn(data: SignInDTO) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) throw new NotFoundException('Email ou senha inválidos.');

    if (!(await compare(data.password, user.password)))
      throw new NotFoundException('Email ou senha inválidos.');

    const accessToken = await this.jwtService.signAsync({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    return { accessToken };
  }
}
