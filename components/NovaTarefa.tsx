"use client"

import { useState } from "react"

export default function NovaTarefa({
  onAdd
}: {
  onAdd: (texto: string) => void
}) {
  const [texto, setTexto] = useState("")

  function handleAdd() {
    if (!texto.trim()) return

    onAdd(texto)
    setTexto("")
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={texto}
        onChange={(e) =>
          setTexto(e.target.value)
        }
      />

      <button
        className="add-btn"
        onClick={handleAdd}
      >
        Adicionar
      </button>
    </div>
  )
}