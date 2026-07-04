import Link from 'next/link'
import Image from 'next/image'
import { profile, skills, products } from '@/lib/data'

export default function Home() {

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-24 flex flex-col sm:flex-row items-start gap-12">
        <div className="flex-1">
          <p className="text-[#10b981] text-sm font-mono mb-4 tracking-widest uppercase">
            Available for new opportunities
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#e5e5e5] leading-tight mb-4">
            {profile.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-[#888888] font-normal mb-6">
            {profile.title}
          </h2>
          <p className="text-[#888888] max-w-2xl leading-relaxed mb-10 text-base">
            {profile.summary}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-[#10b981] text-[#0a0a0a] font-semibold rounded-lg text-sm hover:bg-[#34d399] transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-[#1f1f1f] text-[#e5e5e5] font-semibold rounded-lg text-sm hover:border-[#10b981] hover:text-[#10b981] transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#1f1f1f] text-[#888888] font-semibold rounded-lg text-sm hover:border-[#1f1f1f] hover:text-[#e5e5e5] transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="sm:w-64 sm:flex-shrink-0">
          <Image
            src="/IMG_20260527_224926_363.jpg"
            alt={profile.name}
            width={256}
            height={320}
            className="rounded-xl object-cover w-full"
            priority
          />
        </div>
      </section>

      {/* Skills */}
      <section className="mb-24">
        <h3 className="text-xs font-mono text-[#888888] tracking-widest uppercase mb-6">
          Technical Skills
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="border border-[#1f1f1f] rounded-lg p-5 bg-[#111111]">
              <p className="text-[#10b981] text-xs font-mono tracking-wide uppercase mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-[#888888] bg-[#1a1a1a] border border-[#1f1f1f] px-2.5 py-1 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xs font-mono text-[#888888] tracking-widest uppercase">
            Products I've Worked On
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#1f1f1f] rounded-lg p-6 bg-[#111111] hover:border-[#10b981]/50 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-1">
                <h4 className="text-[#e5e5e5] font-semibold text-base group-hover:text-[#10b981] transition-colors">
                  {product.name}
                </h4>
                <span className="text-[10px] font-mono text-[#555555] mt-1">{product.period}</span>
              </div>
              <p className="text-xs font-mono text-[#10b981] mb-3">
                {product.role} · {product.company}
              </p>
              <p className="text-[#888888] text-sm leading-relaxed mb-4">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/20 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Current role highlight */}
      <section>
        <div className="border border-[#1f1f1f] rounded-lg p-6 bg-[#111111] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-[#888888] tracking-wide uppercase mb-1">Currently at</p>
            <p className="text-[#e5e5e5] font-semibold">AI Product Engineer / AI Lead</p>
            <p className="text-[#10b981] text-sm">YTL AI Labs · chat.ilmu.ai</p>
          </div>
          <Link
            href="/experience"
            className="text-sm text-[#888888] hover:text-[#10b981] transition-colors font-mono whitespace-nowrap"
          >
            Full experience →
          </Link>
        </div>
      </section>
    </div>
  )
}
