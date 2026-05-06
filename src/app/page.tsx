import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-50 p-8">
      <div className="w-full max-w-lg rounded-2xl bg-white p-10 shadow-md text-center">
        <h1 className="mb-3 text-4xl font-bold text-gray-900">
          🚀 Hackathon Starter
        </h1>
        <p className="mb-8 text-gray-500">
          Next.js · TypeScript · Tailwind CSS · Supabase
        </p>

        {user ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-600">
              Signed in as <span className="font-medium">{user.email}</span>
            </p>
            <Link
              href="/dashboard"
              className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700"
            >
              Go to Dashboard →
            </Link>
          </div>
        ) : (
          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Get started →
          </Link>
        )}
      </div>
    </main>
  );
}
