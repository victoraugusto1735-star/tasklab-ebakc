import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

describe('useContadorDeTarefas', () => {
    it('deve retornar o número total de tarefas', () => {
        const tarefas = [
            { id: 1, texto: 'Tarefas 1' },
            { id: 2, texto: 'Tarefas 2' },
        ]

        const { result } = renderHook(() => 
            useContadorDeTarefas(tarefas)
        )

        expect(result.current).toBe(2)
    })
})
