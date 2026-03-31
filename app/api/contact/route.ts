import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  await supabase.from("contacts").insert([{ name, email, message }]);
  return NextResponse.json({ ok: true });
}