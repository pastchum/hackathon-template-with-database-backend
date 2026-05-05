import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * GET /api/example
 *
 * Example Route Handler that queries Supabase.
 * Replace "your_table" with a real table name.
 */
export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("your_table")
    .select("*")
    .limit(10);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}
