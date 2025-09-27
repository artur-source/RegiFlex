// Script para substituir o logo do RegiFlex
(function() {
    function replaceLogo() {
        console.log('Iniciando substituição do logo...');
        
        // Procurar por elementos que podem ser o logo
        const possibleLogos = [
            // Procurar por SVGs no início da página
            document.querySelector('div:first-child svg'),
            document.querySelector('header svg'),
            document.querySelector('nav svg'),
            // Procurar por imagens pequenas
            ...Array.from(document.querySelectorAll('img')).filter(img => 
                img.width <= 50 || img.height <= 50 || 
                img.src.includes('logo') || 
                img.alt.toLowerCase().includes('logo')
            ),
            // Procurar por SVGs pequenos
            ...Array.from(document.querySelectorAll('svg')).filter(svg => 
                svg.getAttribute('width') <= 50 || 
                svg.getAttribute('height') <= 50 ||
                svg.classList.toString().includes('logo')
            )
        ].filter(Boolean);
        
        console.log('Elementos candidatos encontrados:', possibleLogos.length);
        
        if (possibleLogos.length > 0) {
            // Usar o primeiro elemento encontrado
            const logoElement = possibleLogos[0];
            console.log('Substituindo elemento:', logoElement.tagName, logoElement.className);
            
            // Criar nova imagem com o logo
            const newLogo = document.createElement('img');
            newLogo.src = '/assets/regiflex-logo.jpg';
            newLogo.alt = 'RegiFlex Logo';
            newLogo.className = logoElement.className + ' logo-image';
            newLogo.style.width = '40px';
            newLogo.style.height = '40px';
            newLogo.style.objectFit = 'contain';
            newLogo.style.borderRadius = '8px';
            
            // Substituir o elemento existente
            if (logoElement.parentNode) {
                logoElement.parentNode.replaceChild(newLogo, logoElement);
                console.log('Logo substituído com sucesso!');
            }
        } else {
            console.log('Nenhum elemento candidato encontrado');
            
            // Como fallback, tentar adicionar o logo no início da página
            const firstDiv = document.querySelector('div');
            if (firstDiv) {
                const newLogo = document.createElement('img');
                newLogo.src = '/assets/regiflex-logo.jpg';
                newLogo.alt = 'RegiFlex Logo';
                newLogo.className = 'logo-image';
                newLogo.style.position = 'fixed';
                newLogo.style.top = '10px';
                newLogo.style.left = '10px';
                newLogo.style.width = '40px';
                newLogo.style.height = '40px';
                newLogo.style.objectFit = 'contain';
                newLogo.style.borderRadius = '8px';
                newLogo.style.zIndex = '1000';
                
                document.body.appendChild(newLogo);
                console.log('Logo adicionado como fallback!');
            }
        }
    }
    
    // Executar múltiplas vezes para garantir que funcione
    setTimeout(replaceLogo, 500);
    setTimeout(replaceLogo, 1500);
    setTimeout(replaceLogo, 3000);
    
    // Executar quando a página carregar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', replaceLogo);
    } else {
        replaceLogo();
    }
})();
