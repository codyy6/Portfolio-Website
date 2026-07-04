import type { Metadata } from 'next'
import { experiences } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Experience — Cody Liew',
}

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-14">
        <p className="text-xs font-mono text-[#10b981] tracking-widest uppercase mb-3">Career</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#e5e5e5]">Experience</h1>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1f1f1f] ml-[7px]" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10">
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                  exp.current
                    ? 'border-[#10b981] bg-[#10b981]'
                    : 'border-[#1f1f1f] bg-[#0a0a0a]'
                }`}
              />

              <div className="border border-[#1f1f1f] rounded-lg p-6 bg-[#111111]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-[#e5e5e5] font-semibold text-lg">{exp.title}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#10b981] text-sm hover:text-[#34d399] transition-colors"
                      >
                        {exp.company}
                      </a>
                      <span className="text-[#1f1f1f]">·</span>
                      <span className="text-[#888888] text-sm">{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {exp.current && (
                      <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/20 px-2 py-0.5 rounded">
                        Current
                      </span>
                    )}
                    <span className="text-xs font-mono text-[#888888] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[#888888] leading-relaxed">
                      <span className="text-[#10b981] mt-1.5 shrink-0 text-xs">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
