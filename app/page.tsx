import { getTarefas } from "@/lib/tarefas";
import NovaTarefa from "@/components/NovaTarefa";

export default async function Page() {
  const tarefas = await getTarefas();

  return (
    <div>
      <h1>Lista de tarefas</h1>

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>{t.texto}</li>
        ))}
      </ul>

      <NovaTarefa />
    </div>
  );
}