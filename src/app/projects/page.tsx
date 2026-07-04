import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Projects — Cody Liew',
}

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-14">
        <p className="text-xs font-mono text-[#10b981] tracking-widest uppercase mb-3">Work</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#e5e5e5]">Projects</h1>
      </div>

      <section className="mb-10">
        <p className="text-[10px] font-mono text-[#333333] tracking-widest uppercase pb-2.5 border-b border-b-[#181818]">
          Featured
        </p>
        {featured.map((project) => (
          <LedgerRow key={project.slug} project={project} featured />
        ))}
      </section>

      {others.length > 0 && (
        <section>
          <p className="text-[10px] font-mono text-[#333333] tracking-widest uppercase pb-2.5 border-b border-b-[#181818]">
            More Projects
          </p>
          {others.map((project) => (
            <LedgerRow key={project.slug} project={project} featured={false} />
          ))}
        </section>
      )}
    </div>
  )
}

function LedgerRow({ project, featured }: { project: (typeof projects)[0]; featured: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex items-center justify-between gap-6 py-[13px] pr-3 pl-3.5 -ml-3.5 border-b border-b-[#111111] border-l-2 border-l-transparent hover:border-l-[#10b981] hover:bg-white/[.018] transition-all duration-[140ms]"
    >
      <div className="min-w-0 flex-1">
        <p className={`text-[13px] font-semibold mb-0.5 transition-colors duration-[140ms] group-hover:text-[#e5e5e5] ${featured ? 'text-[#d8d8d8]' : 'text-[#888888]'}`}>
          {project.title}
        </p>
        <p className={`text-[11px] truncate leading-relaxed ${featured ? 'text-[#444444]' : 'text-[#3a3a3a]'}`}>
          {project.description}
        </p>
      </div>
      <div className="flex items-center gap-5 flex-shrink-0">
        <div className="hidden sm:flex gap-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="font-mono text-[10px] text-[#383838] whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
        <svg
          className="w-3.5 h-3.5 text-[#282828] group-hover:text-[#10b981] transition-colors duration-[140ms] flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    </Link>
  )
}
