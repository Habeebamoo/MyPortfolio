"use client";

import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

type NowPlayingData = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
  progressMs?: number;
  durationMs?: number;
  error?: boolean;
};

const POLL_INTERVAL = 5000;

export default function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchNowPlaying() {
      try {
        const res = await fetch("/api/now-playing");
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch {
        if (!cancelled) setData({ isPlaying: false, error: true });
      }
    }

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, POLL_INTERVAL);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (data === null) return null;

  const progressPct =
    data.isPlaying && data.durationMs
      ? Math.min(100, ((data.progressMs ?? 0) / data.durationMs) * 100)
      : 0;

  return (
    <div className="max-w-150 mx-auto px-6">
      <section className="py-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#9B9B9B] mb-7">
          I'm currently listening to.
        </p>

        {!data.isPlaying ? (
          <div className="bg-gray-100/60 border border-gray-200 py-4 px-4 rounded-lg flex-start gap-3">
            <div className="h-7 w-7 rounded-full bg-gray-200 flex-center">
              <FaPlay color="#9B9B9B" size={10} />
            </div>
            <p className="text-[13px] text-[#9B9B9B] leading-[1.65]">
              Not listening to anything right now.
            </p>
          </div>
        ) : (
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 py-5 border-t border-b border-[#EEEEE9] hover:opacity-55 transition-opacity duration-150"
          >
            {data.albumImageUrl && (
              <img
                src={data.albumImageUrl}
                alt={data.title}
                className="w-11 h-11 rounded-sm object-cover shrink-0"
              />
            )}

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[14px] font-medium text-[#0E0E0E] truncate">
                  {data.title}
                </span>
                <EqualizerIcon />
              </div>

              <span className="text-[13px] text-[#6B6B6B] truncate block">
                {data.artist}
              </span>

              <div className="mt-3 h-0.5 w-full bg-[#EEEEE9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#9B9B9B] rounded-full"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          </a>
        )}
      </section>

      <hr className="border-none border-t border-[#E5E5E1]" />
    </div>
  );
}

function EqualizerIcon() {
  return (
    <span
      className="flex items-end gap-0.5 h-3 shrink-0"
      aria-hidden="true"
    >
      <span className="w-0.5 bg-[#9B9B9B] animate-eq-1" />
      <span className="w-0.5 bg-[#9B9B9B] animate-eq-2" />
      <span className="w-0.5 bg-[#9B9B9B] animate-eq-3" />
    </span>
  );
}