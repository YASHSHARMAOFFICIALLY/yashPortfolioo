"use client";

import { useEffect, useMemo, useState } from "react";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitHubData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export default function ContributionGraph() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tooltip, setTooltip] = useState<{ date: string; count: number; x: number; y: number } | null>(null);

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((res) => res.json())
      .then((data) => {
        console.log("GitHub API Data:", data);
        if (data.error) {
          setError(true);
        } else {
          setData(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const getColorClass = (count: number) => {
    if (count === 0) return "bg-[#161616]";
    if (count <= 2) return "bg-green-900"; // Darker (Low contributions)
    if (count <= 5) return "bg-green-700";
    if (count <= 10) return "bg-green-500";
    return "bg-green-300"; // Brighter (High contributions)
  };

  const getTextColorClass = (count: number) => {
    if (count === 0) return "text-neutral-500";
    if (count <= 2) return "text-violet-400"; // Low contributions
    if (count <= 5) return "text-cyan-400";   // Medium-low
    if (count <= 10) return "text-amber-400"; // Medium-high
    return "text-pink-400";                   // High contributions
  };

  const getBorderColorClass = (count: number) => {
    if (count === 0) return "border-neutral-700";
    if (count <= 2) return "border-violet-500";
    if (count <= 5) return "border-cyan-500";
    if (count <= 10) return "border-amber-500";
    return "border-pink-500";
  };

  const handleMouseEnter = (e: React.MouseEvent, date: string, count: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      date,
      count,
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  // Calculate month labels with their positions based on actual week data
  const { filteredWeeks, monthLabels } = useMemo(() => {
    if (!data) return { filteredWeeks: [], monthLabels: [] };

    const today = new Date();
    today.setHours(23, 59, 59, 999);

    // Filter weeks and days to only include up to today
    const filtered = data.weeks.map((week) => ({
      ...week,
      contributionDays: week.contributionDays.filter(day => new Date(day.date) <= today)
    })).filter(week => week.contributionDays.length > 0);

    // Calculate month positions
    const labels: { month: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    filtered.forEach((week, weekIndex) => {
      if (week.contributionDays.length > 0) {
        const firstDay = week.contributionDays[0];
        const date = new Date(firstDay.date);
        const month = date.getMonth();
        
        if (month !== lastMonth) {
          labels.push({ month: monthNames[month], weekIndex });
          lastMonth = month;
        }
      }
    });

    return { filteredWeeks: filtered, monthLabels: labels };
  }, [data]);

  // Fallback to simulated data if loading or error
  if (loading || error || !data) {
    const weeks = 53;
    const days = 7;
    // Use a static grid for loading state to avoid hydration mismatch
    const grid = Array.from({ length: weeks }, () =>
      Array.from({ length: days }, () => "bg-[#161616]")
    );

    return (
      <section className="mt-20 lg:pl-12 opacity-80 hover:opacity-100 transition-opacity">
        <div className="flex justify-between text-xs font-figtree text-neutral-600 mb-2 px-1">
          {monthNames.map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex gap-1">
            {grid.map((week, i) => (
              <div key={i} className="flex flex-col gap-1">
                {week.map((colorClass, j) => (
                  <div
                    key={j}
                    className={`w-3 h-3 rounded-[1px] ${colorClass}`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-3 text-xs font-figtree text-neutral-600">
          <span>
            {loading
              ? "Loading..."
              : error
              ? "Unable to load data"
              : "1,842 contributions"}
          </span>
          <div className="flex items-center gap-2">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-[1px] bg-[#161616]"></div>
              <div className="w-3 h-3 rounded-[1px] bg-green-900"></div>
              <div className="w-3 h-3 rounded-[1px] bg-green-700"></div>
              <div className="w-3 h-3 rounded-[1px] bg-green-500"></div>
              <div className="w-3 h-3 rounded-[1px] bg-green-300"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-20 lg:pl-12 opacity-80 hover:opacity-100 transition-opacity relative">
      {/* Custom Tooltip */}
      {tooltip && (
        <div
          className={`fixed z-50 px-3 py-2 text-xs font-figtree text-white bg-[#0a0a0a] border ${getBorderColorClass(tooltip.count)} rounded-md shadow-lg pointer-events-none whitespace-nowrap`}
          style={{
            left: tooltip.x,
            top: tooltip.y - 40,
            transform: "translateX(-50%)",
          }}
        >
          <span className={getTextColorClass(tooltip.count)}>{tooltip.date}</span>: {tooltip.count} contribution{tooltip.count !== 1 ? "s" : ""}
        </div>
      )}

      {/* Dynamic month labels positioned above correct weeks */}
      <div className="relative text-xs font-figtree text-neutral-600 mb-2 h-4 w-full">
        {monthLabels.map((label, i) => (
          <span
            key={i}
            className="absolute"
            style={{ left: `${(label.weekIndex / filteredWeeks.length) * 100}%` }}
          >
            {label.month}
          </span>
        ))}
      </div>

      <div className="w-full">
        <div className="flex gap-1 w-full">
          {filteredWeeks.map((week, i) => (
            <div key={i} className="flex flex-col gap-1 flex-1">
              {week.contributionDays.map((day, j) => (
                <div
                  key={j}
                  className={`aspect-square w-full rounded-xs cursor-pointer ${getColorClass(
                    day.contributionCount
                  )}`}
                  onMouseEnter={(e) => handleMouseEnter(e, day.date, day.contributionCount)}
                  onMouseLeave={handleMouseLeave}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 text-xs font-figtree text-neutral-600">
        <span>{data.totalContributions.toLocaleString()} contributions</span>
        <div className="flex items-center gap-2">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-[1px] bg-[#161616]"></div>
            <div className="w-3 h-3 rounded-[1px] bg-green-900"></div>
            <div className="w-3 h-3 rounded-[1px] bg-green-700"></div>
            <div className="w-3 h-3 rounded-[1px] bg-green-500"></div>
            <div className="w-3 h-3 rounded-[1px] bg-green-300"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </section>
  );
}