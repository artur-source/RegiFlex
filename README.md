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

**Arquitetura Moderna:** Totalmente baseada em **Supabase** como Backend-as-a-Service, eliminando a complexidade de gerenciar servidores próprios e oferecendo escalabilidade automática, segurança robusta e banco de dados real-time.

### 🎯 Missão
Facilitar o trabalho de profissionais da psicologia através de tecnologia moderna e intuitiva.

### 🔭 Visão
Ser a principal solução de gestão para clínicas de psicologia no Brasil.

### 💎 Valores
Inovação, segurança, simplicidade e compromisso com a qualidade do atendimento.

## ✨ Principais Funcionalidades

### 👥 Gestão de Pacientes
Cadastro completo de informações demográficas, contato e histórico médico com interface intuitiva e segura. O sistema permite o registro detalhado de dados pessoais, informações de contato e histórico médico completo, facilitando o acompanhamento longitudinal dos pacientes.

### 📅 Agendamento de Sessões
Sistema completo para agendar, registrar e acompanhar sessões terapêuticas com controle de status e evolução. Inclui funcionalidades de agendamento inteligente, registro detalhado de sessões e acompanhamento da evolução do tratamento.

### 📱 QR Code
Geração e leitura de QR Codes para acesso rápido a informações de pacientes e otimização do fluxo de atendimento. Esta funcionalidade permite acesso instantâneo aos dados dos pacientes através de dispositivos móveis, agilizando o processo de atendimento.

### 🤖 IA Integrada
Análise básica de padrões e geração de alertas simples para auxiliar na tomada de decisões clínicas. **Status:** Em desenvolvimento - funcionalidades de análise inteligente e alertas personalizados estão sendo implementadas gradualmente.

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
- **Vercel / Netlify** - Plataformas de deploy otimizadas para React
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
- ✅ **Relatórios Avançados** - Em desenvolvimento (com melhorias de segurança)
- ✅ **IA Integrada** - Em desenvolvimento (com melhorias de segurança)
- 📋 **Mobile App** - Planejado

## 📖 Documentação

- **[Wiki do Projeto](WIKI.md)** - Documentação detalhada, tutoriais e FAQs


- **[Página de Apresentação](https://artur-source.github.io/RegiFlex/)** - Site oficial do projeto
- **[Repositório de Desenvolvimento](https://github.com/artur-source/RegiFlex-teste)** - Código fonte e documentação técnica
- **[Tutorial de Instalação](Tutorial-de-Instalacao.md)** - Guia passo a passo
- **[FAQ](FAQ.md)** - Perguntas frequentes

## 🤝 Como Contribuir

O RegiFlex é um projeto open source e encorajamos contribuições da comunidade! Para contribuir com o desenvolvimento, acesse o [repositório principal](https://github.com/artur-source/RegiFlex-teste) onde está o código fonte atualizado.

### Diretrizes de Contribuição
- Siga os padrões de código existentes
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário
- Seja respeitoso e construtivo nos comentários

## 📞 Contato

Para dúvidas, sugestões ou colaborações, entre em contato conosco:

- **Email:** projetoux2024@gmail.com
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
