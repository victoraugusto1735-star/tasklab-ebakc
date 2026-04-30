import { render, screen } from "@testing-library/react"
import Page from "../app/page"

// mock da função de dados
jest.mock("../lib/tarefas", () => ({
  getTarefas: async () => [
    { id: 1, texto: "Teste 1" },
    { id: 2, texto: "Teste 2" },
  ],
}))

describe("Page", () => {
  it("renderiza tarefas", async () => {
    const PageComponent = await Page()

    render(PageComponent)

    expect(screen.getByText("Teste 1")).toBeInTheDocument()
    expect(screen.getByText("Teste 2")).toBeInTheDocument()
  })
})