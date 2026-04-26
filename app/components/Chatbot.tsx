'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { profile, experiences, skills } from '../data';

type Msg = { role: 'user' | 'assistant' | 'system'; content: string };

const spring = { type: 'spring', stiffness: 480, damping: 32 } as const;
const springFast = { type: 'spring', stiffness: 600, damping: 38 } as const;

const SYSTEM_PROMPT = `You are a friendly, concise assistant on Bipin Namburu's portfolio website. You answer questions about Bipin on his behalf in a warm, conversational tone.

PROFILE
- Name: ${profile.name}
- Role: ${profile.title} (${profile.yearsExperience}+ years)
- Location: ${profile.location}
- Email: ${profile.email}
- Phone: ${profile.phone}
- GitHub: ${profile.github}
- LinkedIn: ${profile.linkedin}

EXPERIENCE
${experiences
  .map(
    (e) =>
      `${e.company}  ${e.role} (${e.period}, ${e.location})\n${e.projects
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
- When asked for contact info (email, phone, LinkedIn, GitHub), always share the exact values from the profile above.
- If asked something not in this context, say you're not sure and suggest emailing Bipin.
- Don't invent projects, dates, or numbers.
- Refer to Bipin in third person.`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      content: "Hi  I'm Bipin's portfolio assistant. Ask me about his work, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
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
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
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
        data.choices?.[0]?.message?.content?.trim() ?? "Sorry, I couldn't put that together.";
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            'Something went wrong. You can always email Bipin at bipinnamburu2244@gmail.com.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating trigger */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Pulsing ring when closed */}
        <AnimatePresence>
          {!open && (
            <motion.span
              key="ping"
              className="absolute inset-0 rounded-full bg-t1"
              initial={{ opacity: 0.4, scale: 1 }}
              animate={{ opacity: 0, scale: 1.75 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close chat' : 'Open chat'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.88 }}
          transition={springFast}
          className="relative w-12 h-12 rounded-full bg-t1 text-bg flex items-center justify-center shadow-card-lg"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={springFast}
              >
                <X size={18} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                transition={springFast}
              >
                <MessageSquare size={18} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.72, y: 32, filter: 'blur(14px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.78, y: 20, filter: 'blur(10px)' }}
            transition={{
              ...spring,
              opacity: { duration: 0.18 },
              filter: { duration: 0.22 },
            }}
            style={{ bottom: '5rem', right: '1.5rem', transformOrigin: 'bottom right' }}
            className="fixed z-50 w-[calc(100vw-3rem)] max-w-sm h-[480px] flex flex-col rounded-2xl border border-border bg-surface shadow-card-lg overflow-hidden"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, ...springFast }}
              className="px-4 py-3.5 border-b border-border flex items-center gap-3 bg-surface-2"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-green shrink-0"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div>
                <p className="font-serif text-base font-bold text-t1 leading-none">Ask about Bipin</p>
                <p className="text-[10px] font-mono text-t3 mt-0.5 uppercase tracking-widest">
                  Portfolio assistant
                </p>
              </div>
            </motion.div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.role === 'user' ? 24 : -24, scale: 0.93 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 420,
                    damping: 30,
                    delay: i === 0 ? 0.18 : 0,
                  }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed rounded-xl break-words min-w-0 ${
                      m.role === 'user'
                        ? 'bg-t1 text-bg rounded-br-sm'
                        : 'bg-surface-2 border border-border text-t2 rounded-bl-sm'
                    }`}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <motion.div
                  initial={{ opacity: 0, x: -16, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className="flex justify-start"
                >
                  <div className="bg-surface-2 border border-border px-3.5 py-2.5 flex gap-1 rounded-xl rounded-bl-sm">
                    {[0, 0.16, 0.32].map((delay, i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-t3"
                        animate={{ y: [0, -5, 0], scale: [1, 1.25, 1] }}
                        transition={{ duration: 0.55, repeat: Infinity, delay, ease: 'easeInOut' }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, ...springFast }}
              className="border-t border-border p-3 flex gap-2 bg-surface"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                disabled={loading}
                placeholder="Ask anything…"
                className="flex-1 border border-border bg-bg text-t1 placeholder:text-t3 px-3 py-2 text-sm rounded-lg focus:outline-none focus:border-border-strong transition-colors disabled:opacity-40"
              />
              <motion.button
                onClick={send}
                disabled={loading || !input.trim()}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.88 }}
                transition={springFast}
                className="bg-t1 text-bg px-3.5 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed flex items-center"
              >
                <motion.div
                  animate={loading ? { rotate: 360 } : { rotate: 0 }}
                  transition={
                    loading
                      ? { duration: 1, repeat: Infinity, ease: 'linear' }
                      : { duration: 0.2 }
                  }
                >
                  <Send size={15} />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
