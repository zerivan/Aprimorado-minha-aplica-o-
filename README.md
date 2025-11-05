# 🚀 Aprimorado Minha Aplicação

Este projeto é uma aplicação **Full Stack** composta por um **backend Node.js/TypeScript (Express + Prisma)** e um **frontend com Vite/TypeScript**, desenvolvida para aprendizado e aprimoramento de boas práticas modernas de desenvolvimento web.

---

## 📦 Estrutura do Projeto

```bash
.
├── backend/
│   ├── prisma/
│   │   └── schema.prisma           # Definição do banco de dados Prisma
│   ├── src/
│   │   └── index.ts                # Ponto de entrada principal do servidor
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── package.json
│   ├── tsconfig.build.json
│   └── tsconfig.json
│
├── front-end/
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
├── render.yaml                     # Configuração de deploy Render.com
├── .github/workflows/              # Automação de CI/CD
│
└── README.md
