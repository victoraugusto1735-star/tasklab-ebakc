"use client"

import { useState } from "react"

type Props = {
  onAdd: (texto: string) => void
}

export default function NovaTarefa({ onAdd }: Props) {
  const [texto, setTexto] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!texto.trim()) return
    onAdd(texto)
    setTexto("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="nova tarefa"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}