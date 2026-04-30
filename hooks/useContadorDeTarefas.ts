import { useMemo } from 'react';
import { Tarefas } from '../lib/tarefas';

export function useContadorDeTarefas(tarefas: Tarefas[]) {
    const total = useMemo(() => tarefas.length, [tarefas])
    return total
}