## NodeJs_API_Learn

O NestJs é um framework para criação de APIs com NodeJs. Por padrão é utilizado o Typescript.

**Vídeo para apoio:**

- [Criando API com NestJS, Prisma e Postgres](https://www.youtube.com/watch?v=K_3b6SlssMc)

### Passo a passo

#### Instalação da CLI do NestJs

Primeiramente será necessário realizar a instalação da CLI do NestJs, abra o prompt de comando como administrador e digite o seguinte comando:

```bash
    npm i -g @nestjs/cli
```

#### Criação do projeto

Para criar o projeto com NestJs abra o prompt de comando e digite o seguinte:

```bash
    nest new <nome-da-aplicacao>
    nest new auth-api
```

Em seguida escolha o _Package Manager_ (gerenciador de pacotes) que será utilizado (npm, yarn, pnpm...).

#### Módulos

O NestJs é orientado a módulos, portanto, tudo o que for criado para a nossa aplicação será criado com base nessa estrutura. O NestJs sempre tem um módulo raiz, onde será adicionado todos os outros módulos da aplicação (se encontra no diretório `src/app.module.ts`).

**É possível criar um módulo com uma linha de comando:**

```bash
    nest g module <nome-do-modulo>
    nest g module auth
```

**E em seguida a criação do Controller e Service:**

```bash
    nest g controller <nome-do-modulo>
    nest g controller auth
```

```bash
    nest g service <nome-do-modulo>
    nest g service auth
```

Com esses comandos da CLI o NestJs já fará as importações necessárias no módulo principal da aplicação (`src/app.module.ts`).

#### Swagger

Para instalar o swagger ao NestJs basta instalar as seguintes bibliotecas:

```bash
    pnpm install @nestjs/swagger
```

Opcionalmente, você também pode instalar uma biblioteca de validação de campos:

```bash
    pnpm install class-validator class-transformer
```

#### Iniciar a aplicação

Para iniciar a aplicação em modo de desenvolvimento basta digitar no prompt de comando:

```bash
    pnpm start:dev
```

Caso for npm, yarn ou outro gerenciador de pacote, basta apenas trocar o "pnpm" pelo gerenciador escolhido por você.
