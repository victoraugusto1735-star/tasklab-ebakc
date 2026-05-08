import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

describe("useContadorDeTarefas", () => {
  it("deve retornar o número total de tarefas", () => {
    const tarefas = [
      { id: 1, texto: "Tarefa 1", concluida: false },
      { id: 2, texto: "Tarefa 2", concluida: true },
    ];

    const { result } = renderHook(() =>
      useContadorDeTarefas(tarefas)
    );

    expect(result.current).toBe(2);
  });
});