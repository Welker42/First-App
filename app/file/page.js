"use client";

import React, { useState } from 'react';
import useDocumentTitle from '@/hooks/useDocumentTitle'; // Ajuste o caminho conforme necessário

function TitleUpdater() {
  const [title, setTitle] = useState('Título Inicial');

  // Usa o hook para atualizar o título do documento
  useDocumentTitle(title);

  return (
    <div>
      <h1>Atualize o Título da Página</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Digite o novo título"
      />
      <p>O título da página será atualizado com o texto acima.</p>
    </div>
  );
}

export default TitleUpdater;
