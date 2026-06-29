"use client";

import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { useParams, useRouter } from "next/navigation";
import { BiLink } from "react-icons/bi";
import { BsArrowLeft, BsGithub } from "react-icons/bs";
import { HiOutlineStatusOnline } from "react-icons/hi";

const Page = () => {
  const params = useParams();
  const projName = params.name;
  const router = useRouter();

  const project = projects.find((prj) => prj.slug === projName);

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto">

      {/* ── Nav bar ────────────────────────────────────────────── */}
      <nav className="flex items-center gap-3 px-6 sm:px-10 py-5 border-b border-[#E3E1DB]">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-sm text-gray-500 px-3 py-1.5 rounded-lg border border-[#E3E1DB] bg-white hover:bg-[#F5F3EF] transition-colors font-inter"
        >
          <BsArrowLeft size={13} />
          Back
        </button>
        <span className="text-sm text-gray-400 font-inter">
          / Projects / {project?.name}
        </span>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="px-6 sm:px-10 pt-14 pb-12 border-b border-[#E3E1DB]">
        <p className="text-xs font-medium tracking-widest uppercase text-orange-700 mb-4 font-spaceG">
          {project?.description}
        </p>

        <h1 className="text-5xl sm:text-6xl font-bold text-[#111110] tracking-tight leading-none mb-4 font-outfit">
          {project?.name}
        </h1>

        <p className="text-lg text-[#6B6963] leading-relaxed max-w-xl mb-7 font-inter">
          {project?.about}
        </p>

        {/* Status + stack tags */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-[#EAF3DE] text-[#3B6D11]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#639922] inline-block" />
            Live
          </span>
          {project?.stack.map((tech, i) => (
            <span
              key={i}
              className="text-xs text-[#6B6963] px-2.5 py-1 rounded-md border border-[#DDD9D3] bg-white font-spaceG"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ── Stat bar ───────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#E3E1DB] divide-x divide-[#E3E1DB]">
        {[
          { label: "Role", value: "Full-stack engineer" },
          { label: "Stack depth", value: `${project?.stack.length ?? "—"} technologies` },
          { label: "Started", value: formatDate(project?.createdAt) },
          { label: "Last updated", value: formatDate(project?.updatedAt) },
        ].map(({ label, value }) => (
          <div key={label} className="px-6 sm:px-8 py-6">
            <p className="text-[11px] font-medium tracking-widest uppercase text-[#9E9B94] mb-1.5 font-spaceG">
              {label}
            </p>
            <p className="text-sm font-medium text-[#111110] font-inter">{value}</p>
          </div>
        ))}
      </div>

      {/* ── About + Aside ──────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row border-b border-[#E3E1DB]">

        {/* Main about column */}
        <div className="flex-1 px-6 sm:px-10 py-12 lg:border-r lg:border-[#E3E1DB]">
          <p className="text-[11px] font-medium tracking-widest uppercase text-[#9E9B94] mb-5 font-spaceG">
            About the project
          </p>

          <p className="text-base text-[#3D3C39] leading-[1.8] max-w-140 font-inter">
            {project?.about}
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 mt-10">
            <a
              href={project?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111110] text-[#FAFAF9] text-sm font-medium hover:bg-[#2C2C2A] transition-colors font-inter"
            >
              <BiLink size={15} />
              View live
            </a>
            <a
              href={project?.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#111110] text-sm font-medium border border-[#D4D1CB] hover:bg-[#F5F3EF] transition-colors font-inter"
            >
              <BsGithub size={14} />
              View code
            </a>
          </div>
        </div>

        {/* Aside metadata */}
        <aside className="lg:w-72 px-6 sm:px-10 py-12 space-y-7">
          {[
            { label: "Frontend", value: project?.stack.slice(0, 2).join(" · ") },
            { label: "Backend", value: project?.stack.slice(2).join(" · ") },
            { label: "Type", value: "Consumer product" },
            { label: "Status", value: "Live", accent: true },
            { label: "Url", value: project?.url },
          ].map(({ label, value, accent }) => (
            <div key={label}>
              <p className="text-[11px] font-medium tracking-widest uppercase text-[#9E9B94] mb-1.5 font-spaceG">
                {label}
              </p>
              <p
                className={`text-sm font-inter truncate ${
                  accent ? "text-[#3B6D11]" : "text-[#3D3C39]"
                }`}
              >
                {value}
              </p>
            </div>
          ))}
        </aside>
      </div>

      {/* ── Screenshots ────────────────────────────────────────── */}
      <section className="px-6 sm:px-10 py-12">
        <p className="text-[11px] font-medium tracking-widest uppercase text-[#9E9B94] mb-5 font-spaceG">
          Screenshots
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {project?.images.map((img, i) => (
          <div
            key={i}
            className="rounded-xl border border-[#E3E1DB] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08),0_0_0_0.5px_rgba(0,0,0,0.06)] p-3"
          >
            <div className="aspect-4/3 overflow-hidden rounded-lg">
              <img
                src={img}
                alt={`${project?.name} screenshot ${i + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          ))}
        </div>
      </section>

      </div> {/* end max-w-5xl */}

      <Footer />
    </main>
  );
};

export default Page;
