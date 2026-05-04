"use client";

import { useState } from "react";

export default function NovaTarefa() {
  const [texto, setTexto] = useState("");

  function adicionarTarefa() {
    console.log("Nova tarefa:", texto);
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