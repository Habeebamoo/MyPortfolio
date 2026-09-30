import { useEffect, useRef, useState, type MutableRefObject } from "react";
import {
  SiDocker,
  SiGo,
  SiTypescript,
  SiPostgresql,
  SiLinux,
} from "react-icons/si";
import { DiRedis } from "react-icons/di"
import type { IconType } from "react-icons";

type Tech = { id: string; label: string; Icon: IconType };
type Range = readonly [number, number];

const TECH: Tech[] = [
  { id: "docker", label: "Docker", Icon: SiDocker },
  { id: "go", label: "Go", Icon: SiGo },
  { id: "ts", label: "TypeScript", Icon: SiTypescript },
  { id: "redis", label: "Redis", Icon: DiRedis },
  { id: "postgres", label: "PostgreSQL", Icon: SiPostgresql },
  { id: "linux", label: "Linux", Icon: SiLinux },
];

const FADE: Range = [1800, 3200];
const HOLD: Range = [1500, 4000];
const REST: Range = [400, 2500];
const START_DELAY: Range = [0, 3500];
const MAX_VISIBLE = 3;

const rand = ([a, b]: Range): number => a + Math.random() * (b - a);

const Slot = ({ taken }: { taken: MutableRefObject<Set<string>> }) => {
  const [tech, setTech] = useState<Tech | null>(null);
  const [on, setOn] = useState<boolean>(false);
  const [fade, setFade] = useState<number>(FADE[0]);

  useEffect(() => {
    let dead = false;
    let current: string | null = null;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((res) => {
        timers.push(setTimeout(res, ms));
      });

    (async () => {
      await wait(rand(START_DELAY));

      while (!dead) {
        const free = TECH.filter((t) => !taken.current.has(t.id));

        if (!free.length) {
          await wait(500);
          continue;
        }

        const pick = free[Math.floor(Math.random() * free.length)];
        const d = rand(FADE);
        current = pick.id;

        taken.current.add(current);

        setFade(d);
        setTech(pick);

        await wait(60); 

        if (dead) break;
        setOn(true);

        await wait(d + rand(HOLD));

        if (dead) break;
        setOn(false);

        await wait(d);

        taken.current.delete(current);

        current = null;

        if (dead) break;
        setTech(null);

        await wait(rand(REST));
      }
    })();

    return () => {
      dead = true;
      timers.forEach(clearTimeout);
      if (current) taken.current.delete(current);
    };
  }, [taken]);

  return (
    <div className="tsb-slot">
      {tech && (
        <div
          className="tsb-item"
          style={{
            opacity: on ? 1 : 0,
            transform: on ? "scale(1)" : "scale(0.94)",
            filter: on ? "blur(0)" : "blur(2px)",
            transition: `opacity ${fade}ms ease-in-out, transform ${fade}ms ease-in-out, filter ${fade}ms ease-in-out`,
          }}
        >
          <tech.Icon className="tsb-icon" aria-hidden="true" />
        </div>
      )}
    </div>
  );
}

const Glymph = () => {
  const taken = useRef<Set<string>>(new Set());

  return (
    <section className="tsb-root" aria-label="Tech stack">
      <div className="tsb-row">
        {Array.from({ length: MAX_VISIBLE }, (_, i) => (
          <Slot key={i} taken={taken} />
        ))}
      </div>
    </section>
  );
}

export default Glymph