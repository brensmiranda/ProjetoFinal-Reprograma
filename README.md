### <div align="center"> **Projeto Final Todas em Tech - { Reprograma }** </div>

<br>

<div align="center">

<img  src="./assets/imag1.gif" width="400" style="border-radius:50%;"/>

</div>

<div align="center">

![Typing SVG](https://s4.gifyu.com/images/Logotipo-para-escolinha-de-volei-verde-amarelo-e-azul.gif)

</div>

>#  Fórmula Mágica da Paz - API de incentivo para crianças e adolescentes.


---

## 📄 Sumário




<div id='introducao'/>

 ## Introdução e objetivo:
 Esse projeto decorreu da minha vontade de mudar a realidade do lugar onde moro. Tendo em que vista que o esporte e lazer são alguns dos direitos previstos no estatuto da criança e do adolescente, qual já foi comprovado que o incentivo reduz em trinta por cento a taxa de criminalidade anualmente. Este projeto tem como objetivo a criação de uma API para estimular e impulsionar crianças periféricas à prática de esportes. A ideia é que os responsáveis pela criança e adolescente se conectem com centros esportivos com programas de apoio governamentais e não governamentais e assim, achando um esporte qual a criança se identifique mais. 
 
 O Projeto é uma API REST que permite que crianças e adolescentes em situação de vulnerabilidade social consigam se cadastrar, informando seus dados e descrevendo informações sobre sua situação escolar, de forma objetiva. É necessário e obrigatório que a criança ou adolescente estejam matriculados em alguma escola pública para serem beneficiados.
A interface é um CRUD integrado com banco de dados, onde é  possível listar os usuários cadastrados, cadastrar novos, atualizar os dados e deletar o usuário. 

<div id='tecnologias'/>

 ## Tecnologias e pacotes utilizados neste projeto

<br>

As seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)

 Pacotes Utilizados

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [nodemon](https://www.npmjs.com/package/nodemon)
<br>

<div id='arquitetura'/>

## Arquitetura MVC

```
PROJETO_FINAL   |
   |-  📁 src
   |    |
   |      |- 📁 database
   |         |- 📑 mongoConfig.js
   |    |- 📁 controllers
   |         |- 📑 sportsController.js
   |         |- 📑 studentsController.js
   |         |- 📑 userController.js
   |    |- 📁 helpers
   |         |- 📑 hashPassword.js
   |     
   |    |  - 📁 middlewares
   |         |- 📑 authentication.js
   |
   |    |  - 📁 models
   |         |- 📑 sportsModel.js
   |         |- 📑 studentsModel.js
   |         |- 📑 studentsUser.js
   |
   |    |  - 📁 routes
   |         |- 📑 sportsRouter.js
   |         |- 📑 studentsRouter.js
   |         |- 📑 usersRouter.js
   | 
   |    |- 📁 test
   |         |- 📑 api.test.js
   |
   |
   |    |- 📑 app.js
   |
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
   
   ```

div id='aplicacao'/>

 ## Utilização da API
 ### 1º Passo - Clonar o respositório
Clone este projeto para a sua máquina local.
```sh
git clone https://github.com/brensmiranda/ProjetoFinal-Reprograma
```

### 2º Passo - Instalar as dependências
Para instalar as dependências do projeto, digite o comando no terminal:
```
npm install
```

### 3º Passo - Configurar o ambiente
Para configurar o ambiente é necessário duplicar o arquivo `.env.example` e renomea-lo somente para `.env`.</br>
Em seguida, altere as informações contidas no arquivo `.env` para as informações correspondentes a sua máquina e e inclua os valores para PORT com a porta, MONGO_URI com a URL do MongoDb e SECRET com o secret.

### 4º Passo - Executar a aplicação
Com a aplicação clonada e as dependências configuradas basta rodar a aplicação com o comando no terminal:
```sh
npm start
```

Para acessar via Heroku, acesse: https://formula-magica-da-paz.herokuapp.com/



<br>
   # ⚙️ **Funcionalidades**

<div id='funcionalidades'/>

- [x] Efetuar cadastro dos dados das crianças, matrícula escolar e responsáveis.
- [x] Efetuar cadastro do usuário para acessar o sistema. 
- [x] Cadastrar o esporte qual a criança tem mais interesse.

 
 ## Métodos POST/GET/PUT/DELETE - *Students*
<div id='rotas'/>

<div align = "center">

|  Método  |                  Rota                       |                          Descrição                             |
| :------: | :-------------------------------------:     |   :-------------------------------------------------------:    |
|  `POST`  | localhost:3335/aluno/cadastrar              |             Cadastra dados dos beneficiados.             |     | 
|  `GET`   | localhost:3335/aluno/listar                 |             Lista de todos os usuários                   |     |
|  `GET`   | localhost:3335/aluno/listar/:id             |             Busca usuário por ID.                        |     |
|  `PUT`   | localhost:3335/aluno/atualizar/:id          |             Busca usuário por número de registro         |     |
| `DELETE` |  localhost:3335/aluno/delete/:id            |             Deletar cadastro de usuário buscando por ID  |     |

</div>
<br>

### Métodos POST/GET/DELETE - *Sports* 
<br>

<div align = "center">

|  Método  |                  Rota                       |                     Descrição                                 |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:     |
|  `POST`  | localhost:3335/esporte/cadastrar            |     |              Cadastrar esporte                 |        |
|  `GET`   | localhost:3335/esporte/todos                |     |    Lista de todos os esportes cadastrados      |        |
| `DELETE` |  localhost:3335/esporte/delete/:id          |     |        Deletar postagem buscando por ID        |        |

</div>
<br>
<div id='melhorias'/>

## Futuras melhorias
- Implementar testes
- Implementação do front-end.
- Colocar o projeto em prática, hahahaha! 

<div id='agradecimentos'/>

## Agradecimentos

Quero agradecer primeiramente à Deus, pois sei que tudo foi planejado e idealizado por ele. Em segundo a minha família e meu namorido por todo apoio e suporte. Em terceiro, a todas as mulheres da On15 que foram essenciais nesses meses agridoces, em especial: Brena, Ana Elisa, Eliza, Geankre, Amanda Dias e Bruna. Aos meus amigos fora da reprograma: Barbara, Mariana, Hennan, Amanda Santos, Rayane e Renato. E claro, a equipe maravilhosa da reprograma, em especial: Jess Facilitadora, Bea Ramerindo, Hannah, Lilith, Paula e principalmente a Ju. Ju, você foi um pilar para mim, obrigada!!!!! Por último e não menos importante, ao meu afilhado por ser o maior motivo de eu tentar ser uma pessoa melhor.


## Sobre a autora:

Brenda Miranda, analista financeiro, estudante de análise e desenvolvimento de sistemas, em transição de carreira para o desenvolvimento back-end.

- [LinkedIn](https://www.linkedin.com/in/brendamguimaraes/)
- [GitHub](https://github.com/brensmiranda/)
