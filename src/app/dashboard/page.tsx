import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  async function signOut() {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-50 p-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mb-6 text-sm text-gray-500">
          Signed in as <span className="font-medium">{user.email}</span>
        </p>
        <form action={signOut}>
          <button
            type="submit"
            className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
          >
            Sign out
          </button>
        </form>
      </div>
    </main>
  );
}
