import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain
} from "@/components/dashboard/page";
import { TodoDataTable } from "./_components/todo-data-table";
import { TodoUpsertSheet } from "./_components/todo-upsert-sheet";
import { Button } from "@/components/ui/button";
import { Plus } from "@phosphor-icons/react/dist/ssr/Plus";
import { getUserTodos } from "./actions";

export default async function Page() {
  const todos = await getUserTodos();
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>
          <TodoUpsertSheet>
            <Button variant={"outline"} size="sm" className="flex gap-4">
              <Plus size={20} />
              Add Todo
            </Button>
          </TodoUpsertSheet>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <TodoDataTable data={todos} />
      </DashboardPageMain>
    </DashboardPage>
  );
}
