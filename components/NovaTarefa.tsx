"use client";

import { useState } from "react";

type props = {
  onAdd: (texto: string) => void;
};
export default function NovaTarefa({ onAdd }: props) {
  const [texto, setTexto] = useState("");

  function adicionarTarefa() {
    onAdd(texto);
    setTexto("");
  }

  return (
    <div>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite uma tarefa"
      />

      <button onClick={adicionarTarefa}>
        Adicionar
      </button>
    </div>
  );
}