// Script para atualizar conteúdo conforme documentação
(function() {
    function updateContent() {
        console.log('Atualizando conteúdo conforme documentação...');
        
        // Atualizar funcionalidades principais
        const funcionalidades = [
            {
                titulo: 'Gestão de Pacientes',
                descricao: 'Cadastro completo de informações demográficas, contato e histórico. Sistema de login seguro com diferentes perfis de usuário.'
            },
            {
                titulo: 'Gestão de Sessões',
                descricao: 'Agendamento, registro de sessões e evolução do paciente. QR Code para acesso rápido a informações.'
            },
            {
                titulo: 'Inteligência Artificial',
                descricao: 'Análise de padrões e geração de alertas inteligentes para auxiliar na tomada de decisões clínicas.'
            }
        ];
        
        // Encontrar e atualizar os cartões de funcionalidades
        const cards = document.querySelectorAll('.grid > div');
        if (cards.length >= 3) {
            funcionalidades.forEach((func, index) => {
                if (cards[index]) {
                    const titleElement = cards[index].querySelector('h3, h2, .font-semibold');
                    const descElement = cards[index].querySelector('p, .text-sm');
                    
                    if (titleElement) {
                        titleElement.textContent = func.titulo;
                        console.log('Título atualizado:', func.titulo);
                    }
                    
                    if (descElement) {
                        descElement.textContent = func.descricao;
                        console.log('Descrição atualizada:', func.titulo);
                    }
                }
            });
        }
        
        // Atualizar tecnologias utilizadas
        const tecnologias = [
            { nome: 'React', descricao: 'Framework frontend moderno' },
            { nome: 'Flask', descricao: 'Framework backend Python' },
            { nome: 'PostgreSQL', descricao: 'Banco de dados robusto' },
            { nome: 'Docker', descricao: 'Containerização e deploy' }
        ];
        
        // Encontrar seção de tecnologias
        const techSection = document.querySelector('h2');
        if (techSection && techSection.textContent.includes('Tecnologias')) {
            const techGrid = techSection.nextElementSibling;
            if (techGrid) {
                const techItems = techGrid.querySelectorAll('div');
                tecnologias.forEach((tech, index) => {
                    if (techItems[index]) {
                        const techName = techItems[index].querySelector('p, span, div');
                        if (techName) {
                            techName.textContent = tech.nome;
                        }
                    }
                });
            }
        }
        
        console.log('Conteúdo atualizado conforme documentação!');
    }
    
    // Executar atualização
    updateContent();
    
    // Executar múltiplas vezes para garantir que funcione
    setTimeout(updateContent, 500);
    setTimeout(updateContent, 1500);
    setTimeout(updateContent, 3000);
})();
