import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NovaTarefa from "@/components/NovaTarefa";

describe("NovaTarefa", () => {
  it("deve renderizar o input e o botão", () => {
    const onAddMock = jest.fn()

    render(<NovaTarefa onAdd={onAddMock} />)

    expect(
      screen.getByPlaceholderText("Digite uma tarefa")
    ).toBeInTheDocument()

    expect(screen.getByText("Adicionar")).toBeInTheDocument()
  })

  it("não enviar input vazio", () => {
    const onAddMock = jest.fn()

    render(<NovaTarefa onAdd={onAddMock} />)

    fireEvent.click(screen.getByText("Adicionar"))

    expect(onAddMock).not.toHaveBeenCalled()
  })

  it("envia tarefa corretamente", () => {
    const onAddMock = jest.fn()

    render(<NovaTarefa onAdd={onAddMock} />)

    fireEvent.change(
      screen.getByPlaceholderText("Digite uma tarefa"),
      {
        target: { value: "Nova tarefa" }
      }
    )

    fireEvent.click(screen.getByText("Adicionar"))

    expect(onAddMock).toHaveBeenCalledWith("Nova tarefa")
  })
})