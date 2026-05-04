import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NovaTarefa from "@/components/NovaTarefa";

describe("NovaTarefa", () => {
  it("deve renderizar o input e o botão", () => {
    render(<NovaTarefa />)

    expect(
      screen.getByPlaceholderText("Digite uma tarefa")
    ).toBeInTheDocument()

    expect(screen.getByText("Adicionar")).toBeInTheDocument()
  })

  it("não enviar input vazio", () => {
    render(<NovaTarefa />)

    fireEvent.click(screen.getByText("Adicionar"))
  })

  it("envia tarefa corretamente", () => {
    render(<NovaTarefa />)

    fireEvent.change(
      screen.getByPlaceholderText("Digite uma tarefa"),
      {
        target: { value: "Nova tarefa" }
      }
    )

    fireEvent.click(screen.getByText("Adicionar"))
  })
})
    