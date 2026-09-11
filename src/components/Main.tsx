"use client";

interface Projects {
  link: string
  name: string
  displayLink: string
  desc: string
}

const projects: Projects[] = [
  {
    link: "https://github.com/Habeebamoo/intunel", 
    name: "Intunel", 
    displayLink: "github.com", 
    desc: "An event-driven notification service for reliable message delivery."
  }, {
    link: "https://github.com/Habeebamoo/l7-load-balancer",
    name: "Load-Balancer",
    displayLink: "github.com",
    desc: "A layer 7 load balancer & reverse proxy that distributes incoming requests traffic accross server pools."
  }, {
    link: "https://myclivo.com",
    name: "Clivo",
    displayLink: "myclivo.com",
    desc: "Modern blogging platform for writers and readers."
  }, {
    link: "https://orbitrixng.com",
    name: "Orbitrix",
    displayLink: "orbitrixng.com",
    desc: "A landing page for a technology company."
  } 
]

const Main = () => {
  return (
    <main className="w-full max-w-165 mx-auto px-5">
      
      {/* Projects Section */}
      <section className="py-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#9B9B9B] mb-7">
          Featured Projects
        </p>

        {projects.map(prj => {
          return (
            <a
              href={prj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-5 border-t border-[#EEEEE9] hover:opacity-55 transition-opacity duration-150"
            >
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-[15px] font-medium text-[#0E0E0E]">
                  {prj.name}
                </span>

                <span className="text-[11px] text-[#9B9B9B] break-all">
                  {prj.displayLink}
                </span>
              </div>

              <p className="text-[14px] text-[#6B6B6B] leading-[1.65]">
                {prj.desc}
              </p>
            </a>
          )
        })}
        
      </section>

      {/* Divider */}
      <hr className="border-none border-t border-[#E5E5E1]" />

      {/* Work Experience Section */}
      <section className="py-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#9B9B9B] mb-7">
          Work Experience
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
          Available for opportunities and projects.{" "}
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