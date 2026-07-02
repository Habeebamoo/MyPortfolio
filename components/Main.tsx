"use client";

const Main = () => {
  return (
    <main className="w-full max-w-165 mx-auto px-6">
      
      {/* Projects Section */}
      <section className="py-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#9B9B9B] mb-7">
          Projects
        </p>

        {/* Project 1: Notification Service (Tunnl) */}
        <a 
          href="https://github.com/Habeebamoo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block py-5 border-t border-b border-[#EEEEE9] hover:opacity-55 transition-opacity duration-150 cursor-pointer"
        >
          {/* Switched to flex-col by default for tiny screens, goes back to flex-row at 400px wide */}
          <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-baseline justify-between gap-1 min-[400px]:gap-4 mb-2">
            <span className="text-[14px] font-medium text-[#0E0E0E]">
              Tunnl
            </span>
            {/* Allowed wrapping on small screens, removed absolute whitespace-nowrap */}
            <span className="text-[11px] min-[400px]:text-[12px] text-[#9B9B9B] shrink-0">
              Go · Redis Streams · PostgreSQL
            </span>
          </div>
          <p className="text-[13px] text-[#6B6B6B] leading-[1.65]">
            A high-throughput transactional notification delivery system featuring robust asynchronous queuing, retries, and strict delivery guarantees.
          </p>
        </a>

        {/* Project 2: Clivo */}
        <a 
          href="https://myclivo.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block py-5 border-b border-[#EEEEE9] hover:opacity-55 transition-opacity duration-150 cursor-pointer"
        >
          <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-baseline justify-between gap-1 min-[400px]:gap-4 mb-2">
            <span className="text-[14px] font-medium text-[#0E0E0E]">
              Clivo
            </span>
            <span className="text-[11px] min-[400px]:text-[12px] text-[#9B9B9B] shrink-0">
              Next.js · Go · Gin · PostgreSQL
            </span>
          </div>
          <p className="text-[13px] text-[#6B6B6B] leading-[1.65]">
            A full-stack, high-performance publishing platform for writers and readers. Built to handle structured content distribution with an optimized Go API layer and a highly responsive, reader-first frontend.
          </p>
        </a>
      </section>

      {/* Divider */}
      <hr className="border-none border-t border-[#E5E5E1]" />

      {/* Work Experience Section */}
      <section className="py-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#9B9B9B] mb-7">
          Experience
        </p>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
          <span className="text-[12px] text-[#9B9B9B] min-w-32.5 shrink-0">
            Dec 2025 — Present
          </span>
          <span className="text-[14px] text-[#0E0E0E]">
            Software Engineer, Orbitrixng
          </span>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-none border-t border-[#E5E5E1]" />

      {/* Contact Section */}
      <section className="py-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#9B9B9B] mb-7">
          Contact
        </p>
        <p className="text-[15px] text-[#3D3D3D] leading-[1.8]">
          Open to remote backend and systems roles.{" "}
          <a 
            href="mailto:habeebamoo08@gmail.com" 
            className="underline underline-offset-[3px] text-[#3D3D3D] hover:text-[#0E0E0E] transition-colors duration-150"
          >
            Reach out.
          </a>
        </p>
      </section>

    </main>
  );
};

export default Main;