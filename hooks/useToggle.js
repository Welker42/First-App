import { useState, useCallback } from 'react';

function useToggle(initialValue = false) {
  // Estado que armazena o valor booleano
  const [value, setValue] = useState(initialValue);

  // Função para alternar o valor
  const toggle = useCallback(() => {
    setValue(prevValue => !prevValue);
  }, []);

  return [value, toggle];
}

export default useToggle;