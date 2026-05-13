"use client"

import { useState, useEffect } from "react"
import NovaTarefa from "./NovaTarefa"

type Tarefa = {
  id: number
  texto: string
  nova?: boolean
}

export default function TarefasClient({
  tarefasIniciais
}: {
  tarefasIniciais: Tarefa[]
}) {
  const [tarefas, setTarefas] = useState(tarefasIniciais)

  useEffect(() => {
    interface BeforeInstallPromptEvent extends Event {
      prompt: () => Promise<void>
      userChoice: Promise<{
        outcome: string
        platform: string
      }>
    }

    let deferredPrompt: BeforeInstallPromptEvent | null = null

    const installBtn = document.querySelector(
      ".install-btn"
    ) as HTMLButtonElement

    const handleInstallPrompt = (e: Event) => {
      e.preventDefault()

      deferredPrompt = e as BeforeInstallPromptEvent

      console.log("PWA disponível para instalação")

      if (installBtn) {
        installBtn.style.display = "block"
      }
    }

    const handleClick = async () => {
      if (!deferredPrompt) return

      await deferredPrompt.prompt()

      const { outcome } =
        await deferredPrompt.userChoice

      console.log(outcome)

      deferredPrompt = null
      installBtn.style.display = "none"
    }

    window.addEventListener(
      "beforeinstallprompt",
      handleInstallPrompt
    )

    installBtn?.addEventListener(
      "click",
      handleClick
    )

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleInstallPrompt
      )

      installBtn?.removeEventListener(
        "click",
        handleClick
      )
    }
  }, [])

  function onAdd(texto: string) {
    const nova = {
      id: Date.now(),
      texto,
      nova: true
    }

    setTarefas((prev) => [...prev, nova])
  }

  function removerTarefa(id: number) {
    setTarefas((prev) =>
      prev.filter((t) => t.id !== id)
    )
  }

  return (
    <>
      <button
        className="install-btn"
        style={{ display: "none" }}
      >
        Instalar App
      </button>

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            {t.texto}

            {t.nova && (
              <button
                className="delete-btn"
                onClick={() =>
                  removerTarefa(t.id)
                }
              >
                Excluir
              </button>
            )}
          </li>
        ))}
      </ul>

      <NovaTarefa onAdd={onAdd} />
    </>
  )
}