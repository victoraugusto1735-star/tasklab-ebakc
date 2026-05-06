import { getTarefas } from "@/lib/tarefas";
import TarefasClient from "@/components/TarefasClient";

export default async function Page() {
  const tarefas = await getTarefas();

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <TarefasClient tarefasIniciais={tarefas} />
    </div>
  );
}