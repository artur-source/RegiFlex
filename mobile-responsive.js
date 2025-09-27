// Script para responsividade adaptativa do RegiFlex
(function() {
    function makeResponsive() {
        console.log('Aplicando responsividade adaptativa...');
        
        const isMobile = window.innerWidth <= 768;
        const gridElements = document.querySelectorAll('[class*="grid-cols-3"], .grid-cols-3');
        
        if (isMobile) {
            console.log('Aplicando layout mobile');
            gridElements.forEach((grid, index) => {
                grid.style.display = 'flex';
                grid.style.flexDirection = 'column';
                grid.style.gap = '1rem';
                grid.style.width = '100%';
                console.log('Grid ' + index + ' modificado para mobile');
            });
            
            // Modificar containers
            const containers = document.querySelectorAll('[class*="max-w"], .container');
            containers.forEach(container => {
                container.style.padding = '0 1rem';
                container.style.maxWidth = '100%';
            });
            
            // Modificar textos grandes
            const largeTexts = document.querySelectorAll('[class*="text-4xl"], [class*="text-3xl"]');
            largeTexts.forEach(text => {
                if (text.classList.contains('text-4xl') || text.className.includes('text-4xl')) {
                    text.style.fontSize = '2rem';
                    text.style.lineHeight = '1.2';
                }
                if (text.classList.contains('text-3xl') || text.className.includes('text-3xl')) {
                    text.style.fontSize = '1.5rem';
                    text.style.lineHeight = '1.3';
                }
            });
            
        } else {
            console.log('Aplicando layout desktop');
            gridElements.forEach((grid, index) => {
                grid.style.display = 'grid';
                grid.style.gridTemplateColumns = 'repeat(3, minmax(0, 1fr))';
                grid.style.flexDirection = '';
                grid.style.gap = '1.5rem';
                grid.style.width = '';
                console.log('Grid ' + index + ' revertido para desktop');
            });
            
            // Reverter containers
            const containers = document.querySelectorAll('[class*="max-w"], .container');
            containers.forEach(container => {
                container.style.padding = '';
                container.style.maxWidth = '';
            });
            
            // Reverter textos
            const largeTexts = document.querySelectorAll('[class*="text-4xl"], [class*="text-3xl"]');
            largeTexts.forEach(text => {
                text.style.fontSize = '';
                text.style.lineHeight = '';
            });
        }
        
        console.log('Responsividade aplicada para:', isMobile ? 'mobile' : 'desktop');
    }
    
    // Aplicar responsividade
    makeResponsive();
    
    // Reaplicar quando a janela for redimensionada
    window.addEventListener('resize', makeResponsive);
    
    // Aplicar múltiplas vezes para garantir que funcione
    setTimeout(makeResponsive, 500);
    setTimeout(makeResponsive, 1500);
    setTimeout(makeResponsive, 3000);
})();
