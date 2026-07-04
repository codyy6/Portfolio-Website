'use client'

import { useEffect, useRef } from 'react'

type InterestImage = { src: string }

type InterestCategory = {
  slug: string
  label: string
  tagline: string
  description: string
  images: InterestImage[]
  comingSoon?: boolean
}

const categories: InterestCategory[] = [
  {
    slug: 'adventurous',
    label: 'Adventurous',
    tagline: "Moved by what's hard to reach.",
    description:
      "Life is not always comfortable, and once you get too comfortable, you stop moving. And a lot of times failure is just life way of moving us towards another direction. Doing these adventurous things are training me to not be afriad of failure.",
    images: [
      { src: '/IMG_20250705_072322862.jpg' },
      { src: '/photo_6214999543867183634_y.jpg' },
      { src: '/IMG_20250705_090523744.jpg' },
      { src: '/IMG_20260513_124432805.jpg' },
      { src: '/IMG_20260517_111618394.jpg' },
      { src: '/IMG_20260519_152351142.jpg' },
      { src: '/IMG_20260527_224926_363.jpg' },
      { src: '/mmexport1778659899542.jpg' },
      { src: '/photo_6214999543867183632_y.jpg' },
      { src: '/photo_6217251343680868579_y.jpg' },
      { src: '/photo_6217251343680868580_y.jpg' },
      { src: '/photo_6217251343680868585_y.jpg' },
    ],
  },
  {
    slug: 'social',
    label: 'Social',
    tagline: 'Good company makes any place worth going to.',
    description:
      "Meeting people are coincidence, being friend is a choice. Having fun with friends during my freetime is always my joy and will always cherish and appreciate people in my life.",
    images: [
      { src: '/photo_6217251343680868582_y.jpg' },
      { src: '/photo_6217251343680868583_y.jpg' },
      { src: '/photo_6217251343680868611_y.jpg' },
      { src: '/photo_6217251343680868612_y.jpg' },
      { src: '/photo_6217251343680868613_y.jpg' },
      { src: '/photo_6217251343680868614_y.jpg' },
      { src: '/photo_6217251343680868615_y.jpg' },
      { src: '/photo_6217251343680868616_y.jpg' },
    ],
  },
  {
    slug: 'personal-development',
    label: 'Personal Development',
    tagline: 'Reading as slow thinking.',
    description:
      "Reading is a good source of external opinion/knowledge entering my mind. Conversing with my own mind without any ego in play allows me to thoroughly reflect on my past actions, and plan my behaviours moving forward. And i always believe, i should be the change i wish to see",
    images: [
      { src: '/photo_6217251343680868584_y.jpg' },
      { src: '/photo_6217251343680868602_y.jpg' },
      { src: '/photo_6217251343680868603_y.jpg' },
      { src: '/photo_6217251343680868604_y.jpg' },
      { src: '/photo_6217251343680868606_y.jpg' },
    ],
  },
]

function ImageStrip({ images, imageHeight = '260px' }: { images: InterestImage[]; imageHeight?: string }) {
  const doubled = [...images, ...images]
  const duration = `${images.length * 3}s`
  return (
    <div className="overflow-hidden">
      <div className="flex gap-3 animate-marquee hover:[animation-play-state:paused]" style={{ width: 'max-content', animationDuration: duration }}>
        {doubled.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 overflow-hidden rounded border border-[#1f1f1f]"
            style={{ height: imageHeight }}
          >
            <img src={img.src} alt="" className="h-full w-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ComingSoonPlaceholder() {
  return (
    <div className="border border-dashed border-[#2a2a2a] rounded-lg h-[120px] flex items-center justify-center">
      <span className="text-[10px] font-mono text-[#444444] tracking-[0.16em] uppercase">
        Photos coming soon
      </span>
    </div>
  )
}

export default function AdventureTimeline() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll<HTMLElement>('[data-reveal]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'none'
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref}>
      {/* Section header */}
      <div className="mb-14 flex items-center justify-between gap-6">
        <div>
          <p className="text-xs font-mono text-[#888888] tracking-widest uppercase mb-2">
            Beyond the code
          </p>
          <h2 className="text-2xl font-bold text-[#e5e5e5]">The person behind the engineer</h2>
        </div>

        <svg
          viewBox="0 0 100 100"
          className="w-20 h-20 flex-shrink-0 animate-[spin_20s_linear_infinite]"
          aria-hidden="true"
        >
          <defs>
            <path id="ring" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
          </defs>
          <text fill="#444444" fontSize="8.5" fontFamily="monospace" letterSpacing="2">
            <textPath href="#ring">EXPLORE · LEARN · BUILD · LIVE ·&nbsp;</textPath>
          </text>
          <circle cx="50" cy="50" r="4" fill="#10b981" />
        </svg>
      </div>

      {/* Categories */}
      <div className="space-y-0">
        {categories.map((cat, i) => (
          <div key={cat.slug}>
            <div
              data-reveal
              className="py-12"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              {/* Category header row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-[10px] font-mono text-[#10b981] tracking-[0.16em] uppercase">
                    {cat.label}
                  </span>
                  <h3 className="text-[#e5e5e5] font-semibold text-lg leading-snug">
                    {cat.tagline}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#888888] text-sm leading-relaxed max-w-xl mb-8">
                {cat.description}
              </p>

              {/* Images */}
              {cat.comingSoon ? (
                <ComingSoonPlaceholder />
              ) : (
                <ImageStrip
                  images={cat.images}
                  imageHeight={cat.slug === 'personal-development' ? '300px' : '260px'}
                />
              )}
            </div>

            {i < categories.length - 1 && <div className="border-t border-[#1f1f1f]" />}
          </div>
        ))}
      </div>
    </section>
  )
}
