# techchallenge-fase-2
Repo dedicado para o desenvolvimento do Tech Challenge FIAP fase 2

# Estrutura da Pasta `src` - TechChallenge Fase 2

A pasta `src` contém todo o código-fonte do projeto `techchallenge-fase-2`. Esta documentação oferece uma visão geral de sua estrutura e componentes principais.

## Estrutura de Diretórios

A pasta `src` é organizada da seguinte forma:

- `controllers/`: Contém os controladores que gerenciam a lógica de entrada e saída das requisições HTTP.
- `models/`: Define os modelos de dados, geralmente correspondendo às tabelas no banco de dados.
- `routes/`: Armazena as definições de rotas da aplicação, associando endpoints HTTP a controladores específicos.
- `services/`: Inclui serviços ou lógicas de negócios que são usados pelos controladores.
- `utils/`: Contém funções utilitárias e helpers que podem ser usados em várias partes do projeto.
- `index.js`: O ponto de entrada da aplicação. Configura o servidor, middleware e rotas.

## Componentes Principais

    ### Controladores

        # Roteamento de Livros

        O arquivo `book.js` define as rotas para operações CRUD (Criar, Ler, Atualizar, Deletar) relacionadas a livros em uma aplicação Express. Utiliza funções de serviço importadas para interagir com a base de dados ou outra forma de persistência de dados.

        ## Endpoints

        ### GET `/`

        Retorna uma lista de todos os livros. Não requer parâmetros.

        - **Resposta**: Um array de objetos livro.

        ### GET `/:bookid`

        Retorno o registro do ID informado na URL

        - **Resposta**: Um objeto livro.

        ### POST `/`

        Cria um novo livro com os dados fornecidos no corpo da requisição.

        - **Corpo da Requisição**: Um objeto contendo os detalhes do livro.
        - **Resposta**: O objeto do livro criado.
        - **Status 201**: Criado com sucesso.
        - **Status 400**: Erro na criação do livro.

        ### DELETE `/:bookId`

        Deleta um livro baseado no `bookId` fornecido como parâmetro na URL.

        - **Parâmetro URL**: `bookId` (ID do livro a ser deletado).
        - **Resposta**: Vazia.
        - **Ação**: Deleta o livro correspondente ao `bookId`.

        ### PUT `/:bookId`

        Atualiza um livro existente com os dados fornecidos no corpo da requisição, baseado no `bookId`.

        - **Parâmetro URL**: `bookId` (ID do livro a ser atualizado).
        - **Corpo da Requisição**: Um objeto contendo os detalhes do livro a ser atualizado.
        - **Resposta**: Vazia.
        - **Ação**: Atualiza o livro correspondente ao `bookId`.

        ## Uso

        Para utilizar essas rotas, inclua o roteador exportado no seu aplicativo Express principal. Isso conectará os endpoints definidos a sua aplicação, permitindo a manipulação de dados de livros.

### Modelos

    # Modelo de Livro

        O arquivo `book.js` define o modelo `Book` usando Mongoose, uma biblioteca ODM (Object Data Modeling) para MongoDB e Node.js. Este modelo é utilizado para interagir com a coleção de livros no banco de dados MongoDB.

        ## Estrutura do Modelo

        O modelo `Book` é composto pelos seguintes campos:

        - `titulo`: String, obrigatório. Representa o título do livro.
        - `autor`: String, obrigatório. Indica o autor do livro.
        - `editora`: String, obrigatório. Refere-se à editora do livro.

        ## Schema

        O `BookSchema` é criado utilizando o método `Schema` do Mongoose, que define a estrutura do documento na coleção de livros, incluindo os tipos de dados e a obrigatoriedade dos campos.

        ## Exportação do Modelo

        O modelo é exportado usando a sintaxe `export default`. Se um modelo `Book` já foi criado, ele será reutilizado; caso contrário, um novo modelo será criado e associado à coleção 'Book' no banco de dados.

        ## Uso

        Este modelo pode ser importado e utilizado em outras partes da aplicação para realizar operações CRUD (Criar, Ler, Atualizar, Deletar) na coleção de livros do banco de dados.

### Rotas

As rotas definem os endpoints disponíveis na API e associam esses endpoints a controladores específicos.

### Serviços

    # Controladores de Livros

        O arquivo `book.js` contém os controladores para operações CRUD em livros, utilizando o modelo `Book`. Cada função é assíncrona e interage com o banco de dados através do Mongoose.

        ## Funções Disponíveis

        ### `listBook`

        - **Descrição**: Lista todos os livros disponíveis no banco de dados.
        - **Retorno**: Um array de objetos `Book`.

        ### `createBook`

        - **Descrição**: Cria um novo livro com os dados fornecidos.
        - **Parâmetros**:
        - `book`: Um objeto contendo os dados do livro a ser criado.
        - **Retorno**: O objeto `Book` criado.

        ### `deleteBook`

        - **Descrição**: Deleta um livro baseado no ID fornecido.
        - **Parâmetros**:
        - `id`: O ID do livro a ser deletado.
        - **Retorno**: Não retorna nenhum conteúdo.

        ### `updateBook`

        - **Descrição**: Atualiza os dados de um livro existente com base no ID e no novo corpo fornecido.
        - **Parâmetros**:
        - `id`: O ID do livro a ser atualizado.
        - `newBody`: Um objeto contendo os novos dados do livro.
        - **Retorno**: Não retorna nenhum conteúdo.

        ## Uso

        Para utilizar esses controladores, eles devem ser importados e associados a rotas específicas em um servidor Express. Isso permite que as operações CRUD sejam realizadas através de requisições HTTP.

### Utilitários

    # Conexão com o Banco de Dados

        O arquivo `database.js` é responsável por estabelecer a conexão com o banco de dados MongoDB utilizando o Mongoose, uma biblioteca ODM (Object Data Modeling) para MongoDB e Node.js.

        ## Detalhes do Arquivo

        ### Importação do Mongoose

        O arquivo começa importando o Mongoose, que é utilizado para interagir com o MongoDB de uma maneira mais estruturada e baseada em modelos.

        ### URI de Conexão

        A `uri` contém as informações necessárias para conectar ao cluster MongoDB na nuvem, incluindo o nome de usuário, senha e o endereço do cluster. **Importante**: Por questões de segurança, é recomendado não expor suas credenciais diretamente no código. Considere usar variáveis de ambiente para isso.

        ### Função de Conexão

        A função `databaseConnection` é uma função assíncrona que verifica se uma conexão global com o banco de dados já existe. Se não, ela configura o Mongoose para não usar `strictQuery` (permitindo consultas mais flexíveis) e estabelece uma nova conexão com o banco de dados usando a `uri` fornecida. Essa abordagem ajuda a evitar múltiplas conexões ao banco de dados em um ambiente com várias requisições.

        ### Exportação da Função

        A função `databaseConnection` é exportada para ser utilizada em outras partes da aplicação, garantindo que a conexão com o banco de dados seja estabelecida antes de qualquer operação de banco de dados ser realizada.

        ## Uso

        Para utilizar essa conexão em sua aplicação, você deve importar e executar `databaseConnection` no início do seu arquivo principal do servidor (geralmente `index.js` ou `app.js`). Isso garante que a conexão com o banco de dados esteja ativa antes de qualquer operação de banco de dados ser solicitada.

## Iniciando a Aplicação

    Para iniciar a aplicação, navegue até a raiz do projeto e execute:

    ```bash
    npm start

    # Configuração do Servidor Express

        O arquivo `index.js` é responsável por configurar e iniciar o servidor Express da aplicação. Abaixo estão os detalhes de cada parte do arquivo:

        ## Importações

        - `express`: Importa o framework Express, utilizado para criar o servidor HTTP e definir rotas.
        - `bookController`: Importa o controlador de livros, que contém as rotas e lógicas para operações CRUD em livros.
        - `bodyParser`: Importa o middleware `body-parser`, usado para analisar corpos de requisições JSON.

        ## Inicialização do Express

        - `const app = express()`: Cria uma instância do servidor Express.

        ## Configuração do Middleware

        - `app.use(bodyParser.json())`: Configura o `body-parser` como middleware no Express, permitindo que o servidor trate corpos de requisições JSON.

        ## Definição de Rotas

        - `app.use('/book', bookController)`: Define um prefixo de rota `/book` para todas as rotas definidas no `bookController`. Isso significa que todas as rotas dentro de `bookController` serão acessadas com `/book` como parte do caminho da URL.

        ## Inicialização do Servidor

        - `app.listen(PORT, () => {})`: Inicia o servidor para escutar na porta especificada pela variável `PORT` (3000 neste caso). Quando o servidor estiver online, uma mensagem é exibida no console indicando que o aplicativo está rodando e em qual porta.

        ## Uso

        Para iniciar o servidor, execute o comando `node index.js` no terminal. Isso colocará o aplicativo online, permitindo que ele receba requisições HTTP na porta 3000.