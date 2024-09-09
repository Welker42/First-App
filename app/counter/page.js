"use client"

import React from 'react';
import useCounter from '@/hooks/useCounter';

function Counter() {
  // Usando o hook personalizado para gerenciar o contador
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Redefinir</button>
    </div>
  );
}

export default Counter;
