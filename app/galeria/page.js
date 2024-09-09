"use client";
import React from 'react';
import useToggle from '@/hooks/useToggle'; // Certifique-se de ajustar o caminho conforme necessário


function ToggleComponent() {
  // Usa o hook useToggle para gerenciar o estado booleano
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Esconder Texto' : 'Mostrar Texto'}
      </button>
      {isVisible && <p>Isso é um exemplo da função de esconder e mostrar Texto.
        <img src="https://camo.githubusercontent.com/1ecb2e9568d5f780044c7f401a8e54226e921a9fa74868131f82bb45872e0214/68747470733a2f2f63646e622e61727473746174696f6e2e636f6d2f702f6173736574732f696d616765732f696d616765732f3033362f3132352f3430352f6f726967696e616c2f69676f722d667265697461732d6d6573612e6769663f31363136373739353632" alt="Wallpaper"/>
        </p>}
    </div>
  );
}

export default ToggleComponent;
