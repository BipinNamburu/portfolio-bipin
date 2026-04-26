import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ model: 'gpt-4o-mini', messages, max_tokens: 300, temperature: 0.6 }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: `OpenAI error ${res.status}` }, { status: res.status });
  }

  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content?.trim() ?? "Sorry, I couldn't put that together.";
  return NextResponse.json({ reply });
}
