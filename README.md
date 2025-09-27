# RegiFlex - Sistema de Gestão para Clínicas de Psicologia

<div align="center">
  <img src="assets/regiflex-logo.jpg" alt="RegiFlex Logo" width="200"/>
  
  <h3>Seu registro simplificado</h3>
  
  [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=flat-square&logo=github)](https://artur-source.github.io/RegiFlex/)
  [![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
  [![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square)](https://github.com/artur-source/RegiFlex)
</div>

## 📋 Sobre o Projeto

O **RegiFlex** é um sistema de gestão completo desenvolvido especificamente para clínicas de psicologia. Nascido de uma visão ambiciosa de simplificar e modernizar a gestão clínica, o projeto foi criado por uma equipe dedicada de estudantes de **Análise e Desenvolvimento de Sistemas** como parte de um projeto acadêmico e de extensão.

O sistema oferece uma interface moderna, segura e intuitiva, com funcionalidades abrangentes que atendem às necessidades específicas de profissionais da área de psicologia, desde o cadastro de pacientes até a geração de relatórios detalhados.

### 🎯 Missão
Facilitar o trabalho de profissionais da psicologia através de tecnologia moderna e intuitiva.

### 🔭 Visão
Ser a principal solução de gestão para clínicas de psicologia no Brasil.

### 💎 Valores
Inovação, segurança, simplicidade e compromisso com a qualidade do atendimento.

## ✨ Principais Funcionalidades

### 👥 Gestão de Pacientes
- Cadastro completo de informações demográficas
- Histórico médico detalhado
- Sistema de contatos e emergências
- Interface intuitiva e segura

### 📅 Agendamento de Sessões
- Sistema completo para agendar sessões
- Registro e acompanhamento de sessões terapêuticas
- Controle de status e evolução
- Notificações automáticas

### 📱 QR Code
- Geração automática de QR Codes para pacientes
- Acesso rápido a informações
- Otimização do fluxo de atendimento
- Integração com dispositivos móveis

### 🤖 IA Leve
- Análise inteligente de padrões
- Geração de alertas personalizados
- Auxílio na tomada de decisões clínicas
- Insights baseados em dados

### 📊 Relatórios e Dashboard
- Visão geral detalhada das atividades
- Gráficos interativos
- Indicadores de performance
- Exportação de dados

### 🔒 Segurança
- Sistema de autenticação robusto
- Diferentes perfis de usuário
- Criptografia de dados sensíveis
- Logs de auditoria completos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React.js** - Biblioteca para interfaces de usuário
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/ui** - Componentes de UI modernos
- **Lucide React** - Ícones elegantes
- **Recharts** - Gráficos e visualizações

### Backend
- **Python + Flask** - Framework web minimalista
- **PostgreSQL** - Banco de dados relacional
- **SQLAlchemy** - ORM para Python
- **JWT + Bcrypt** - Autenticação e segurança
- **QRCode** - Geração de códigos QR
- **Pandas + Scikit-learn** - Análise de dados e ML

### Infraestrutura
- **Docker** - Containerização
- **Docker Compose** - Orquestração de containers
- **Gunicorn** - Servidor WSGI para produção
- **Git** - Controle de versão
- **GitHub** - Hospedagem e colaboração
- **VSCode** - Ambiente de desenvolvimento

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Git
- Docker e Docker Compose (recomendado)
- Node.js (versão 16+)
- Python (versão 3.8+)
- PostgreSQL (se não usar Docker)

### Execução com Docker Compose (Recomendado)

```bash
# Clone o repositório
git clone https://github.com/artur-source/RegiFlex.git
cd RegiFlex

# Execute com Docker Compose
docker-compose up --build
```

### Execução Manual

#### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou .\venv\Scripts\activate  # Windows
pip install -r requirements.txt
cp .env.example .env
flask db upgrade
flask run
```

#### Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm start
```

### Acessos
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **Banco de dados:** localhost:5432

### Credenciais de Teste
- **Email:** admin@regiflex.com
- **Senha:** admin123

## 👥 Equipe de Desenvolvimento

O RegiFlex foi desenvolvido por uma equipe de estudantes de **Análise e Desenvolvimento de Sistemas** como parte de um projeto acadêmico iniciado pelo professor Thiago.

| Nome | RGM | GitHub |
|------|-----|--------|
| **Alexandre Fernandes da Silva** | 2581191 | - |
| **Artur Alves Santos** | 2417606 | [@artur-source](https://github.com/artur-source) |
| **Carlos Eduardo Fernandes de Freitas** | 2417694 | - |
| **Guilherme Almeida Rocha** | 2417704 | - |
| **Julio Henrique Lins da Silva** | 2417382 | - |
| **Nicollas Andrey** | 2417423 | - |

### 📚 História do Projeto

O projeto RegiFlex nasceu de uma atividade proposta pelo **professor Thiago**, que desafiou nossa turma a criar algo que nunca existiu. Desde então, o RegiFlex se tornou o foco de diversos projetos de extensão do nosso grupo.

Todos trabalharam incansavelmente para fazer essa ideia funcionar e se tornar uma realidade, aplicando conhecimentos adquiridos durante o curso e explorando novas tecnologias para criar uma solução robusta e moderna.

## 📖 Documentação

- **[Página de Apresentação](https://artur-source.github.io/RegiFlex/)** - Site oficial do projeto
- **[Wiki](https://github.com/artur-source/RegiFlex/wiki)** - Documentação completa
- **[Tutorial de Instalação](https://github.com/artur-source/RegiFlex/wiki/Tutorial-de-Instalacao)** - Guia passo a passo
- **[FAQ](https://github.com/artur-source/RegiFlex/wiki/FAQ)** - Perguntas frequentes

## 🤝 Como Contribuir

O RegiFlex é um projeto open source e encorajamos contribuições da comunidade!

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Diretrizes de Contribuição
- Siga os padrões de código existentes
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário
- Seja respeitoso e construtivo nos comentários

## 📞 Contato

Para dúvidas, sugestões ou colaborações, entre em contato conosco:

- **Email:** projetoux2024@gmail.com
- **GitHub:** [artur-source/RegiFlex](https://github.com/artur-source/RegiFlex)
- **Site:** [https://artur-source.github.io/RegiFlex/](https://artur-source.github.io/RegiFlex/)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- **Professor Thiago** - Por propor o desafio inicial que deu origem ao projeto
- **Universidade** - Por fornecer o ambiente e recursos para desenvolvimento
- **Comunidade Open Source** - Pelas ferramentas e bibliotecas que tornaram este projeto possível
- **Colegas de Curso** - Pelo apoio e colaboração durante o desenvolvimento

---

<div align="center">
  <p>Feito com ❤️ pela equipe RegiFlex</p>
  <p>© 2024 RegiFlex. Todos os direitos reservados.</p>
</div>

