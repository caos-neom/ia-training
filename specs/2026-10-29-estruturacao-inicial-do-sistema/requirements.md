# Requisitos

## Recurso

Estruturacao inicial do sistema, correspondente a Fase 01 do roadmap.

## Escopo

- Preparar a base da aplicacao web com Next.js e TypeScript.
- Configurar persistencia inicial em SQLite.
- Preparar a estrutura de dados para as etapas futuras de catalogo e noticias.
- Permitir instalacao, execucao local e build documentados.

## Decisoes

- Usar Next.js e TypeScript, conforme a stack definida.
- Usar SQLite como banco inicial.
- Definir bibliotecas complementares durante a implementacao, escolhendo a integracao minima adequada.
- Manter a camada de persistencia substituivel caso SQLite deixe de atender a implantacao.

## Fora do escopo

- Implementar as paginas completas do catalogo e das matrizes curriculares.
- Implementar login ou administracao de noticias.
- Cadastrar o conteudo definitivo dos cursos.
- Preparar a publicacao em producao.

## Contexto

- A missao e orientar futuros alunos e a comunidade escolar com informacoes sobre cursos, matrizes e noticias. Referencia: [mission.md](../mission.md).
- A stack inicial definida e Next.js, TypeScript e SQLite. Referencia: [tech-stack.md](../tech-stack.md).
- A Fase 01 do roadmap prepara a aplicacao e a estrutura de dados. Referencia: [roadmap.md](../roadmap.md).