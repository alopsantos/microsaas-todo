"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { useRef } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Todo } from "../types";
import { upsertTodoSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { upsertTodo } from "../actions";
import { toast } from "@/components/ui/use-toast";

type TodoUpsertSheetProps = {
  children?: React.ReactNode;
  defaultValue?: Todo;
};
export function TodoUpsertSheet({ children }: TodoUpsertSheetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(upsertTodoSchema)
  });
  const onSubmit = form.handleSubmit(async (data) => {
    await upsertTodo(data);
    router.refresh();
    ref.current?.click();
    toast({
      title: "Success",
      description: "Your todo has been updated successfully."
    });
  });
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>{children}</div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da tarefa</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome da tarefa" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SheetFooter>
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
