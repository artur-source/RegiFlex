# RegiFlex - Sistema de Gestão para Clínicas de Psicologia

## Visão Geral
O RegiFlex é um sistema completo de gestão para clínicas de psicologia, desenvolvido para simplificar o registro, acompanhamento e análise de informações de pacientes e sessões. Ele oferece uma interface intuitiva e moderna, com funcionalidades que abrangem desde o cadastro de pacientes e agendamento de sessões até a geração de relatórios e insights baseados em inteligência artificial leve.

## Funcionalidades Principais
*   **Gestão de Pacientes**: Cadastro completo de informações demográficas, contato e histórico.
*   **Gestão de Sessões**: Agendamento, registro de sessões e evolução do paciente.
*   **Autenticação e Autorização**: Sistema de login seguro com diferentes perfis de usuário (Admin, Psicólogo, Recepcionista).
*   **QR Code**: Geração e leitura de QR Codes para acesso rápido a informações de pacientes e sessões.
*   **Inteligência Artificial Leve**: Geração de alertas inteligentes e análise de padrões (ex: cancelamentos) para auxiliar na tomada de decisões.
*   **Relatórios e Dashboard**: Visão geral e detalhada das atividades da clínica.
*   **Arquitetura Modular**: Backend em Flask (Python) e Frontend em React.js, facilitando a manutenção e escalabilidade.
*   **Containerização**: Utilização de Docker e Docker Compose para um ambiente de desenvolvimento e deploy consistente.

## Tecnologias Utilizadas

### Backend (Python/Flask)
*   **Linguagem**: Python 3.11
*   **Framework Web**: Flask
*   **Banco de Dados**: PostgreSQL
*   **ORM**: SQLAlchemy com Flask-SQLAlchemy
*   **Migrações de Banco de Dados**: Flask-Migrate
*   **Autenticação**: Flask-Bcrypt (hashing de senhas), PyJWT (JSON Web Tokens)
*   **CORS**: Flask-CORS
*   **Geração de QR Code**: `qrcode` library
*   **IA Leve**: Pandas e Scikit-learn para análise de dados e padrões.

### Frontend (React.js)
*   **Framework**: React.js
*   **Gerenciador de Pacotes**: pnpm
*   **Build Tool**: Vite
*   **Estilização**: Tailwind CSS
*   **Componentes UI**: Shadcn/ui
*   **Ícones**: Lucide React
*   **Gráficos**: Recharts

### Infraestrutura
*   **Containerização**: Docker, Docker Compose
*   **Servidor Web (Backend)**: Gunicorn (para produção)

## Estrutura do Projeto
```
RegiFlex/
├── backend/ # Aplicação Flask (API RESTful)
│ ├── app/ # Código fonte da aplicação Flask
│ │ ├── api/ # Endpoints da API (autenticação, pacientes, sessões, etc.)
│ │ ├── models/ # Modelos de dados (SQLAlchemy)
│ │ ├── services/ # Lógica de negócio e serviços (IA, etc.)
│ │ ├── __init__.py # Inicialização da aplicação Flask
│ │ └── config.py # Configurações da aplicação
│ ├── migrations/ # Migrações do banco de dados (Flask-Migrate)
│ ├── requirements.txt # Dependências do Python
│ └── wsgi.py # Ponto de entrada WSGI para Gunicorn
├── frontend/ # Aplicação React.js
│ ├── public/ # Arquivos estáticos
│ ├── src/ # Código fonte do React
│ │ ├── assets/ # Imagens e outros assets
│ │ ├── components/ # Componentes reutilizáveis (Login, Layout, etc.)
│ │ ├── contexts/ # Contextos React (AuthContext)
│ │ ├── services/ # Serviços de API para comunicação com o backend
│ │ ├── App.jsx # Componente principal da aplicação
│ │ ├── main.jsx # Ponto de entrada do React
│ │ └── index.css # Estilos globais
│ ├── package.json # Dependências do Node.js/React
│ └── pnpm-lock.yaml # Lockfile do pnpm
├── database/ # Scripts SQL para o banco de dados
│ ├── schema.sql # Definição do esquema do banco
│ └── seed.sql # Dados iniciais (usuários de teste, etc.)
├── scripts/ # Scripts de automação
│ ├── dev.sh # Configuração e inicialização do ambiente de desenvolvimento
│ ├── deploy.sh # Script de deploy (placeholder)
│ └── setup_db.sh # Script de configuração do banco de dados (placeholder)
├── Dockerfile.backend # Dockerfile para o backend
├── Dockerfile.frontend # Dockerfile para o frontend
├── docker-compose.yml # Definição dos serviços Docker
├── .env # Variáveis de ambiente para o Docker Compose
├── .gitignore # Arquivos e diretórios a serem ignorados pelo Git
├── LICENSE # Licença do projeto (MIT)
├── RegiFlex_Plano_Arquitetural.md # Documento de plano arquitetural
└── test_integration.py # Script para testar a integração frontend/backend
```

## Como Executar (Ambiente de Desenvolvimento)
Para configurar e executar o projeto localmente usando Docker e Docker Compose:

1.  **Pré-requisitos**:
    *   Docker e Docker Compose instalados.
    *   Node.js e pnpm (para desenvolvimento frontend fora do Docker, opcional).
    *   Python 3.11 e pip (para desenvolvimento backend fora do Docker, opcional).

2.  **Clone o repositório**:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd RegiFlex
    ```

3.  **Execute o script de desenvolvimento**:
    ```bash
    ./scripts/dev.sh
    ```
    Este script irá instalar as dependências, iniciar o banco de dados PostgreSQL via Docker e configurar o banco de dados.

4.  **Inicie os serviços**:
    Após a execução do `dev.sh`, você pode iniciar os serviços (backend e frontend) usando Docker Compose:
    ```bash
    docker-compose up --build
    ```
    *   O frontend estará disponível em `http://localhost:3000` (ou `http://localhost:5173` se estiver usando o servidor de desenvolvimento Vite diretamente).
    *   O backend da API estará disponível em `http://localhost:5000/api`.

5.  **Acessar a aplicação**:
    Abra seu navegador e acesse `http://localhost:3000` (ou `http://localhost:5173`).

6.  **Credenciais de Teste**:
    *   **Admin**: `admin` / `password`
    *   **Psicólogo**: `psicologo1` / `password`
    *   **Recepcionista**: `recepcionista1` / `password`

## Testes de Integração
Para verificar a comunicação entre o frontend e o backend, você pode executar o script de testes de integração:
```bash
python3.11 test_integration.py
```

## Deploy
O script `scripts/deploy.sh` é um placeholder e deve ser adaptado para o seu ambiente de produção (ex: AWS, Google Cloud, Heroku, etc.).

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

