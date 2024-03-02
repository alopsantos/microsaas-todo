import { auth } from "@/services/auth";
export default async function Page() {
  const session = await auth();
  return (
    <main>
      <div>
        <pre>{JSON.stringify(session?.user?.email, null, 1)}</pre>
      </div>
    </main>
  );
}
