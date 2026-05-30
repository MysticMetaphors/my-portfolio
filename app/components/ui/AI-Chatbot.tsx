"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Loader2,
  Mail,
  Phone,
  Send,
  Sparkles,
  X,
  Linkedin,
  Box,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";

type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  url: string | null;
};
type Service = { name: string; description: string };
type ContactInfo = {
  email: string;
  phone: string;
  linkedin: string;
  responseTime?: string;
};
type TechStack = { category: string; items: string[] };

const STARTER_SUGGESTIONS = [
  "What services do you offer?",
  "Show me your projects",
  "How can I hire you?",
];

const INITIAL_MESSAGE: UIMessage = {
  id: "welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Hi! I'm Von's AI assistant. Ask me about projects, services, tech stack, or how to get in touch.",
    },
  ],
};

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    messages: [INITIAL_MESSAGE],
  });

  const loading = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  const latestAssistantSuggestions = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      const m = messages[i];
      if (m.role !== "assistant") continue;
      for (const part of m.parts) {
        if (
          part.type === "tool-suggestFollowUps" &&
          "output" in part &&
          part.output &&
          typeof part.output === "object" &&
          "questions" in part.output
        ) {
          return (part.output as { questions: string[] }).questions;
        }
      }
      return null;
    }
    return null;
  }, [messages]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <button
            key="chat-fab"
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open AI chat"
            className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-blue-primary px-3 md:px-4 py-3 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_40px_#0095ff] cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full bg-blue-primary opacity-60 blur-md -z-10 animate-pulse" />
            <Box className="size-4.5" />
            <span className="hidden sm:inline text-sm">AI Assistant</span>
            <span className="absolute top-0 right-0 flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-green-400 border border-black" />
            </span>
          </button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="fixed bottom-6 right-6 p-2 z-50 flex h-[min(640px,calc(100vh-3rem))] w-[min(380px,calc(100vw-3rem))] flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-900"
          >
            <div className="flex flex-col overflow-hidden rounded-lg border border-gray-700 h-[min(640px,calc(100vh-3rem))]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                  maskImage:
                    "radial-gradient(circle at 30% 0%, rgba(0,0,0,0.7) 0%, transparent 70%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 30% 0%, rgba(0,0,0,0.7) 0%, transparent 70%)",
                }}
              />

              <div className="relative rounded-t-lg z-10 flex items-center justify-between border-b border-gray-700/80 bg-black-primary/60 px-4 py-3 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="relative flex size-9 items-center justify-center rounded-full bg-blue-primary/15 border border-blue-primary/40">
                    <Box className="size-4.5 text-blue-primary" />
                    <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-green-400 ring-2 ring-gray-900" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <div className="flex items-center gap-1.5">
                      <span className="text-lg font-jersey uppercase tracking-widest text-white">
                        Von's AI Assistant
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="rounded-full p-1.5 text-gray-400 hover:bg-white/5 hover:text-white transition cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div
                ref={scrollRef}
                className="scrollbar-custom relative z-10 flex-1 overflow-y-auto px-4 py-4 space-y-3"
              >
                {messages.map((m) => (
                  <MessageBubble key={m.id} message={m} />
                ))}

                {loading && <TypingDots />}

                {error && (
                  <div className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                    Something went wrong. Please try again.
                  </div>
                )}

                {messages.length === 1 && !loading && (
                  <SuggestionChips
                    label="Suggested"
                    items={STARTER_SUGGESTIONS}
                    onPick={send}
                  />
                )}

                {!loading && latestAssistantSuggestions && messages.length > 1 && (
                  <SuggestionChips
                    label="You might ask"
                    items={latestAssistantSuggestions}
                    onPick={send}
                  />
                )}
              </div>

              <form
                onSubmit={handleSubmit}
                className="relative rounded-b-lg z-10 border-t border-gray-700/80 bg-black-primary/60 p-3 backdrop-blur"
              >
                <div className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/80 pl-4 pr-1.5 py-1 focus-within:border-blue-primary focus-within:shadow-[0_0_15px_rgba(0,149,255,0.25)] transition">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything..."
                    disabled={loading}
                    className="flex-1 bg-transparent py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    aria-label="Send message"
                    className="flex size-9 items-center justify-center rounded-full bg-blue-primary text-black shadow-[0_0_10px_#0095ff] transition hover:shadow-[0_0_25px_#0095ff] disabled:opacity-40 disabled:shadow-none disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Send className="size-4" />
                    )}
                  </button>
                </div>
                <p className="mt-2 text-center text-[10px] text-gray-500">
                  AI responses are generated — for anything official use the Contact form.
                </p>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MessageBubble({ message }: { message: UIMessage }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[90%] space-y-2 ${isUser ? "items-end" : "items-start"} flex flex-col`}
      >
        {message.parts.map((part, i) => {
          if (part.type === "text") {
            if (!part.text) return null;
            return (
              <div
                key={i}
                className={`rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                  isUser
                    ? "bg-blue-primary text-black font-medium rounded-br-sm shadow-[0_0_10px_rgba(0,149,255,0.4)]"
                    : "bg-white/5 border border-white/10 text-gray-100 rounded-bl-sm"
                }`}
              >
                {part.text}
              </div>
            );
          }

          if (part.type === "tool-showProjects") {
            return <ToolProjects key={i} part={part} />;
          }
          if (part.type === "tool-showServices") {
            return <ToolServices key={i} part={part} />;
          }
          if (part.type === "tool-showContact") {
            return <ToolContact key={i} part={part} />;
          }
          if (part.type === "tool-showTechStack") {
            return <ToolTechStack key={i} part={part} />;
          }

          return null;
        })}
      </div>
    </motion.div>
  );
}

type ToolPart = {
  state: string;
  output?: unknown;
};

function ToolSkeleton({ label }: { label: string }) {
  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-gray-400 flex items-center gap-2">
      <Loader2 className="size-3.5 animate-spin text-blue-primary" />
      {label}
    </div>
  );
}

function ToolProjects({ part }: { part: ToolPart }) {
  if (part.state !== "output-available" || !part.output) {
    return <ToolSkeleton label="Loading projects…" />;
  }
  const { projects } = part.output as { projects: Project[] };
  if (!projects?.length) return null;

  return (
    <div className="w-full space-y-2">
      {projects.map((p, i) => (
        <a
          key={i}
          href={p.url ?? "/projects"}
          target={p.url ? "_blank" : undefined}
          rel={p.url ? "noopener noreferrer" : undefined}
          className="group block rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-blue-primary/60 hover:bg-blue-primary/5"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-blue-primary/80">
                {p.type}
              </span>
              <span className="text-sm font-semibold text-white">{p.title}</span>
            </div>
            {p.url && (
              <ExternalLink className="size-3.5 text-gray-500 group-hover:text-blue-primary" />
            )}
          </div>
          <p className="mt-1.5 line-clamp-2 text-xs text-gray-400 leading-relaxed">
            {p.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {p.stack.slice(0, 4).map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-gray-300"
              >
                {s}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}

function ToolServices({ part }: { part: ToolPart }) {
  if (part.state !== "output-available" || !part.output) {
    return <ToolSkeleton label="Loading services…" />;
  }
  const { services } = part.output as { services: Service[] };
  if (!services?.length) return null;

  return (
    <div className="grid w-full grid-cols-1 gap-2">
      {services.map((s, i) => (
        <div
          key={i}
          className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-blue-primary/40"
        >
          <p className="text-sm font-semibold text-white">{s.name}</p>
          <p className="mt-1 text-xs text-gray-400 leading-relaxed">{s.description}</p>
        </div>
      ))}
    </div>
  );
}

function ToolContact({ part }: { part: ToolPart }) {
  if (part.state !== "output-available" || !part.output) {
    return <ToolSkeleton label="Loading contact…" />;
  }
  const c = part.output as ContactInfo;

  return (
    <div className="w-full rounded-xl border border-blue-primary/30 bg-blue-primary/5 p-3">
      <p className="mb-2 text-[10px] uppercase tracking-wider text-blue-primary/80">
        Get in touch
      </p>
      <div className="space-y-1.5">
        <a
          href={`mailto:${c.email}`}
          className="flex items-center gap-2 text-sm text-white hover:text-blue-primary transition"
        >
          <Mail className="size-3.5 text-blue-primary" />
          {c.email}
        </a>
        <a
          href={`tel:${c.phone.replace(/[^+\d]/g, "")}`}
          className="flex items-center gap-2 text-sm text-white hover:text-blue-primary transition"
        >
          <Phone className="size-3.5 text-blue-primary" />
          {c.phone}
        </a>
        <a
          href={c.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white hover:text-blue-primary transition"
        >
          <Linkedin className="size-3.5 text-blue-primary" />
          LinkedIn
        </a>
      </div>
      {c.responseTime && (
        <p className="mt-2 text-[11px] text-gray-400">Replies {c.responseTime.toLowerCase()}.</p>
      )}
      <a
        href="/contact"
        className="mt-3 inline-flex items-center justify-center rounded-md bg-blue-primary px-3 py-1.5 text-xs font-semibold text-black shadow-[0_0_10px_#0095ff] hover:shadow-[0_0_25px_#0095ff] transition"
      >
        Open contact form
      </a>
    </div>
  );
}

function ToolTechStack({ part }: { part: ToolPart }) {
  if (part.state !== "output-available" || !part.output) {
    return <ToolSkeleton label="Loading stack…" />;
  }
  const { category, items } = part.output as TechStack;
  if (!items?.length) return null;

  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/5 p-3">
      <p className="mb-2 text-[10px] uppercase tracking-wider text-blue-primary/80">
        {category === "all" ? "Primary stack" : `${category} stack`}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((t) => (
          <span
            key={t}
            className="rounded-full border border-blue-primary/30 bg-blue-primary/10 px-2.5 py-0.5 text-xs text-blue-primary"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SuggestionChips({
  label,
  items,
  onPick,
}: {
  label: string;
  items: string[];
  onPick: (text: string) => void;
}) {
  return (
    <div className="pt-2">
      <p className="mb-2 text-[11px] uppercase tracking-wider text-gray-500">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onPick(s)}
            className="rounded-full border border-blue-primary/40 bg-blue-primary/5 px-3 py-1 text-xs text-blue-primary transition hover:bg-blue-primary hover:text-black hover:shadow-[0_0_15px_#0095ff] cursor-pointer"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start"
    >
      <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border border-white/10 bg-white/5 px-3.5 py-2.5">
        <span className="size-1.5 rounded-full bg-blue-primary animate-bounce [animation-delay:-0.3s]" />
        <span className="size-1.5 rounded-full bg-blue-primary animate-bounce [animation-delay:-0.15s]" />
        <span className="size-1.5 rounded-full bg-blue-primary animate-bounce" />
      </div>
    </motion.div>
  );
}
