# Guia de Contribuição - RegiFlex

Obrigado por seu interesse em contribuir com o RegiFlex! Este guia fornece todas as informações necessárias para contribuir de forma efetiva com o projeto.

---

## 📋 Índice

1. [Como Contribuir](#como-contribuir)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Padrões de Código](#padrões-de-código)
4. [Processo de Desenvolvimento](#processo-de-desenvolvimento)
5. [Testes](#testes)
6. [Documentação](#documentação)
7. [Reportar Bugs](#reportar-bugs)
8. [Solicitar Funcionalidades](#solicitar-funcionalidades)

---

## 🤝 Como Contribuir

### Tipos de Contribuição

- **🐛 Correção de Bugs** - Corrigir problemas existentes
- **✨ Novas Funcionalidades** - Implementar recursos solicitados
- **📚 Documentação** - Melhorar ou criar documentação
- **🎨 UI/UX** - Melhorias na interface e experiência do usuário
- **⚡ Performance** - Otimizações de performance
- **🧪 Testes** - Adicionar ou melhorar testes

### Antes de Começar

1. **Verifique as Issues** existentes para evitar trabalho duplicado
2. **Crie uma Issue** para discutir mudanças significativas
3. **Fork o repositório** para sua conta pessoal
4. **Configure o ambiente** de desenvolvimento local

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- **Node.js** 18.0.0 ou superior
- **npm** 9.0.0 ou superior
- **Git** 2.30.0 ou superior
- **Conta Supabase** (gratuita)

### Setup Inicial

```bash
# 1. Fork e clone o repositório
git clone https://github.com/SEU_USUARIO/RegiFlex-teste.git
cd RegiFlex-teste

# 2. Adicionar repositório original como upstream
git remote add upstream https://github.com/artur-source/RegiFlex-teste.git

# 3. Configurar variáveis de ambiente
cp .env.example .env

# 4. Editar .env com suas credenciais Supabase
# VITE_SUPABASE_URL=https://seu-projeto.supabase.co
# VITE_SUPABASE_ANON_KEY=sua-chave-aqui

# 5. Instalar dependências
cd frontend
npm install

# 6. Configurar banco de dados no Supabase
# Executar o conteúdo de database/schema.sql no SQL Editor do Supabase

# 7. Iniciar servidor de desenvolvimento
npm run dev
```

### Configuração do Supabase

1. Acesse [supabase.com](https://supabase.com) e crie uma conta
2. Crie um novo projeto
3. Vá para **Settings > API** e copie:
   - Project URL
   - Public anon key
4. Cole essas informações no arquivo `.env`
5. Vá para **SQL Editor** e execute o script `database/schema.sql`

---

## 📝 Padrões de Código

### JavaScript/React

```javascript
// ✅ Bom - Componente funcional com hooks
import React, { useState, useEffect } from 'react';

const MeuComponente = ({ prop1, prop2 }) => {
  const [estado, setEstado] = useState(null);

  useEffect(() => {
    // Lógica de efeito
  }, []);

  return (
    <div className="container">
      {/* JSX aqui */}
    </div>
  );
};

export default MeuComponente;
```

### Nomenclatura

- **Componentes:** PascalCase (`MeuComponente.jsx`)
- **Arquivos:** camelCase (`meuArquivo.js`)
- **Pastas:** camelCase (`minhasPastas/`)
- **Variáveis:** camelCase (`minhaVariavel`)
- **Constantes:** UPPER_SNAKE_CASE (`MINHA_CONSTANTE`)

### Estrutura de Arquivos

```
frontend/src/
├── components/           # Componentes reutilizáveis
│   ├── ui/              # Componentes UI básicos
│   └── forms/           # Componentes de formulário
├── contexts/            # Context API
├── hooks/               # Custom hooks
├── lib/                 # Utilitários e configurações
├── services/            # Serviços de API
├── utils/               # Funções utilitárias
└── assets/              # Imagens e recursos
```

### CSS/Tailwind

```jsx
// ✅ Bom - Classes organizadas por categoria
<div className="
  flex items-center justify-between
  p-4 m-2
  bg-white border border-gray-200 rounded-lg
  hover:shadow-md transition-shadow
">
  {/* Conteúdo */}
</div>
```

### Supabase/API

```javascript
// ✅ Bom - Tratamento de erro consistente
const buscarPacientes = async () => {
  try {
    const { data, error } = await supabase
      .from('pacientes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erro ao buscar pacientes:', error);
    throw new Error('Falha ao carregar pacientes');
  }
};
```

---

## 🔄 Processo de Desenvolvimento

### Workflow Git

```bash
# 1. Atualizar branch main local
git checkout main
git pull upstream main

# 2. Criar nova branch para sua feature
git checkout -b feature/nome-da-funcionalidade

# 3. Fazer commits pequenos e descritivos
git add .
git commit -m "feat: adicionar componente de busca de pacientes"

# 4. Push para seu fork
git push origin feature/nome-da-funcionalidade

# 5. Criar Pull Request no GitHub
```

### Padrão de Commits

Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Tipos de commit
feat:     # Nova funcionalidade
fix:      # Correção de bug
docs:     # Documentação
style:    # Formatação, sem mudança de lógica
refactor: # Refatoração de código
test:     # Adicionar ou modificar testes
chore:    # Tarefas de manutenção

# Exemplos
git commit -m "feat: adicionar autenticação com Supabase"
git commit -m "fix: corrigir validação de formulário de paciente"
git commit -m "docs: atualizar README com instruções de deploy"
```

### Branches

- **`main`** - Código de produção estável
- **`develop`** - Branch de desenvolvimento (se necessário)
- **`feature/nome`** - Novas funcionalidades
- **`fix/nome`** - Correções de bugs
- **`docs/nome`** - Atualizações de documentação

---

## 🧪 Testes

### Executar Testes

```bash
# Testes unitários (quando implementados)
npm test

# Testes de integração (quando implementados)
npm run test:integration

# Linting
npm run lint

# Formatação de código
npm run format
```

### Escrevendo Testes

```javascript
// Exemplo de teste para componente
import { render, screen } from '@testing-library/react';
import MeuComponente from './MeuComponente';

describe('MeuComponente', () => {
  test('deve renderizar corretamente', () => {
    render(<MeuComponente />);
    expect(screen.getByText('Texto esperado')).toBeInTheDocument();
  });
});
```

---

## 📚 Documentação

### Documentar Componentes

```javascript
/**
 * Componente para exibir informações do paciente
 * 
 * @param {Object} props
 * @param {Object} props.paciente - Dados do paciente
 * @param {Function} props.onEdit - Callback para edição
 * @param {boolean} props.readonly - Se deve ser somente leitura
 */
const PacienteCard = ({ paciente, onEdit, readonly = false }) => {
  // Implementação
};
```

### Atualizar Documentação

- **README.md** - Informações gerais do projeto
- **ARCHITECTURE.md** - Documentação técnica
- **CONTRIBUTING.md** - Este arquivo
- Comentários no código para lógica complexa

---

## 🐛 Reportar Bugs

### Antes de Reportar

1. **Verifique** se o bug já foi reportado nas Issues
2. **Teste** na versão mais recente
3. **Reproduza** o bug consistentemente

### Template de Bug Report

```markdown
**Descrição do Bug**
Descrição clara e concisa do problema.

**Passos para Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Role para baixo até '...'
4. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
- OS: [ex: Windows 10]
- Browser: [ex: Chrome 91]
- Versão: [ex: 2.0.1]

**Informações Adicionais**
Qualquer outra informação relevante.
```

---

## ✨ Solicitar Funcionalidades

### Template de Feature Request

```markdown
**A funcionalidade está relacionada a um problema?**
Descrição clara do problema. Ex: "Fico frustrado quando..."

**Descreva a solução desejada**
Descrição clara e concisa do que você gostaria que acontecesse.

**Descreva alternativas consideradas**
Descrição de soluções ou funcionalidades alternativas.

**Informações Adicionais**
Qualquer outra informação, screenshots ou exemplos.
```

---

## 🔍 Code Review

### Checklist para Pull Requests

**Antes de Submeter:**
- [ ] Código segue os padrões estabelecidos
- [ ] Testes passam (quando disponíveis)
- [ ] Documentação atualizada se necessário
- [ ] Commits seguem padrão conventional
- [ ] Branch está atualizada com main

**Durante Review:**
- [ ] Funcionalidade funciona conforme esperado
- [ ] Código é legível e bem estruturado
- [ ] Não há vazamentos de segurança
- [ ] Performance não foi degradada
- [ ] UI/UX está consistente

---

## 🚀 Deploy e Release

### Processo de Release

1. **Merge** para branch main
2. **Tag** da versão seguindo [Semantic Versioning](https://semver.org/)
3. **Deploy automático** via GitHub Actions (quando configurado)
4. **Atualização** do CHANGELOG.md

### Versionamento

- **MAJOR** (1.0.0) - Mudanças incompatíveis
- **MINOR** (0.1.0) - Novas funcionalidades compatíveis
- **PATCH** (0.0.1) - Correções de bugs

---

## 📞 Suporte e Comunicação

### Canais de Comunicação

- **Issues do GitHub** - Para bugs e feature requests
- **Discussions** - Para dúvidas gerais e discussões
- **Pull Requests** - Para code review

### Tempo de Resposta

- **Issues críticas** - 24-48 horas
- **Pull Requests** - 2-5 dias úteis
- **Discussões gerais** - 1 semana

---

## 🎯 Boas Práticas

### Performance

- Use `React.memo` para componentes que re-renderizam frequentemente
- Implemente lazy loading para rotas
- Otimize imagens e assets
- Use Supabase real-time apenas quando necessário

### Segurança

- Nunca commite credenciais ou chaves de API
- Use variáveis de ambiente para configurações sensíveis
- Valide dados tanto no frontend quanto no backend (RLS)
- Sanitize inputs do usuário

### Acessibilidade

- Use elementos semânticos HTML
- Adicione `alt` text para imagens
- Garanta contraste adequado de cores
- Teste com leitores de tela

### UX/UI

- Mantenha consistência visual
- Forneça feedback para ações do usuário
- Implemente estados de loading
- Trate erros graciosamente

---

## 📄 Licença

Ao contribuir com este projeto, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto (MIT License).

---

## 🙏 Reconhecimentos

Agradecemos a todos os contribuidores que ajudam a tornar o RegiFlex melhor!

---

**Dúvidas?** Abra uma Issue ou Discussion no GitHub!

**Última Atualização:** Outubro 2025
