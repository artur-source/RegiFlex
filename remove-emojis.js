// Script para remover emojis do RegiFlex
(function() {
    function removeEmojis() {
        console.log('Iniciando remoção de emojis...');
        
        // Lista de emojis para remover
        const emojisToRemove = [
            '⚡', '🚀', '📋', '📚', '📖', '🤝', '🔗', '📄'
        ];
        
        // Função para limpar texto de emojis
        function cleanText(text) {
            let cleanedText = text;
            emojisToRemove.forEach(emoji => {
                cleanedText = cleanedText.replace(new RegExp(emoji, 'g'), '');
            });
            return cleanedText.trim();
        }
        
        // Remover emojis de todos os elementos de texto
        const allTextElements = document.querySelectorAll('*');
        let elementsModified = 0;
        
        allTextElements.forEach(element => {
            // Verificar apenas nós de texto diretos
            for (let i = 0; i < element.childNodes.length; i++) {
                const node = element.childNodes[i];
                if (node.nodeType === Node.TEXT_NODE) {
                    const originalText = node.textContent;
                    const cleanedText = cleanText(originalText);
                    if (originalText !== cleanedText) {
                        node.textContent = cleanedText;
                        elementsModified++;
                        console.log('Emoji removido de:', originalText, '->', cleanedText);
                    }
                }
            }
            
            // Também verificar atributos como title, alt, etc.
            if (element.title) {
                const cleanedTitle = cleanText(element.title);
                if (element.title !== cleanedTitle) {
                    element.title = cleanedTitle;
                    elementsModified++;
                }
            }
            
            if (element.alt) {
                const cleanedAlt = cleanText(element.alt);
                if (element.alt !== cleanedAlt) {
                    element.alt = cleanedAlt;
                    elementsModified++;
                }
            }
        });
        
        console.log('Remoção de emojis concluída. Elementos modificados:', elementsModified);
    }
    
    // Executar remoção de emojis
    removeEmojis();
    
    // Executar múltiplas vezes para garantir que funcione
    setTimeout(removeEmojis, 500);
    setTimeout(removeEmojis, 1500);
    setTimeout(removeEmojis, 3000);
    
    // Executar quando a página carregar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removeEmojis);
    }
})();
