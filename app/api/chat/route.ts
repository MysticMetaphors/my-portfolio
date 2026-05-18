import { streamText, tool, convertToModelMessages, stepCountIs, type UIMessage } from "ai";
import { google } from "@ai-sdk/google";
import { z } from "zod";
import portfolio from "@/portfolio-context.json";

export const maxDuration = 30;

const systemPrompt = `
You are "${portfolio.assistant.name}", a chat assistant embedded in Von Bryan's portfolio site.

PERSONA
${portfolio.assistant.persona}

GROUND TRUTH (do not invent anything outside this):
${JSON.stringify(
  {
    person: portfolio.person,
    philosophy: portfolio.philosophy,
    services: portfolio.services,
    offers: portfolio.offers,
    pricing: portfolio.pricing,
    process: portfolio.process,
    techStack: portfolio.techStack,
    projects: portfolio.projects,
    experience: portfolio.experience,
    contact: portfolio.contact,
    site: portfolio.site,
  },
  null,
  2
)}

RULES
${portfolio.assistant.rules.map((r) => `- ${r}`).join("\n")}
- Speak in third person about Von (e.g. "Von builds...").
- Keep prose replies to 1–3 sentences unless the user asks for detail. Use markdown sparingly.
- Use tools to render rich UI instead of describing the same info in text:
    - showProjects → user asks about projects, work, portfolio, or a specific project type.
    - showServices → user asks what Von offers / what he does.
    - showContact → user asks how to hire, contact, email, or reach Von.
    - showTechStack → user asks about stack, tools, languages, or technologies.
  When you call a UI tool, your accompanying text should be ONE short sentence — the tool result carries the rest.

FOLLOW-UPS (REQUIRED)
- ALWAYS finish every reply by calling the suggestFollowUps tool with 3 short, contextual questions the user is most likely to ask next.
- Questions must be under 8 words each, written from the user's POV ("Show me your latest project", not "Want to see his latest project?").
- Never repeat the user's last question. Never suggest something already shown in this turn.
`.trim();

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
    stopWhen: stepCountIs(5),
    tools: {
      showProjects: tool({
        description:
          "Render a grid of project cards in the chat. Use when the user asks about projects, work, portfolio, or a specific project type.",
        inputSchema: z.object({
          filter: z
            .enum(["all", "landing", "engineered", "featured"])
            .optional()
            .describe("Filter projects. Default 'all'."),
          limit: z.number().int().min(1).max(8).optional().describe("Max cards to show. Default 3."),
        }),
        execute: async ({ filter = "all", limit = 3 }) => {
          let list = portfolio.projects.slice();
          if (filter === "landing") list = list.filter((p) => p.type === "Landing Page");
          if (filter === "engineered") list = list.filter((p) => p.type === "Engineered Solution");
          if (filter === "featured") list = list.filter((p) => "featured" in p && p.featured);
          return {
            projects: list.slice(0, limit).map((p) => ({
              title: p.title,
              type: p.type,
              description: p.description,
              stack: p.stack,
              url: p.url ?? null,
            })),
          };
        },
      }),

      showServices: tool({
        description:
          "Render a grid of service cards. Use when the user asks what services Von offers or what he does.",
        inputSchema: z.object({}),
        execute: async () => ({ services: portfolio.services }),
      }),

      showContact: tool({
        description:
          "Render a contact card with email, phone, and LinkedIn. Use when the user asks how to hire, reach, or contact Von.",
        inputSchema: z.object({}),
        execute: async () => ({
          email: portfolio.contact.email,
          phone: portfolio.contact.phone,
          linkedin: portfolio.contact.linkedin,
          responseTime: portfolio.person.responseTime,
        }),
      }),

      showTechStack: tool({
        description:
          "Render tech-stack chips. Use when the user asks about Von's stack, tools, languages, or technologies.",
        inputSchema: z.object({
          category: z.enum(["all", "frontend", "backend", "database", "tools"]).optional(),
        }),
        execute: async ({ category = "all" }) => {
          const stack = portfolio.techStack;
          const items =
            category === "all"
              ? stack.primaryStack
              : (stack[category as "frontend" | "backend" | "database" | "tools"] ?? stack.primaryStack);
          return { category, items };
        },
      }),

      suggestFollowUps: tool({
        description:
          "REQUIRED final tool call. Provide 3 short, contextual follow-up questions written from the user's POV.",
        inputSchema: z.object({
          questions: z.array(z.string().min(3).max(60)).length(3),
        }),
        execute: async ({ questions }) => ({ questions }),
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
