export type Tarefas = {
    id: number
    texto: string
    concluida: boolean
}
const tarefas: Tarefas[] = [
    { id: 1, texto: 'estudar next', concluida: false },
    { id: 2, texto: 'aprender testes', concluida: false },
]

export const getTarefas = async (): Promise<Tarefas[]> => {
    return Promise.resolve(tarefas)
}
 export const addTarefa = ( texto: string) => {
    const nova = {
        id: Date.now(),
        texto,
        concluida: false,
    }
    tarefas.push(nova)
    return nova
    }
