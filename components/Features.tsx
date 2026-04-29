'use client'

const features = [
  {
    icon: '✦',
    title: 'AI-Powered Note Taking',
    description:
      'Your AI agent joins every call, captures every decision, and delivers a clean summary before the call even ends.',
  },
  {
    icon: '⬡',
    title: 'Seamless Integration',
    description:
      'Works with all major video conferencing platforms without any setup required.',
  },
  {
    icon: '◈',
    title: 'Actionable Summaries',
    description:
      'Get concise, actionable summaries that highlight key decisions and next steps.',
  },
  {
    icon: '⌕',
    title: 'Searchable Archives',
    description:
      'Easily search and reference past meeting notes to stay organized and informed.',
  },
]

const Features = () => {
  return (
    <>
      <div className="w-full flex items-center gap-4 px-10 mt-16">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-medium">
          Everything you need
        </span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>
      <div className="w-full flex flex-col items-center text-center px-6 mt-8 mb-2">
        <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-gray-900 leading-snug">
          Built for teams that move <em className="italic text-primary">fast.</em>
        </h2>
        <p className="text-sm text-gray-400 font-light mt-3 max-w-sm leading-relaxed">
          Every feature designed to eliminate friction from your meeting workflow.
        </p>
      </div>

      <section className="w-full bg-primary mt-10 flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-[30%] w-full flex items-center justify-center py-10 px-8 flex-shrink-0">
          <div className="relative w-full max-w-[200px] md:max-w-full">
            <div className="absolute inset-0 rounded-2xl bg-orange-500/85 blur-xl scale-110" />
            <img
              src="/continous linear.avif"
              alt="AI meeting notes"
              className="relative w-full max-h-[280px] object-contain rounded-2xl opacity-85 mix-blend-luminosity"
            />
          </div>
        </div>
        <div className="md:w-[70%] w-full md:border-l border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`
                  relative flex items-start gap-4 px-7 py-8
                  hover:bg-white/5 transition-colors duration-200 group cursor-default
                  ${i % 2 === 0 ? 'sm:border-r border-white/10' : ''}
                  ${i < 2 ? 'sm:border-b border-white/10' : ''}
                  border-b border-white/10 last:border-b-0 sm:last:border-b-0
                `}
              >
                <span className="absolute top-5 right-5 text-[10px] font-mono text-white/20">
                  0{i + 1}
                </span>
                <span className="text-white/50 text-base mt-0.5 flex-shrink-0 group-hover:text-white/80 transition-colors duration-200">
                  {feature.icon}
                </span>
                <div className="flex flex-col gap-1.5 pr-4">
                  <h3 className="text-sm font-medium text-white/90 tracking-tight leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-white/45 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-200">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  )
}

export default Features