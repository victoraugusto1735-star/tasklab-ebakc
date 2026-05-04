"use client"

import { useState } from "react"
import NovaTarefa from "./NovaTarefa"

type Tarefa = {
  id: number
  texto: string
}

export default function TarefasClient({ tarefasIniciais }: { tarefasIniciais: Tarefa[] }) {
  const [tarefas, setTarefas] = useState(tarefasIniciais)

  function onAdd(texto: string) {
    const nova = {
      id: Date.now(),
      texto,
    }

    setTarefas((prev) => [...prev, nova])
  }

  return (
    <>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>{t.texto}</li>
        ))}
      </ul>

      <NovaTarefa/>
    </>
  )
}