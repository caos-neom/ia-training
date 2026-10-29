# ia-training
# Sitech

## Desenvolvimento local

Requisitos: Node.js 20 ou superior e npm.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` para acessar a aplicacao. Para validar o projeto:

```bash
npm run lint
npm test
npm run build
```

O SQLite e inicializado automaticamente quando a camada de persistencia e
utilizada. Por padrao, o arquivo fica em `data/sitech.sqlite`; defina
`DATABASE_PATH` para usar outro caminho. O banco cria as tabelas de cursos,
matrizes, materias e noticias na primeira conexao. Os testes usam um banco em
memoria e nao alteram os dados locais.

## Estrutura inicial

- `src/app`: aplicacao Next.js com layout responsivo inicial.
- `src/lib/database.ts`: conexao SQLite e inicializacao do esquema.
- `src/lib/schema.sql`: tabelas, relacionamentos, restricoes e indices.
- `src/lib/database.test.ts`: verificacoes de persistencia com SQLite.

## Entrada da equipe

- Mary, da equipe de engenharia, deseja um site confiável que utilize uma stack popular baseada em TypeScript.
- Mary, da equipe de engenharia, relatou a necessidade de ter uma tela de login para cadastrar notícias. As notícias serão exibidas na página principal do site.
- Mary da equipe de engenharia informou que podemos utilizar por enquanto sqlite.
- Susan, da área de coordenação de curso, tem um link do site antigo no qual contém cursos técnicos e suas matrizes curriculares demonstrando quais são as matérias de cada curso e suas descrições, que serão os mesmos cursos e matrizes para esse novo site.
- Susan relatou que o novo site irá conter apenas os cursos de ensino-técnico do link: https://etecsalesgomes.cps.sp.gov.br/ensino-tecnico/
- Joaquim da área pedagógica, relatou que as matérias de cada curso podem ser encontradas pela internet ou inventadas temporariamente, servindo como mock.
- Steve, do marketing, quer um site atraente que funcione bem em navegadores modernos e seja compatível com dispositivos mobiles.
