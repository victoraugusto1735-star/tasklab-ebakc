"use client";

import { useState } from "react";

type Props = {
  onAdd: (texto: string) => void;
};

export default function NovaTarefa({ onAdd }: Props) {
  const [texto, setTexto] = useState("");

  function adicionarTarefa() {
    if (!texto.trim()) return;

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