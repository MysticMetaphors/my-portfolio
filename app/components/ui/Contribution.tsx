"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

// ── Types ─────────────────────────────────────────────────────────────────────

interface ContributionDay {
  date: string;
  contributionCount: number;
  weekday: number;
}

interface ContributionWeek {
  firstDay: string;
  contributionDays: ContributionDay[];
}

interface ContributionData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function getLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

const LEVEL_BG: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: "bg-gray-800",
  1: "bg-[#0e4429]",
  2: "bg-[#006d32]",
  3: "bg-[#26a641]",
  4: "bg-[#39d353]",
};

const CELL_SIZE = 11; // px
const CELL_GAP = 3;  // px
const COL_WIDTH = CELL_SIZE + CELL_GAP; // 14px per week column
const MIN_LABEL_GAP = 28; // px — minimum pixels between two month labels

/**
 * Returns month label positions: an array of { monthIndex, weekIndex }
 * marking the first week that belongs to a new month.
 */
function getMonthMarkers(weeks: ContributionWeek[]) {
  const markers: { label: string; x: number }[] = [];
  let lastMonth = -1;
  let lastX = -MIN_LABEL_GAP;

  weeks.forEach((week, i) => {
    // Use the first day of the week to determine the month
    const d = new Date(week.firstDay);
    const month = d.getMonth();

    // Only mark when the month changes AND the week isn't the very first
    // (avoids a truncated label for a partial month at the start)
    if (month !== lastMonth) {
      const x = i * COL_WIDTH;
      // Skip if too close to the previous label
      if (x - lastX >= MIN_LABEL_GAP) {
        markers.push({ label: MONTH_NAMES[month], x });
        lastX = x;
      }
      lastMonth = month;
    }
  });

  return markers;
}

// ── Tooltip ───────────────────────────────────────────────────────────────────

function Tooltip({ day, rect }: { day: ContributionDay; rect: DOMRect }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  // absolute coords accounting for scroll, so tooltip is never clipped
  const left = rect.left + rect.width / 2 + window.scrollX;
  const top = rect.top + window.scrollY - 12;

  const date = new Date(day.date);
  const label = date.toLocaleDateString("en-US", {
    weekday: "short", month: "short", day: "numeric", year: "numeric",
  });
  const count = day.contributionCount;
  const text = count === 0
    ? "No contributions"
    : `${count} contribution${count > 1 ? "s" : ""}`;

  return createPortal(
    <div
      className="absolute z-[9999] pointer-events-none -translate-x-1/2 -translate-y-full"
      style={{ left, top }}
    >
      <div className="bg-zinc-900 border border-zinc-700 rounded-md px-2.5 py-1.5 text-[11px] font-mono text-zinc-200 whitespace-nowrap shadow-xl">
        <span className="text-zinc-400">{text}</span>
        <span className="text-zinc-600 mx-1">·</span>
        <span>{label}</span>
      </div>
      {/* Arrow */}
      <div className="flex justify-center">
        <div className="w-2 h-2 bg-zinc-900 border-r border-b border-zinc-700 rotate-45 -mt-1" />
      </div>
    </div>,
    document.body
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function ContributionGrid() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState<{ day: ContributionDay; rect: DOMRect } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((r) => r.json())
      .then((json) => {
        if (json.error) throw new Error(json.error);
        setData(json);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const monthMarkers = data ? getMonthMarkers(data.weeks) : [];

  return (
    <div className="lg:col-span-2 flex flex-col bg-gray-900/90 hover:bg-gray-900 group border border-gray-700 rounded-lg p-2">
      <div className="flex flex-col justify-between border border-gray-700 overflow-hidden p-4 rounded-lg h-full">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-jersey uppercase tracking-widest uppercase text-white">
              Contributions
            </h3>
            {data && (
              <span className="text-[11px] font-mono text-zinc-500">
                MysticMetaphors
              </span>
            )}
          </div>
          <p className="text-zinc-400 font-mono text-xs mb-6">
            {loading
              ? "Loading contributions…"
              : error
                ? "Could not load contributions"
                : `${data!.totalContributions.toLocaleString()} contributions in the last year`}
          </p>
        </div>

        {/* Grid */}
        <div className="pb-2">
          {loading && (
            <div className="flex gap-[3px] min-w-[480px]">
              {Array.from({ length: 53 }).map((_, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, di) => (
                    <div
                      key={di}
                      className="w-[11px] h-[11px] rounded-[2px] bg-zinc-800/40 animate-pulse"
                    />
                  ))}
                </div>
              ))}
            </div>
          )}

          {error && (
            <p className="text-red-400 font-mono text-xs">{error}</p>
          )}

          <div className="overflow-x-auto no-scrollbar">
            {data && (
              <div className="relative" ref={containerRef}>

                {/* Month labels */}
                <div className="relative h-4 mb-1 min-w-[480px]">
                  {monthMarkers.map(({ label, x }) => (
                    <span
                      key={label + x}
                      className="absolute text-[10px] font-mono text-zinc-500 select-none"
                      style={{ left: x }}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Week columns */}
                <div className="flex gap-[3px] min-w-[480px]">
                  {data.weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[5px]">
                      {/* Pad weeks that don't start on Sunday */}
                      {week.contributionDays[0]?.weekday > 0 &&
                        Array.from({ length: week.contributionDays[0].weekday }).map((_, pi) => (
                          <div key={`pad-${pi}`} className="w-[14px] h-[14px]" />
                        ))}

                      {week.contributionDays.map((day) => {
                        const lvl = getLevel(day.contributionCount);
                        return (
                          <div
                            key={day.date}
                            className={`w-[11px] h-[11px] rounded-[2px] transition-opacity duration-150 cursor-pointer hover:opacity-80 ${LEVEL_BG[lvl]}`}
                            onMouseEnter={(e) =>
                              setHovered({
                                day,
                                rect: (e.currentTarget as HTMLElement).getBoundingClientRect(),
                              })
                            }
                            onMouseLeave={() => setHovered(null)}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Tooltip */}
                {hovered && <Tooltip day={hovered.day} rect={hovered.rect} />}
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] font-mono text-zinc-500 pr-2">
            <span>Less</span>
            {([0, 1, 2, 3, 4] as const).map((l) => (
              <div key={l} className={`w-[11px] h-[11px] rounded-[1px] ${LEVEL_BG[l]}`} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}