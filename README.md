<h1>Sistema de cadastro de clientes Clínica ACME</h1>

Link do vídeo de apresentação: https://youtu.be/IRhlpiEylY4 <br>
Link do deploy da API: https://acme-clinica.up.railway.app/

<h2>
    Funcionalidades:
</h2>

- Cadastro de usuário;
- Login de usuário;
- Logout de usuário;
- Listagem de pacientes;
- Filtragem de pacientes por nome;
- Cadastro de paciente;
- Edição de paciente;
- Desativação e ativação de paciente;
- Redirecionamento para suporte externo;
- Proteção de rotas no Client: <br>
-- Registro e leitura de dados do localStorage;<br>
-- Navegação interna apenas para usuários autenticados;<br>
- Proteção de rotas no Server:<br>
-- Autenticação com Json web token;<br>
-- Permissão às funcionalidades apenas para usuários autenticados;<br>

<h2>
    Como rodar o projeto:
</h2>

- Faça o fork do repositório;
- Clone para um repositório local;
- Abrindo o repositório local no seu terminal, execute:<br>
-- cd acme-client/<br>
-- npm install<br>
-- npm run dev<br>
- A conexão com a API na nuvem já está feita. Não é preciso alterar.
- Utilize a conta de e-mail "<b>user@user.com</b>" e senha "<b>user12345</b>" ou crie nova conta na página de cadastro.

<h2>
    Tecnologias, ferramentas e bibliotecas utilizadas:
</h2>
<strong>
    Client:
</strong>

- React
- React-router-dom
- Tailwind.css - (responsividade não implementada por se tratar de sistema interno de uma clínica, onde seria utilizado apenas nos computadores da mesma);
- Axios
- Date-fns
- Lodash
- Phosphor-react
- React-input-mask
- React-toastify

<strong>
    Server:
</strong>

- NodeJS
- Express
- PostgreSQL
- Pg e Knex
- Joi
- Jsonwebtoken
- Bcrypt
- Cors
- Dotenv

<strong>Caso decida rodar a API localmente será necessário: </strong>
 - Executar as querys SQL disponibilizadas no arquivo "<b>schema.sql</b>" na raíz da pasta acme-server/ em uma ferramenta de banco de dados que suporte Postgres;
 - Alterar o nome do arquivo "<b>.env.example</b>" para "<b>.env</b>", inserindo os dados de conexão com o seu banco de dados nele;
 - Abrindo o repositório local no seu terminal, execute:<br>
-- cd acme-server/<br>
-- npm install<br>
-- npm run dev<br>
