# To-do list
Este é um projeto em React de uma aplicação para listas de tarefas, fazendo uso de todas as operações de CRUD.

## Dependências
### Node
Node é uma plataforma de execução de JavaScript server-side que permite executar códigos JavaScript fora do navegador, permitindo o desenvolvimento de aplicações Web escaláveis e de alto desempenho.

Para instalar o Node em sua máquina, acesse o site oficial [clicando aqui](https://nodejs.org/en/download/package-manager).

### Express
Express é um Framework para Node.js que facilita a criação de aplicações web, fornecendo uma estrutura para lidar com requisições e respostas HTTP de forma flexível e personalizável.

### Axios
Axios é uma biblioteca de requisições HTTP para Node.js e navegadores que permite fazer requisições assíncronas de forma fácil e eficiente. Ela oferece uma interface intuitiva para fazer requisições HTTP, suporta promises, interceptors e cancelamento de requisições.

> O Express **cria** as APIs e o servidor no backend, e o Axios **consome** essas APIs criadas pelo Express no frontend.

### JWT (jsonwebtoken)
JWT é uma biblioteca de autenticação e autorização que utiliza tokens assinados digitalmente para garantir a segurança de requisições HTTP.

### Bcrypt
Bcrypt é uma biblioteca de criptografia de senhas para Node.js que utiliza uma função de hash de senha segura para armazenar senhas de usuário de forma segura no banco de dados.

### FS
FS é um módulo do Node.js para interagir com o sistema de arquivos, permitindo leitura, escrita e manipulação de arquivos e diretórios.

### Nodemon
Nodemon é uma ferramenta que reinicia automaticamente o servidor Node.js após alterações nos arquivos do projeto.

### Cors
Cors é uma biblioteca que permite o compartilhamento de recursos entre diferentes origens, habilitando o acesso a APIs de outros domínios.

### Vite
Vite é uma ferramenta de construção de aplicações Web que utiliza ES Modules nativos do navegador para fornecer uma experiência de desenvolvimento rápida e eficiente.

**Não é necessário instalar o Vite novamente no projeto, uma vez que todas as suas dependências já estão inclusas no repositório.**

### Phosphor Icons
Phosphor Icons é uma biblioteca de ícones open-source que fornece uma ampla variedade de ícones personalizáveis e escaláveis para uso em aplicações web e móveis.

## Instalando o projeto
**Para clonar e executar o projeto localmente é necessário ter, no mínimo, o Node já instalado na sua máquina.**

Após clonar o repositório, certifique-se de que está dentro da pasta raiz do projeto (`projeto-frontend`), e então:
1. Instale os pacotes do **Node** com `npm install` ou `npm i`,
2. Instale o **React Router** com `npm i react-router-dom`,
3. Instale o **Axios** com `npm i axios`,
4. Instale o **Phosphor Icons** com `npm i phosphor-react`,
5. Entre na pasta `backend` com `cd backend`,
6. Instale o **Express** com `npm i express`,
7. Instale o **JWT** com `npm i jsonwebtoken`,
8. Instale o **Bcrypt** com `npm i bcrypt`,
9. Instale o **Cors** com `npm i cors`,
10. Instale o **FS** com `npm i fs`,
11. Instale o **Nodemon** com `npm i nodemon`,
12. Saia da pasta `backend` com `cd ..`,
13. E por fim, execute o projeto com `npm run dev`.