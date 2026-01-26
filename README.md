## NodeJs_API_Learn

O NestJs é um framework para criação de APIs com NodeJs. Por padrão é utilizado o Typescript.

**Conteúdos para apoio:**

- [Criando API com NestJS, Prisma e Postgres](https://www.youtube.com/watch?v=K_3b6SlssMc)
- [Prisma Docs](https://www.prisma.io/docs/guides/nestjs)

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

## Criando integração com o Prisma

O Prisma é uma ORM (Object-Relacional Mapper) de banco de dados para NodeJs e Typescript.

Para instalar digite o seguinte comando:

```bash
    pnpm install prisma @prisma/client
```

Para criar as configurações iniciais do prisma:

```bash
    npx prisma init
```

É necessário criar todas as entidades dentro do arquivo `prisma/schema.prisma`, exemplo:

```prisma
    model User {
      id Int @id @default(autoincrement())
      name String
      email String @unique
      password String
    }
```

A URL do banco de dados é definida no `.env` e adquirida através do arquivo `prisma.config.ts` para realização da aplicação das migrations.

Em seguida, para **criar as migrations** digite o comando:

```bash
    npx prisma migrate dev --name nome_da_migration
```

Com este comando será criada as migrations e aplicadas no banco de dados, assim como, o banco será criado caso ainda não exista.

Em casos de precisar apenas aplicar as migrations, rode o seguinte comando:

```bash
    npx prisma migrate deploy
```

### Configuração do PrismaClient

Baseado na documentação atual do Prisma é necessário que seja definido em qual formato será gerado o client do prisma no arquivo `prisma/schema.prisma` da seguinte forma:

```prisma
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma" // Define a saída do PrismaClient
  moduleFormat = "cjs" // Força o Prisma a gerar um módulo CommonJS em vez de ESM
}
```

É possível gerar o PrismaClient a partir do comando:

```bash
    npx prisma generate
```

O client gerado não é versionado, há uma linha no .gitignore que ignora-o.

### Autenticação e criptografia de senhas

Para realizar a criptografia de senhas e autenticação é necessário instalar as seguintes bibliotecas:

```bash
    pnpm install bcrypt
    pnpm install -D @types/bcrypt
```

Para realizar a autenticação com JWT, instale as seguintes bibliotecas:

```bash
    pnpm install @nestjs/jwt
```
