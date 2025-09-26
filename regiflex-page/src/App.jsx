import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Users, 
  Calendar, 
  Shield, 
  QrCode, 
  Brain, 
  BarChart3, 
  Database, 
  Code, 
  Smartphone,
  Github,
  ExternalLink,
  CheckCircle,
  Star,
  Zap,
  Heart,
  Lock
} from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: Users,
      title: "Gestão de Pacientes",
      description: "Cadastro completo de informações demográficas, contato e histórico."
    },
    {
      icon: Calendar,
      title: "Gestão de Sessões",
      description: "Agendamento, registro de sessões e evolução do paciente."
    },
    {
      icon: Shield,
      title: "Autenticação Segura",
      description: "Sistema de login seguro com diferentes perfis de usuário (Admin, Psicólogo, Recepcionista)."
    },
    {
      icon: QrCode,
      title: "QR Code",
      description: "Geração e leitura de QR Codes para acesso rápido a informações."
    },
    {
      icon: Brain,
      title: "IA Leve",
      description: "Geração de alertas inteligentes e análise de padrões para auxiliar na tomada de decisões."
    },
    {
      icon: BarChart3,
      title: "Relatórios e Dashboard",
      description: "Visão geral e detalhada das atividades da clínica."
    }
  ]

  const technologies = {
    backend: [
      { name: "Python 3.11", color: "bg-blue-100 text-blue-800" },
      { name: "Flask", color: "bg-purple-100 text-purple-800" },
      { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-800" },
      { name: "SQLAlchemy", color: "bg-orange-100 text-orange-800" },
      { name: "JWT", color: "bg-red-100 text-red-800" },
      { name: "Pandas", color: "bg-yellow-100 text-yellow-800" },
      { name: "Scikit-learn", color: "bg-cyan-100 text-cyan-800" }
    ],
    frontend: [
      { name: "React.js", color: "bg-blue-100 text-blue-800" },
      { name: "Vite", color: "bg-purple-100 text-purple-800" },
      { name: "Tailwind CSS", color: "bg-teal-100 text-teal-800" },
      { name: "Shadcn/ui", color: "bg-gray-100 text-gray-800" },
      { name: "Recharts", color: "bg-pink-100 text-pink-800" },
      { name: "Lucide React", color: "bg-amber-100 text-amber-800" }
    ],
    infrastructure: [
      { name: "Docker", color: "bg-blue-100 text-blue-800" },
      { name: "Docker Compose", color: "bg-indigo-100 text-indigo-800" },
      { name: "Gunicorn", color: "bg-orange-100 text-orange-800" }
    ]
  }

  const credentials = [
    { role: "Admin", username: "admin", password: "password" },
    { role: "Psicólogo", username: "psicologo1", password: "password" },
    { role: "Recepcionista", username: "recepcionista1", password: "password" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">RegiFlex</h1>
                <p className="text-sm text-slate-600">Sistema de Gestão para Clínicas de Psicologia</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://github.com/artur-source/RegiFlex', '_blank')}
                className="flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </Button>
              <Button 
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Star className="w-4 h-4 mr-2" />
                Favoritar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Visão Geral' },
              { id: 'features', label: 'Funcionalidades' },
              { id: 'tech', label: 'Tecnologias' },
              { id: 'setup', label: 'Configuração' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Sistema Completo de Gestão
              </div>
              <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
                RegiFlex
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Um sistema completo de gestão para clínicas de psicologia, desenvolvido para simplificar 
                o registro, acompanhamento e análise de informações de pacientes e sessões.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => setActiveTab('setup')}
                >
                  Começar Agora
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setActiveTab('features')}
                >
                  Ver Funcionalidades
                </Button>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Seguro e Confiável</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Autenticação JWT, criptografia de dados sensíveis e logs de auditoria para máxima segurança.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Responsivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Design adaptável para desktop, tablet e mobile, garantindo acesso em qualquer dispositivo.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-teal-600" />
                  </div>
                  <CardTitle>Modular</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Arquitetura modular com backend Flask e frontend React, facilitando manutenção e escalabilidade.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Funcionalidades Principais</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                O RegiFlex oferece um conjunto completo de ferramentas para gestão eficiente de clínicas de psicologia.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {activeTab === 'tech' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Tecnologias Utilizadas</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Stack moderno e robusto para garantir performance, segurança e escalabilidade.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="w-5 h-5 text-blue-600" />
                    <span>Backend</span>
                  </CardTitle>
                  <CardDescription>API RESTful robusta e segura</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.backend.map((tech, index) => (
                      <Badge key={index} className={tech.color}>
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Smartphone className="w-5 h-5 text-purple-600" />
                    <span>Frontend</span>
                  </CardTitle>
                  <CardDescription>Interface moderna e responsiva</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.frontend.map((tech, index) => (
                      <Badge key={index} className={tech.color}>
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-teal-600" />
                    <span>Infraestrutura</span>
                  </CardTitle>
                  <CardDescription>Deploy e containerização</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.infrastructure.map((tech, index) => (
                      <Badge key={index} className={tech.color}>
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'setup' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Como Executar</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Siga os passos abaixo para configurar e executar o RegiFlex em seu ambiente local.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Pré-requisitos</CardTitle>
                  <CardDescription>Ferramentas necessárias para executar o projeto</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Docker e Docker Compose</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Node.js e pnpm (opcional)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Python 3.11 e pip (opcional)</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Credenciais de Teste</CardTitle>
                  <CardDescription>Usuários pré-configurados para teste</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {credentials.map((cred, index) => (
                      <div key={index} className="p-3 bg-slate-50 rounded-lg">
                        <div className="font-medium text-slate-900">{cred.role}</div>
                        <div className="text-sm text-slate-600">
                          <span className="font-mono">{cred.username}</span> / <span className="font-mono">{cred.password}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Passos de Instalação</CardTitle>
                <CardDescription>Execute os comandos abaixo em sequência</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-900 rounded-lg text-slate-100 font-mono text-sm">
                    <div className="text-slate-400"># 1. Clone o repositório</div>
                    <div>git clone https://github.com/artur-source/RegiFlex.git</div>
                    <div>cd RegiFlex</div>
                  </div>
                  
                  <div className="p-4 bg-slate-900 rounded-lg text-slate-100 font-mono text-sm">
                    <div className="text-slate-400"># 2. Execute o script de desenvolvimento</div>
                    <div>./scripts/dev.sh</div>
                  </div>
                  
                  <div className="p-4 bg-slate-900 rounded-lg text-slate-100 font-mono text-sm">
                    <div className="text-slate-400"># 3. Inicie os serviços</div>
                    <div>docker-compose up --build</div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <ExternalLink className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-blue-900">Acesse a aplicação</div>
                        <div className="text-blue-700 text-sm">
                          Frontend: <span className="font-mono">http://localhost:3000</span><br />
                          Backend API: <span className="font-mono">http://localhost:5000/api</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">RegiFlex</span>
              </div>
              <p className="text-slate-400">
                Sistema de gestão completo para clínicas de psicologia, desenvolvido com tecnologias modernas.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Links Úteis</h3>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Documentação
                </a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  API Reference
                </a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Contribuir
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Projeto</h3>
              <div className="space-y-2">
                <a 
                  href="https://github.com/artur-source/RegiFlex" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <div className="text-slate-400">
                  Licença MIT
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 RegiFlex. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
