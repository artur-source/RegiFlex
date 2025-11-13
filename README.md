# RegiFlex - Sistema de Gestão Modular para Profissionais de Saúde

<div align="center">
  <img src="assets/regiflex-logo.jpg" alt="RegiFlex Logo" width="200"/>
  
  <h3>Seu registro simplificado</h3>
  
  [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=flat-square&logo=github)](https://artur-source.github.io/RegiFlex/)
  [![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
  [![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square)](https://github.com/artur-source/RegiFlex)
</div>

## 📋 Sobre o Projeto

O **RegiFlex** é um sistema de gestão modular e escalável desenvolvido para profissionais e clínicas de saúde. Nascido de uma visão ambiciosa de simplificar e modernizar a gestão clínica, o projeto foi criado por uma equipe dedicada de estudantes de **Análise e Desenvolvimento de Sistemas** como parte de um projeto acadêmico e de extensão.

O RegiFlex utiliza uma arquitetura inovadora baseada no modelo **"Core + Módulos de Extensão"**, permitindo que profissionais de diferentes áreas da saúde utilizem a mesma plataforma com funcionalidades especializadas. O sistema oferece uma interface moderna, segura e intuitiva, com funcionalidades abrangentes que atendem às necessidades específicas de cada especialidade.

**Arquitetura Moderna:** Totalmente baseada em **Supabase** como Backend-as-a-Service, com isolamento de dados por cliente (multi-tenancy), eliminando a complexidade de gerenciar servidores próprios e oferecendo escalabilidade automática, segurança robusta e banco de dados real-time. A infraestrutura é 100% serverless (Supabase + Vercel), garantindo velocidade, segurança e baixo custo operacional.

### 🎯 Missão
Facilitar o trabalho de profissionais da saúde através de tecnologia moderna, intuitiva e escalável.

### 🔭 Visão
Ser a principal solução de gestão modular para profissionais e clínicas de saúde no Brasil.

### 💎 Valores
Inovação, segurança, simplicidade, escalabilidade e compromisso com a qualidade do atendimento.

## 🏗️ Arquitetura Modular

O RegiFlex é construído sobre um **Core centralizado** que gerencia autenticação, pagamentos, provisionamento de ambientes e armazenamento de dados com isolamento por cliente. Cada especialidade possui seu próprio **módulo de extensão** conectado ao Core, permitindo crescimento sem duplicação de código.

### Core - Funcionalidades Centrais
- **Autenticação Segura** - Login via Supabase com criptografia de nível bancário
- **Multi-tenancy** - Isolamento completo de dados por cliente
- **Processamento de Pagamentos** - Integração com Stripe Checkout
- **Provisionamento Automatizado** - Criação automática de ambientes após assinatura
- **100% Web** - Sem necessidade de aplicativo, totalmente serverless

### 📦 Módulos Disponíveis

#### ✅ Psicologia (Ativo)
Módulo em fase de testes avançados, pronto para lançamento comercial. Inclui:
- Gestão completa de pacientes
- Agendamento de sessões terapêuticas
- Prontuário eletrônico
- Relatórios e dashboard
- QR Code para check-in

#### 🔄 Odontologia (Em Desenvolvimento)
Módulo em desenvolvimento, entrando em fase de testes em breve.

### 🚀 Próximos Módulos Planejados
1. **Fisioterapia** - Agendamentos, prontuário e relatórios clínicos
2. **Nutrição** - Acompanhamento alimentar e evolução de pacientes
3. **Estética e Dermatofuncional** - Registro fotográfico, pacotes e fidelização
4. **Clínicas Multidisciplinares** - Integração de várias áreas num só sistema
5. **Fonoaudiologia** - Prontuário e agenda especializada para atendimento individual e infantil

Novos módulos serão lançados gradualmente, aproveitando o mesmo núcleo tecnológico e reduzindo o custo de operação.

## ✨ Principais Funcionalidades

### 👥 Gestão de Pacientes
Cadastro completo de informações demográficas, contato e histórico médico com interface intuitiva e segura. O sistema permite o registro detalhado de dados pessoais, informações de contato e histórico médico completo, facilitando o acompanhamento longitudinal dos pacientes.

### 📅 Agendamento de Sessões
Sistema completo para agendar, registrar e acompanhar sessões terapêuticas com controle de status e evolução. Inclui funcionalidades de agendamento inteligente, registro detalhado de sessões e acompanhamento da evolução do tratamento.

### 📱 QR Code
Geração e leitura de QR Codes para acesso rápido a informações de pacientes e otimização do fluxo de atendimento. Esta funcionalidade permite acesso instantâneo aos dados dos pacientes através de dispositivos móveis, agilizando o processo de atendimento.

### 🤖 IA Integrada
Análise preditiva de padrões (ex: risco de no-show) e geração de alertas inteligentes para auxiliar na tomada de decisões clínicas e administrativas. **Status:** Versão 1.0 - Em Validação Comercial.

### 📊 Relatórios e Dashboard
Visão geral das atividades da clínica com gráficos básicos e indicadores essenciais de performance. O dashboard oferece uma visão consolidada das métricas importantes e permite a geração de relatórios personalizados.

### 🔒 Segurança
Sistema de autenticação robusto com diferentes perfis de usuário (Admin, Psicólogo, Recepcionista), criptografia de dados sensíveis e logs de auditoria completos.

## 🛠️ Tecnologias Utilizadas

### Frontend (React.js)
- **React** 18.3.1 - Biblioteca para interfaces de usuário modernas
- **Vite** 5.2.0 - Build tool moderna e rápida para desenvolvimento
- **Tailwind CSS** 3.4.4 - Framework CSS utilitário para design responsivo
- **Shadcn/ui** - Componentes de UI modernos e acessíveis
- **Lucide React** - Biblioteca de ícones elegantes e consistentes
- **Recharts** - Biblioteca para gráficos e visualizações interativas

### Backend (Supabase)
- **Supabase** - Plataforma Backend-as-a-Service completa
- **PostgreSQL** - Banco de dados relacional com Row Level Security (RLS)
- **Supabase Auth** - Sistema de autenticação com JWT
- **API RESTful** - API gerada automaticamente pelo Supabase
- **Real-time Database** - Subscriptions em tempo real para atualizações instantâneas
- **QRCode** - Geração e processamento de códigos QR

### Infraestrutura e Deploy
- **Vercel** - Plataforma de deploy otimizada para React
- **GitHub Pages** - Hospedagem para página de marketing
- **Git** - Controle de versão distribuído
- **GitHub** - Plataforma de desenvolvimento colaborativo
- **Supabase Cloud** - Infraestrutura backend totalmente gerenciada

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js** 18.0+ e npm
- **Conta Supabase** (gratuita) - [Criar conta](https://supabase.com)
- **Git** para clonagem do repositório

### Configuração Local

```bash
# Clone o repositório de desenvolvimento
git clone https://github.com/artur-source/RegiFlex-teste.git
cd RegiFlex-teste

# Configure as variáveis de ambiente
cp .env.example frontend/.env
# Edite o arquivo frontend/.env com suas credenciais do Supabase

# Instale as dependências
cd frontend
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Configuração do Banco de Dados

Para configurar o banco de dados Supabase, crie um projeto no [supabase.com](https://supabase.com) e execute o schema disponível no repositório de desenvolvimento. As instruções detalhadas estão disponíveis no repositório [RegiFlex-teste](https://github.com/artur-source/RegiFlex-teste).

### Credenciais de Teste
- **Login:** admin
- **Senha:** Qualquer senha (autenticação simplificada para desenvolvimento)

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

## 📊 Status do Projeto

- ✅ **Gestão de Pacientes** - Completo
- ✅ **Segurança** - Melhorias implementadas (remoção de senha hardcoded)
- ✅ **Gestão de Sessões** - Completo  
- ✅ **Autenticação** - Completo
- ✅ **QR Code** - Completo
- ✅ **Dashboard** - Completo
- ✅ **Relatórios Avançados** - Completo (com exportação CSV/PDF)
- ✅ **IA Integrada** - Completo (Versão 1.0 - Em Validação Comercial)
- ✅ **Arquitetura Modular** - Completo (Core + Módulos de Extensão)
- 🔄 **Módulo Odontologia** - Em Desenvolvimento
- 📋 **Módulos Adicionais** - Planejados (Fisioterapia, Nutrição, Estética, Fonoaudiologia)
- 📋 **Mobile App** - Planejado

## 📖 Documentação

- **[Wiki do Projeto](WIKI.md)** - Documentação detalhada, tutoriais e FAQs
- **[Página de Apresentação](https://artur-source.github.io/RegiFlex/)** - Site oficial do projeto com seção "Como Irá Funcionar?"
- **[Repositório de Desenvolvimento](https://github.com/artur-source/RegiFlex-teste)** - Código fonte e documentação técnica
- **[Tutorial de Instalação](https://github.com/artur-source/RegiFlex-teste/blob/main/docs/Guia_Instalacao_Producao.md)** - Guia passo a passo (No Repositório de Desenvolvimento)
- **[FAQ](FAQ.md)** - Perguntas frequentes

## 📞 Contato

Para dúvidas, sugestões ou colaborações, entre em contato conosco:

- **Email:** regiflex.contato@gmail.com
- **GitHub:** [artur-source/RegiFlex](https://github.com/artur-source/RegiFlex)
- **Desenvolvimento:** [artur-source/RegiFlex-teste](https://github.com/artur-source/RegiFlex-teste)
- **Site:** [https://artur-source.github.io/RegiFlex/](https://artur-source.github.io/RegiFlex/)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- **Professor Thiago** - Por propor o desafio inicial que deu origem ao projeto
- **[Supabase](https://supabase.com)** - Backend-as-a-Service incrível que tornou possível nossa arquitetura moderna
- **[Shadcn/ui](https://ui.shadcn.com)** - Componentes UI elegantes e acessíveis
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utilitário que acelera o desenvolvimento
- **Universidade** - Por fornecer o ambiente e recursos para desenvolvimento
- **Comunidade Open Source** - Pelas ferramentas e bibliotecas que tornaram este projeto possível

---

<div align="center">
  <p>Feito com ❤️ pela equipe RegiFlex</p>
  <p>© 2024 RegiFlex. Todos os direitos reservados.</p>
</div>
