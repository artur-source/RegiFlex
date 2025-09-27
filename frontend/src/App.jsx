import React, { useState } from 'react';
import './App.css';
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Badge } from "./components/ui/badge";
import { 
  Heart, 
  Users, 
  Calendar, 
  BarChart3, 
  QrCode, 
  Shield, 
  Brain,
  UserPlus,
  ClipboardList,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Clock,
  Star
} from 'lucide-react';
import regiflexLogo from './assets/regiflex-logo.jpg';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const features = [
    {
      icon: <UserPlus className="h-8 w-8 text-primary" />,
      title: "Gestão de Pacientes",
      description: "Cadastro completo de informações demográficas, contato e histórico médico."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Agendamento de Sessões",
      description: "Sistema completo para agendar, registrar e acompanhar sessões terapêuticas."
    },
    {
      icon: <QrCode className="h-8 w-8 text-primary" />,
      title: "QR Code",
      description: "Geração e leitura de QR Codes para acesso rápido a informações de pacientes."
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "IA Leve",
      description: "Análise inteligente de padrões e geração de alertas para auxiliar na tomada de decisões."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Relatórios e Dashboard",
      description: "Visão geral detalhada das atividades da clínica com gráficos e indicadores."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Segurança",
      description: "Sistema de autenticação robusto com diferentes perfis de usuário e criptografia."
    }
  ];

  const teamMembers = [
    { name: "Alexandre Fernandes da Silva", rgm: "2581191" },
    { name: "Artur Alves Santos", rgm: "2417606" },
    { name: "Carlos Eduardo Fernandes de Freitas", rgm: "2417694" },
    { name: "Guilherme Almeida Rocha", rgm: "2417704" },
    { name: "Julio Henrique Lins da Silva", rgm: "2417382" },
    { name: "Nicollas Andrey", rgm: "2417423" }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, label: "Pacientes Ativos", value: "1,234" },
    { icon: <Calendar className="h-6 w-6" />, label: "Sessões Este Mês", value: "456" },
    { icon: <TrendingUp className="h-6 w-6" />, label: "Taxa de Sucesso", value: "94%" },
    { icon: <Clock className="h-6 w-6" />, label: "Tempo Médio/Sessão", value: "50min" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src={regiflexLogo} 
                alt="RegiFlex Logo" 
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">RegiFlex</h1>
                <p className="text-sm text-gray-600">Seu registro simplificado</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button 
                variant={activeTab === 'home' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('home')}
              >
                Início
              </Button>
              <Button 
                variant={activeTab === 'features' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('features')}
              >
                Funcionalidades
              </Button>
              <Button 
                variant={activeTab === 'demo' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('demo')}
              >
                Demo
              </Button>
              <Button 
                variant={activeTab === 'team' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('team')}
              >
                Equipe
              </Button>
            </nav>
            <div className="flex space-x-2">
              <Button variant="outline">Entrar</Button>
              <Button>Cadastrar</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Home Tab */}
          <TabsContent value="home" className="space-y-12">
            {/* Hero Section */}
            <section className="text-center py-16">
              <div className="max-w-4xl mx-auto">
                <Badge className="mb-4" variant="secondary">
                  <Heart className="h-4 w-4 mr-2" />
                  Sistema de Gestão para Clínicas de Psicologia
                </Badge>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  Simplifique a gestão da sua clínica com o 
                  <span className="text-primary"> RegiFlex</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Uma solução completa para registro, acompanhamento e análise de informações 
                  de pacientes e sessões. Interface moderna, segura e intuitiva.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8 py-3">
                    Começar Agora
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 py-3">
                    Ver Demonstração
                  </Button>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4 text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Features Preview */}
            <section className="py-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Principais Funcionalidades
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Descubra como o RegiFlex pode transformar a gestão da sua clínica
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.slice(0, 6).map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        {feature.icon}
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Funcionalidades Completas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                O RegiFlex oferece todas as ferramentas necessárias para uma gestão eficiente 
                da sua clínica de psicologia
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Technical Details */}
            <section className="py-12">
              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Tecnologias Utilizadas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-primary">Frontend</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• React.js com Vite</li>
                        <li>• Tailwind CSS</li>
                        <li>• Shadcn/ui Components</li>
                        <li>• Lucide Icons</li>
                        <li>• Recharts para gráficos</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-primary">Backend</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Python + Flask</li>
                        <li>• PostgreSQL</li>
                        <li>• SQLAlchemy ORM</li>
                        <li>• JWT Authentication</li>
                        <li>• Docker & Docker Compose</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Demo Tab */}
          <TabsContent value="demo" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Demonstração do Sistema
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore as principais telas e funcionalidades do RegiFlex
              </p>
            </div>

            {/* Login Demo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Tela de Login</h3>
                <p className="text-gray-600 mb-6">
                  Sistema de autenticação seguro com diferentes perfis de usuário: 
                  Admin, Psicólogo e Recepcionista.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Autenticação JWT</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Criptografia de senhas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Controle de acesso por perfil</span>
                  </div>
                </div>
              </div>
              <Card className="max-w-md mx-auto w-full">
                <CardHeader>
                  <CardTitle>Entrar no Sistema</CardTitle>
                  <CardDescription>
                    Acesse sua conta do RegiFlex
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" placeholder="••••••••" />
                  </div>
                  <Button className="w-full">Entrar</Button>
                  <div className="text-center">
                    <Button variant="link" size="sm">
                      Esqueceu sua senha?
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Dashboard Demo */}
            <section className="py-12">
              <h3 className="text-2xl font-bold mb-8 text-center">Dashboard Principal</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Pacientes Ativos
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-muted-foreground">
                      +12% em relação ao mês anterior
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Sessões Agendadas
                    </CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">89</div>
                    <p className="text-xs text-muted-foreground">
                      Para os próximos 7 dias
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Alertas IA
                    </CardTitle>
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">
                      Requerem atenção
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Quem Somos?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conheça a equipe de estudantes de ADS que desenvolveu o RegiFlex
              </p>
            </div>

            {/* Project Story */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl text-center">A História do Projeto</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg leading-relaxed">
                  O projeto RegiFlex nasceu de uma atividade proposta pelo <strong>professor Thiago</strong>, 
                  que desafiou nossa turma a criar algo que nunca existiu. Desde então, o RegiFlex 
                  se tornou o foco de diversos projetos de extensão do nosso grupo.
                </p>
                <p className="text-lg leading-relaxed">
                  Somos estudantes de <strong>Análise e Desenvolvimento de Sistemas</strong> e, 
                  desde o início, todos trabalharam incansavelmente para fazer essa ideia funcionar 
                  e se tornar uma realidade.
                </p>
                <div className="flex justify-center">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Star className="h-4 w-4 mr-2" />
                    Projeto de Extensão Acadêmica
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>
                      <Badge variant="outline">RGM: {member.rgm}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-gray-600">
                      Estudante de Análise e Desenvolvimento de Sistemas
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <section className="text-center py-12">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Interessado no Projeto?</h3>
                  <p className="text-gray-600 mb-6">
                    Entre em contato conosco para saber mais sobre o RegiFlex 
                    ou para colaborar com o desenvolvimento.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button>
                      Entrar em Contato
                    </Button>
                    <Button variant="outline">
                      Ver no GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={regiflexLogo} 
                  alt="RegiFlex Logo" 
                  className="h-10 w-10 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">RegiFlex</h3>
                  <p className="text-gray-400 text-sm">Seu registro simplificado</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Sistema completo de gestão para clínicas de psicologia, 
                desenvolvido por estudantes de ADS com foco na inovação e qualidade.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Funcionalidades</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gestão de Pacientes</li>
                <li>Agendamento</li>
                <li>QR Code</li>
                <li>Relatórios</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentação</li>
                <li>FAQ</li>
                <li>Contato</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RegiFlex. Desenvolvido por estudantes de ADS. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
