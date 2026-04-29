'use client'

import React from 'react'

const reasons = [
  {
    tag: '01',
    headline: 'Zoom fatigue is real',
    body: "Back-to-back calls drain focus. When you're not busy surviving the meeting, you're scrambling to write notes. We remove that second job entirely.",
    img: '/Graphs.avif',
  },
  {
    tag: '02',
    headline: 'Easy to demo, instant wow',
    body: "Join a call, get a summary. No configuration, no learning curve. The value is visible in the first five minutes — making it the easiest sell to any team.",
    img: '/graphsDotted.avif',
  },
  {
    tag: '03',
    headline: 'Decisions slip through the cracks',
    body: 'Studies show 60% of action items from meetings are forgotten within 24 hours. A timestamped, searchable record means nothing falls through again.',
    img: '/graph.avif',
  },
  {
    tag: '04',
    headline: 'Async teams are the new normal',
    body: 'With remote work spanning timezones, not everyone can attend every call. Auto-summaries keep the whole team aligned without requiring anyone to be in the room.',
    img: '/linear agents.avif',
  },
  {
    tag: '05',
    headline: 'Your memory is not a filing system',
    body: "Humans forget 70% of what they hear within a day. AI doesn't. Every meeting is indexed, searchable, and retrievable — like a perfect second brain for your team.",
    img: '/team lines.avif',
  },
  {
    tag: '06',
    headline: 'One source of truth',
    body: "Conflicting recollections kill momentum. When everyone shares the same AI-generated record, there's no room for \"that's not what we agreed.\" Just clarity.",
    img: '/design more then code.avif',
  },
]

const WhyItWorks = () => {
  return (
    <>
      <div className="w-full flex items-center gap-4 px-10 mt-20">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-medium">
          Why it works
        </span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>
      <div className="w-full flex flex-col items-center text-center px-6 mt-8 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-gray-900 leading-snug">
          The reasons teams <em className="italic text-primary">never look back.</em>
        </h2>
        <p className="text-sm text-gray-400 font-light mt-3 max-w-sm leading-relaxed">
          Six truths about modern meetings — and why AI note-taking fixes all of them.
        </p>
      </div>
      <section className="w-full bg-accent px-6 sm:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {reasons.map((r) => (
            <div
              key={r.tag}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                <img
                  src={r.img}
                  alt={r.headline}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag pill over image */}
                <span className="absolute top-3 left-3 text-[10px] font-mono bg-white/80 backdrop-blur-sm text-gray-500 rounded-full px-2.5 py-1">
                  {r.tag}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-2 p-5 flex-1">
                <h3 className="text-sm font-semibold text-gray-900 tracking-tight leading-snug">
                  {r.headline}
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {r.body}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300 rounded-none" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default WhyItWorks