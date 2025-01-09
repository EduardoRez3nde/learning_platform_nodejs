# configurar projeto:
### 
#### **npm init -y**
#### **npm install -D typescript**
#### **npm install -D @types/node**
#### **npx tsc --init**
#### **npx tsc** - compilar
#### **node dist/index.js** - Executar
#### **criar pasta src**
#### **criar .gitignore**

# Configurar sequelize:
#### Criar um arquivo **.sequelizerc** na raiz do projeto. criar o caminho para as seguintes pastas:
    - "config"
    - "models-path"
    - "seeders-path"
    - "migrations-path"
rodar o comando para inicializar as pastas:
    **npx sequelize-cli init**
**OBS: utilizar resolve, module.exports.**

### config/ :
- #### criar um arquivo com as configurações do banco de dados usando o .env: 
    username, password, database, host, port, dialect. 

### npx sequelize-cli db:create - criar o banco

### src/database:
- #### criar um arquivo index.ts que terá uma instância do sequelize que recebe como argumento: database, user, password. E um objeto: host, dialect, define: underscore: true.

**OBS:** adicionar sequelize.authenticate() no server.listen para verificar se houve sucesso na conexão.


# Backend

## Endpoints:

## src/services:
```javascript
findAllPaginated:
1- função assincrona que recebe como argumentos (page e PerPage).

2- calcular quantos registros devem ser "pulados" para começar a busca na pagina correta. atribuir a variavel offset.

3- utilizando o model, chame o metodo findAndCountAll que rebe como parametro um objeto com:
    - attributes: passando quais colunas devem ser retornadas
    - order: ordena os resultados de acordo os argumentos passados.
    - limit: Define o número máximo de registros a retornar (perPage).
    - offer: define o numero de registro a serem ignorados "pulados" na busca.

4- retorna um objeto com:
    - As categorias encontradas.
    - o numero da pagina atual.
    - numero de itens por pagina.
    - total de registros


findById:
1- funçao assincrona que recebe como argumento um id do tipo string.

2- usa a função do modelo findByPk passando como argumento o id e um objeto que contem:
    - attributes: retorna colunas especificadas
    - include: contem a associação e uma lista dos atributos da associação

3- Retornar a categorias e os cursos associados
```

## src/controllers:
```javascript
findAllPaginated: 
1- função assincrona que recebe como parâmetro (req e res).

2- chama o metodo getPaginationParams passando como 
argumento req.query e atribui a variaveis page e perPage

3- usando tratamento de exceção, buscar todas categorias utilizando o metodo de serviço findAllPaginated, passando como argumento: page e perPage. retorne um json com todas categorias. -await

4- se ocorrer um erro, retorne o status 400 (bad request) e um json passando como argumento um objeto com a mensagem de erro.


findById:
1- Função assincrona que recebe como argumento (req e res).

2- extrair o id do parametro de requisição (req.params)

3- Usando tratamento de exceção, utilizando o metodo de serviço findById, passando como argumento o id retornado da requisição. -await

4- retorne um status 201 e o json com a categoria retornada.

5- se ocorrer um erro, retorne o status 400 (bad request) e um json passando como argumento um objeto com a mensagem de erro.

**exporte o objeto ou classe
```

