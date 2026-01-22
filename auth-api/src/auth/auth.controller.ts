import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @Post('signup')
  @ApiOperation({
    summary: 'Realiza o cadastro de um usuário.',
    description: 'Realiza o cadastro de um usuário.',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário cadastrado com sucesso.',
    type: String,
  })
  @ApiResponse({
    status: 500,
    description: 'Ocorreu um erro interno.',
    type: String,
  })
  async signUp(@Body() data: SignUpDTO) {
    console.log(data);

    return data;
  }

  @Post('signin')
  @ApiOperation({
    summary: 'Realiza o login.',
    description: 'Realiza o login.',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário logado com sucesso.',
    type: String,
  })
  @ApiResponse({
    status: 500,
    description: 'Ocorreu um erro interno.',
    type: String,
  })
  async signIn(@Body() data: SignInDTO) {
    console.log(data);

    return data;
  }
}
