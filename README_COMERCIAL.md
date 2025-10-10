# RegiFlex - Sistema de Gestão para Clínicas de Psicologia

<div align="center">
  <img src="assets/regiflex-logo.jpg" alt="RegiFlex Logo" width="200"/>
  
  <h3>Sistema moderno, seguro e intuitivo para clínicas de psicologia</h3>
  
  [![Status](https://img.shields.io/badge/Status-Comercialização-brightgreen?style=flat-square)](https://github.com/artur-source/RegiFlex)
  [![Tecnologia](https://img.shields.io/badge/Frontend-React%2018.3.1-blue?style=flat-square)](https://reactjs.org/)
  [![Backend](https://img.shields.io/badge/Backend-Supabase-green?style=flat-square)](https://supabase.com/)
  [![Pagamentos](https://img.shields.io/badge/Pagamentos-Stripe-purple?style=flat-square)](https://stripe.com/)
</div>

## 🚀 Sobre o RegiFlex

O **RegiFlex** é uma solução SaaS completa para gestão de clínicas de psicologia, desenvolvida com foco em **custo zero** e **escalabilidade automática**. O sistema foi projetado para ser comercializado como uma startup, oferecendo uma arquitetura multi-tenant robusta e um processo de provisionamento totalmente automatizado.

### 💰 Modelo de Negócio

- **Custo Operacional:** Apenas **R$ 3,33/mês** (domínio)
- **Break-Even:** 1 cliente (R$ 34,90 > R$ 3,33)
- **Planos:**
  - **Individual:** R$ 34,90/mês - Para psicólogos autônomos
  - **Clínica:** R$ 99,90/mês - Para clínicas com múltiplos profissionais

### 🏗️ Arquitetura Comercial

| Componente | Serviço | Custo | Detalhes |
|------------|---------|-------|----------|
| **Backend & Auth** | Supabase | Gratuito até 50k usuários | PostgreSQL + Auth + APIs automáticas |
| **Frontend** | Vercel | Gratuito até 100GB | Deploy automático + CDN global |
| **Pagamentos** | Stripe | 2.9% + R$ 0,39 por transação | Processamento de pagamentos recorrentes |
| **Email** | Resend | Gratuito até 3k emails/mês | Emails transacionais |
| **Domínio** | Registro.br | R$ 40/ano (R$ 3,33/mês) | Único custo fixo |

## ✨ Funcionalidades Implementadas

### 🔐 Autenticação Real
- Sistema de autenticação com Supabase Auth
- Perfis de usuário (Admin, Psicólogo, Recepcionista)
- Gerenciamento de usuários por clínica

### 🏢 Multi-Tenant
- Isolamento completo de dados por clínica
- Row Level Security (RLS) no PostgreSQL
- Provisionamento automatizado de novas clínicas

### 👥 Gestão de Pacientes
- Cadastro completo com histórico médico
- Prontuário eletrônico seguro
- Busca e filtros avançados

### 📅 Agendamento
- Sistema completo de agendamento
- QR Code para check-in
- Lembretes automáticos

### 📊 Dashboard e Relatórios
- Métricas em tempo real
- Gráficos interativos
- Relatórios personalizados

### 💳 Sistema de Pagamentos
- Integração completa com Stripe
- Assinaturas recorrentes
- Webhooks para automação

## 🤖 Provisionamento Automatizado

O sistema inclui um processo completamente automatizado para novos clientes:

1. **Solicitação:** Cliente preenche formulário na página de marketing
2. **Provisionamento:** API cria clínica isolada no banco de dados
3. **Deploy:** Script automatizado cria instância personalizada
4. **Ativação:** Cliente recebe credenciais e link de acesso

### Scripts Disponíveis

```bash
# Provisionar novo cliente
node scripts/deploy-automation.js deploy --clinic-id=123 --subdomain=clinica-exemplo

# Listar instâncias
node scripts/deploy-automation.js list

# Remover instância
node scripts/deploy-automation.js remove --clinic-id=123 --subdomain=clinica-exemplo
```

## 🔗 Links e Recursos

- **Repositório Principal:** [RegiFlex-teste](https://github.com/artur-source/RegiFlex-teste)
- **Página de Marketing:** [RegiFlex](https://artur-source.github.io/RegiFlex/)
- **Aplicação Demo:** Disponível após deploy na Vercel
- **Documentação Técnica:** Incluída no repositório

## 📞 Contato Comercial

- **Email:** regiflex.contato@gmail.com
- **Telefone:** (11) 99999-9999
- **Endereço:** São Paulo, SP

## 🛠️ Stack Tecnológica

### Frontend
- **React 18.3.1** - Interface moderna e responsiva
- **Vite** - Build tool otimizado
- **Tailwind CSS** - Estilização utilitária
- **Shadcn/UI** - Componentes profissionais
- **Recharts** - Gráficos interativos

### Backend
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Banco de dados relacional
- **Row Level Security** - Isolamento multi-tenant
- **Supabase Auth** - Autenticação robusta

### Infraestrutura
- **Vercel** - Deploy e hospedagem
- **Stripe** - Processamento de pagamentos
- **GitHub Actions** - CI/CD automatizado
- **Resend** - Emails transacionais

## 📈 Métricas de Performance

- **Tempo de Provisionamento:** < 5 minutos
- **Uptime:** 99.9% (SLA Vercel + Supabase)
- **Tempo de Carregamento:** < 2 segundos
- **Segurança:** Criptografia end-to-end + LGPD compliant

## 🚀 Como Começar

### Para Clientes
1. Acesse a [página de marketing](https://artur-source.github.io/RegiFlex/)
2. Preencha o formulário de interesse
3. Receba suas credenciais por email
4. Comece a usar imediatamente

### Para Desenvolvedores
1. Clone o repositório: `git clone https://github.com/artur-source/RegiFlex-teste`
2. Configure as variáveis de ambiente
3. Execute `npm install && npm run dev`
4. Acesse `http://localhost:3000`

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p><strong>RegiFlex</strong> - Transformando a gestão de clínicas de psicologia</p>
  <p>Desenvolvido com ❤️ pela equipe RegiFlex</p>
</div>
