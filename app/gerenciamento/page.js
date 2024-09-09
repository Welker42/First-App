// app/gerenciamento/page.js
"use client";

import React from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

function Counter() {
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default Counter;
