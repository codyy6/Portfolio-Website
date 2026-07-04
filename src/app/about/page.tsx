import type { Metadata } from 'next'
import { profile, education } from '@/lib/data'
import AdventureTimeline from '@/components/AdventureTimeline'

export const metadata: Metadata = {
  title: 'About — Cody Liew',
}

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-14">
        <p className="text-xs font-mono text-[#10b981] tracking-widest uppercase mb-3">Background</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#e5e5e5]">About</h1>
      </div>

      {/* Professional */}
      <div className="grid lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-xs font-mono text-[#888888] tracking-widest uppercase mb-4">Summary</h2>
            <p className="text-[#888888] leading-relaxed text-base">{profile.summary}</p>
          </section>

          <section>
            <h2 className="text-xs font-mono text-[#888888] tracking-widest uppercase mb-6">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border border-[#1f1f1f] rounded-lg p-5 bg-[#111111]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h3 className="text-[#e5e5e5] font-semibold text-sm">{edu.degree}</h3>
                    <span className="text-xs font-mono text-[#888888] whitespace-nowrap">{edu.period}</span>
                  </div>
                  {edu.specialization && (
                    <p className="text-[#10b981] text-sm mb-1">{edu.specialization}</p>
                  )}
                  <p className="text-[#888888] text-sm">{edu.institution}</p>
                  <div className="mt-3">
                    <span className="text-[10px] font-mono text-[#888888] bg-[#1a1a1a] border border-[#1f1f1f] px-2.5 py-1 rounded">
                      CGPA {edu.cgpa}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xs font-mono text-[#888888] tracking-widest uppercase mb-4">Contact</h2>
            <div className="space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-[#888888] hover:text-[#10b981] transition-colors">
                <span className="text-[#10b981] w-5 text-center">@</span>{profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#888888] hover:text-[#10b981] transition-colors">
                <span className="text-[#10b981] font-mono w-5 text-center">gh</span>github.com/codyy6
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#888888] hover:text-[#10b981] transition-colors">
                <span className="text-[#10b981] font-mono w-5 text-center">in</span>linkedin.com/in/codyy6
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-mono text-[#888888] tracking-widest uppercase mb-4">Languages</h2>
            <div className="flex flex-wrap gap-2">
              {['English', 'Chinese', 'Malay'].map((lang) => (
                <span key={lang} className="text-xs text-[#888888] bg-[#1a1a1a] border border-[#1f1f1f] px-3 py-1.5 rounded">
                  {lang}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1f1f1f] mb-16" />

      <AdventureTimeline />
    </div>
  )
}
