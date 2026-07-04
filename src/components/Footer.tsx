import { profile } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] py-8 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#888888]">
          Built with Next.js &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#888888] hover:text-[#10b981] transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#888888] hover:text-[#10b981] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-[#888888] hover:text-[#10b981] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
