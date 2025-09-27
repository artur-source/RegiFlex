# RegiFlex - Sistema de Gestão para Clínicas de Psicologia

![RegiFlex Logo](frontend/src/assets/regiflex-logo.jpg)

## 📋 Sobre o Projeto

O RegiFlex é um sistema completo de gestão para clínicas de psicologia, desenvolvido para simplificar o registro, acompanhamento e análise de informações de pacientes e sessões. O projeto oferece uma interface moderna, segura e intuitiva, com funcionalidades abrangentes para profissionais da área de psicologia.

## 👥 Equipe de Desenvolvimento

Este projeto foi desenvolvido por estudantes de **Análise e Desenvolvimento de Sistemas**:

- **Alexandre Fernandes da Silva** - RGM: 2581191
- **Artur Alves Santos** - RGM: 2417606
- **Carlos Eduardo Fernandes de Freitas** - RGM: 2417694
- **Guilherme Almeida Rocha** - RGM: 2417704
- **Julio Henrique Lins da Silva** - RGM: 2417382
- **Nicollas Andrey** - RGM: 2417423

### 📖 História do Projeto

O projeto RegiFlex nasceu de uma atividade proposta pelo **professor Thiago**, que desafiou nossa turma a criar algo que nunca existiu. Desde então, o RegiFlex se tornou o foco de diversos projetos de extensão do nosso grupo. Todos trabalharam incansavelmente para fazer essa ideia funcionar e se tornar uma realidade.

## ✨ Funcionalidades Principais

### 🏥 Gestão de Pacientes
- Cadastro completo de informações demográficas, contato e histórico médico
- Geração automática de QR Codes para cada paciente
- Sistema de busca e filtros avançados

### 📅 Agendamento de Sessões
- Sistema completo para agendar, registrar e acompanhar sessões terapêuticas
- Controle de status das sessões (agendada, realizada, cancelada, falta)
- Registro de evolução e notas das sessões

### 🔒 Autenticação e Segurança
- Sistema de login seguro com diferentes perfis de usuário:
  - **Admin**: Acesso total ao sistema
  - **Psicólogo**: Gestão de pacientes e sessões
  - **Recepcionista**: Agendamentos e cadastros básicos
- Criptografia de senhas com bcrypt
- Autenticação JWT para APIs

### 📊 Dashboard e Relatórios
- Painel de controle com visão geral das atividades da clínica
- Gráficos e indicadores de desempenho
- Estatísticas em tempo real

### 🤖 IA Leve
- Análise inteligente de padrões
- Geração de alertas para auxiliar na tomada de decisões
- Identificação de tendências e riscos

### 📱 QR Code
- Geração automática de QR Codes para pacientes
- Leitura rápida para acesso a informações
- Integração com sistema de identificação

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React.js** - Framework principal
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/ui** - Componentes UI modernos
- **Lucide React** - Biblioteca de ícones
- **Recharts** - Biblioteca de gráficos

### Backend
- **Python + Flask** - Framework web
- **SQLAlchemy** - ORM para banco de dados
- **PostgreSQL/SQLite** - Banco de dados
- **Flask-Bcrypt** - Criptografia de senhas
- **PyJWT** - Autenticação JWT
- **Flask-CORS** - Controle de CORS
- **QRCode** - Geração de QR Codes
- **Pandas + Scikit-learn** - IA e análise de dados

### Infraestrutura
- **Docker & Docker Compose** - Containerização
- **Gunicorn** - Servidor WSGI para produção

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Python 3.11+
- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação e Execução

1. **Clone o repositório:**
```bash
git clone https://github.com/artur-source/RegiFlex.git
cd RegiFlex
```

2. **Configure o Backend:**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate  # Windows
pip install -r requirements.txt
```

3. **Configure o Frontend:**
```bash
cd ../frontend
pnpm install
# ou
npm install
```

4. **Execute o projeto:**

**Opção 1: Desenvolvimento separado**
```bash
# Terminal 1 - Backend
cd backend
source venv/bin/activate
python src/main.py

# Terminal 2 - Frontend
cd frontend
pnpm run dev
```

**Opção 2: Produção integrada**
```bash
# Build do frontend
cd frontend
pnpm run build

# Copiar arquivos para o backend
cp -r dist/* ../backend/src/static/

# Executar apenas o backend (que serve o frontend)
cd ../backend
source venv/bin/activate
python src/main.py
```

5. **Acesse a aplicação:**
- **Desenvolvimento:** http://localhost:5173 (frontend) + http://localhost:5000 (API)
- **Produção:** http://localhost:5000 (aplicação completa)

### 👤 Usuários de Teste

O sistema vem com usuários pré-configurados para teste:

- **Admin:**
  - Email: admin@regiflex.com
  - Senha: admin123

- **Psicólogo:**
  - Email: psicologo1@regiflex.com
  - Senha: password

- **Recepcionista:**
  - Email: recepcionista1@regiflex.com
  - Senha: password

## 📁 Estrutura do Projeto

```
RegiFlex/
├── backend/                 # Aplicação Flask (API RESTful)
│   ├── src/
│   │   ├── models/         # Modelos de dados (SQLAlchemy)
│   │   ├── routes/         # Endpoints da API
│   │   ├── static/         # Arquivos estáticos (frontend build)
│   │   └── main.py         # Ponto de entrada da aplicação
│   ├── venv/               # Ambiente virtual Python
│   └── requirements.txt    # Dependências Python
├── frontend/               # Aplicação React.js
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── assets/         # Imagens e outros assets
│   │   └── App.jsx         # Componente principal
│   ├── dist/               # Build de produção
│   └── package.json        # Dependências Node.js
└── README.md              # Este arquivo
```

## 🔗 API Endpoints

### Autenticação
- `POST /api/auth/login` - Login de usuário
- `POST /api/auth/register` - Registro de usuário
- `POST /api/auth/verify-token` - Verificação de token
- `GET /api/auth/profile` - Perfil do usuário

### Pacientes
- `GET /api/patients` - Listar pacientes
- `POST /api/patients` - Criar paciente
- `GET /api/patients/{id}` - Obter paciente
- `PUT /api/patients/{id}` - Atualizar paciente
- `DELETE /api/patients/{id}` - Remover paciente
- `GET /api/patients/{id}/qr-code` - QR Code do paciente

### Sessões
- `GET /api/sessions` - Listar sessões
- `POST /api/sessions` - Criar sessão
- `GET /api/sessions/{id}` - Obter sessão
- `PUT /api/sessions/{id}` - Atualizar sessão
- `DELETE /api/sessions/{id}` - Remover sessão
- `GET /api/dashboard/stats` - Estatísticas do dashboard

### Utilitários
- `GET /api/health` - Health check da API
- `POST /api/qr-code/read` - Leitura de QR Code

## 🤝 Contribuição

Este é um projeto acadêmico desenvolvido como parte dos estudos em Análise e Desenvolvimento de Sistemas. Contribuições são bem-vindas!

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

Para mais informações sobre o projeto, entre em contato com a equipe de desenvolvimento através do GitHub.

---

**RegiFlex** - Desenvolvido com ❤️ por estudantes de ADS
*Seu registro simplificado*

