import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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
    return await this.authService.signUp(data);
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
    return await this.authService.signIn(data);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('jwt')
  @ApiOperation({
    summary: 'Retorna o usuário logado.',
    description: 'Retorna o usuário logado.',
  })
  @ApiResponse({
    status: 500,
    description: 'Ocorreu um erro interno.',
    type: String,
  })
  me(@Request() request) {
    return request.user;
  }
}
