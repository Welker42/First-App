import { useState } from 'react';

/**
 * Hook personalizado para gerenciar um contador.
 *
 * @param {number} initialValue - O valor inicial do contador.
 * @returns {Array} - Um array contendo o valor do contador e funções para manipular o contador.
 */
function useCounter(initialValue = 0) {
  // Inicializa o estado do contador
  const [count, setCount] = useState(initialValue);

  // Função para incrementar o contador
  const increment = () => setCount(prevCount => prevCount + 1);

  // Função para decrementar o contador
  const decrement = () => setCount(prevCount => prevCount - 1);

  // Função para redefinir o contador para o valor inicial
  const reset = () => setCount(initialValue);

  // Retorna o estado do contador e as funções manipuladoras
  return [count, increment, decrement, reset];
}

export default useCounter;
