# Tutorial de Instalação do RegiFlex (Real)

Este guia detalha como configurar e executar o projeto RegiFlex completo (versão real com backend Flask, frontend React e banco de dados PostgreSQL) no Visual Studio Code.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

*   **Git** (já instalado no seu computador)
*   **Docker e Docker Compose** (recomendado para facilitar a configuração)
*   **Node.js** (versão 16 ou superior)
*   **Python** (versão 3.8 ou superior)
*   **PostgreSQL** (se não usar Docker)
*   **Visual Studio Code**

## 🚀 Configuração do Ambiente

### 1. Extensões Recomendadas do VSCode

Instale as seguintes extensões no VSCode para uma melhor experiência de desenvolvimento:

*   **Python** (Microsoft)
*   **ES7+ React/Redux/React-Native snippets**
*   **Prettier - Code formatter**
*   **ESLint**
*   **Docker** (Microsoft)
*   **PostgreSQL** (Chris Kolkman)
*   **GitLens**

### 2. Clonando o Projeto

Abra o terminal do VSCode e clone o repositório do RegiFlex:

```bash
git clone https://github.com/artur-source/RegiFlex.git
cd RegiFlex
code .
```

## 🐳 Execução com Docker Compose (Recomendado)

Esta é a forma mais fácil e recomendada de rodar o projeto, pois configura automaticamente o backend, frontend e banco de dados.

### 1. Verificar Arquivos Docker

Certifique-se de que os seguintes arquivos estão presentes na raiz do projeto:

*   `docker-compose.yml`
*   `Dockerfile.backend`
*   `Dockerfile.frontend`

### 2. Executar o Projeto

No terminal integrado do VSCode (Ctrl+\` ou `Cmd+\`):

```bash
docker-compose up --build
```

Este comando irá:

*   Construir e iniciar o banco de dados PostgreSQL
*   Construir e iniciar o backend Flask
*   Construir e iniciar o frontend React
*   Configurar a rede entre os serviços

### 3. Acessar a Aplicação

Após a inicialização dos serviços (pode levar alguns minutos na primeira vez):

*   **Frontend:** `http://localhost:3000`
*   **Backend API:** `http://localhost:5000`
*   **Banco de dados:** `localhost:5432`

## 🔧 Execução Separada (Alternativa)

Se preferir rodar os serviços separadamente, siga os passos abaixo:

### 1. Configurar o Banco de Dados (PostgreSQL)

Se você não estiver usando Docker, instale e configure o PostgreSQL manualmente:

```bash
# Instalar PostgreSQL (ex: Ubuntu/Debian)
sudo apt update
sudo apt install postgresql postgresql-contrib

# Criar banco de dados e usuário
sudo -u postgres createdb regiflex_db
sudo -u postgres createuser regiflex_user
sudo -u postgres psql -c "ALTER USER regiflex_user PASSWORD 'sua_senha';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE regiflex_db TO regiflex_user;"
```

### 2. Configurar o Backend (Flask)

1.  **Navegar para a pasta do backend:**
    ```bash
    cd backend
    ```
2.  **Criar e ativar ambiente virtual:**
    ```bash
    python -m venv venv
    # Linux/Mac:
    source venv/bin/activate
    # Windows:
    .\venv\Scripts\activate
    ```
3.  **Instalar dependências:**
    ```bash
    pip install -r requirements.txt
    ```
4.  **Configurar variáveis de ambiente:**
    ```bash
    cp .env.example .env
    ```
    Edite o arquivo `.env` com suas configurações, especialmente `DATABASE_URL`, `SECRET_KEY` e `JWT_SECRET_KEY`.
5.  **Executar migrações do banco de dados:**
    ```bash
    flask db upgrade
    ```
6.  **Iniciar o servidor:**
    ```bash
    flask run
    ```

### 3. Configurar o Frontend (React)

1.  **Em um novo terminal, navegar para a pasta do frontend:**
    ```bash
    cd frontend
    ```
2.  **Instalar dependências:**
    ```bash
    npm install
    # ou pnpm install, se estiver usando pnpm
    ```
3.  **Configurar variáveis de ambiente:**
    ```bash
    cp .env.example .env
    ```
    Edite o arquivo `.env` com `REACT_APP_API_URL=http://localhost:5000`.
4.  **Iniciar o servidor de desenvolvimento:**
    ```bash
    npm start
    # ou pnpm dev, se estiver usando pnpm
    ```

## 🧪 Credenciais de Teste

Após executar as migrações e iniciar os serviços, você pode usar estas credenciais para teste:

*   **Email:** `admin@regiflex.com`
*   **Senha:** `admin123`

## 🚨 Solução de Problemas

### Erro de Conexão com Banco de Dados

1.  Verifique se o PostgreSQL está rodando.
2.  Confirme as credenciais no arquivo `.env`.
3.  Teste a conexão diretamente: `psql -h localhost -U regiflex_user -d regiflex_db`

### Erro de Porta em Uso

Verifique qual processo está usando a porta e, se necessário, encerre-o:

```bash
lsof -i :5000 # Backend
lsof -i :3000 # Frontend
kill -9 <PID_do_processo>
```

### Problemas com Dependências

**Backend (Python):**

```bash
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall
```

**Frontend (Node.js/React):**

```bash
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Suporte

Se encontrar problemas durante a configuração, verifique:

1.  Se todos os pré-requisitos estão instalados.
2.  Se as portas necessárias estão livres.
3.  Se as variáveis de ambiente estão configuradas corretamente.
4.  Se o banco de dados está acessível.

Para mais ajuda, consulte os logs dos serviços ou a documentação específica de cada tecnologia.

