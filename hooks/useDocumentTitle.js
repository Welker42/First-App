import { useEffect } from 'react';

/**
 * Hook personalizado para atualizar o título do documento.
 *
 * @param {string} title - O título a ser definido para o documento.
 */
function useDocumentTitle(title) {
  useEffect(() => {
    // Atualiza o título do documento sempre que o valor de title mudar
    document.title = title;
  }, [title]); // Dependência é o título
}

export default useDocumentTitle;
