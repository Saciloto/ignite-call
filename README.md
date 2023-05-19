<h1 align="center">
  Ignite Call
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executando">Executando</a>&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

## 🚀 Tecnologias

Projeto desenvolvido com as seguintes tecnologias:

- React
- Next.js
- Typescript
- Node.js
- Prisma ORM
- Google APIs
- Docker
- Design System
- Stitches (CSS-in-JS)
- Zod

## 🔖 Projeto

O projeto Ignite Call foi construído seguindo a trilha ignite da #rocketseat, o objetivo é possiblitar agendamentos de compromissos a partir de um calendário com integração com o Google Agenda. O usuário pode se cadastrar no app a partir de sua conta do Google e indicar seus dias da semana e horários em que estará disponível para agendar compromissos. Todo agendamento cadastrado na aplicação tem integração com o Google Agenda, o que possibilita ao usuário verificar seus novos compromissos direto na plataforma do Google.

O Ignite Call foi construído inteiramente com Next.js. A comunicação com o banco de dados foi feita com o uso da ferramenta PrismaORM e utilizado um banco de dados MySQL em um container Docker. O banco de dados de produção foi publicado a partir do serviço da plataforma PlanetScale e foi utilizado o serviço da Vercel para hospedagem da aplicação.

## 💻 Executando

O projeto foi criado utilizando o ambiente de desenvolvimento `Next.js` ([documentação](https://nextjs.org/docs)).

Para rodar a aplicação será necessária a conexão com um banco de dados local ou container Docker e integrado com a ferramenta Prisma ([documentação](https://www.prisma.io/docs)). Além da criação do projeto no Google Cloud Platform ([documentação](https://cloud.google.com/docs/authentication)) para coletar as credenciais necessárias para login e integração com a plataforma Google. 

```sh
  # Clone this project
$ git clone git@github.com:Saciloto/ignite-call.git
# Install dependencies
$ npm install
# Run the project
$ npm run dev
# Open http://localhost:3000 with your browser to see the result
```
Projeto finalizado -> [Ignite Call](https://ignite-call-puce-six.vercel.app/)🚀 <-
