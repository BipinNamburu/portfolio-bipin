'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { profile, experiences, skills } from '../data';

type Msg = { role: 'user' | 'assistant' | 'system'; content: string };

// Built once from data.ts so the bot has full context
const SYSTEM_PROMPT = `You are a friendly, concise assistant on Bipin Namburu's portfolio website. You answer questions about Bipin on his behalf in a warm, conversational tone.

PROFILE
- Name: ${profile.name}
- Role: ${profile.title} (${profile.yearsExperience}+ years)
- Location: ${profile.location}
- Email: ${profile.email}
- GitHub: ${profile.github}
- LinkedIn: ${profile.linkedin}

EXPERIENCE
${experiences
  .map(
    (e) =>
      `${e.company} — ${e.role} (${e.period}, ${e.location})\n${e.projects
        .map(
          (p) =>
            `  • ${p.name} [${p.stack.join(', ')}]: ${p.bullets.join(' ')}`
        )
        .join('\n')}`
  )
  .join('\n\n')}

SKILLS
${skills.map((c) => `${c.label}: ${c.items.map((i) => i.name).join(', ')}`).join('\n')}

RULES
- Keep answers under 4 sentences unless asked for more detail.
- If asked something not in this context, say you're not sure and suggest emailing Bipin.
- Don't invent projects, dates, or numbers.
- Refer to Bipin in third person.`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      content:
        "Hi — I'm Bipin's portfolio assistant. Ask me about his work, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, open]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Msg = { role: 'user', content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    if (!apiKey) {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            "I'm not connected right now (no API key configured). Try emailing Bipin directly at bipinnamburu2244@gmail.com.",
        },
      ]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages
              .filter((m) => m.role !== 'system')
              .map((m) => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMsg.content },
          ],
          max_tokens: 300,
          temperature: 0.6,
        }),
      });

      if (!res.ok) throw new Error(`API ${res.status}`);
      const data = await res.json();
      const reply =
        data.choices?.[0]?.message?.content?.trim() ??
        "Sorry, I couldn't put that together.";
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            "Something went wrong reaching the AI. You can always email Bipin at bipinnamburu2244@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-ink text-paper flex items-center justify-center bot-shadow hover:scale-105 transition-transform"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.7, 0, 0.2, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[520px] bg-paper border border-ink/10 bot-shadow flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-ink text-paper px-5 py-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <div>
                <p className="font-serif text-lg leading-none">Ask about Bipin</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-paper/50 mt-1">
                  Portfolio Assistant
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-ink text-paper'
                        : 'bg-ink/5 text-ink border border-line/60'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-ink/5 border border-line/60 px-4 py-2.5 text-sm flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-line p-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                disabled={loading}
                placeholder="Ask anything…"
                className="flex-1 bg-transparent border border-line px-3 py-2 text-sm focus:outline-none focus:border-ink transition-colors disabled:opacity-50"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="bg-ink text-paper px-4 text-sm uppercase tracking-wider hover:bg-accent transition-colors disabled:opacity-30"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
