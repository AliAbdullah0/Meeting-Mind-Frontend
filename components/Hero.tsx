"use client"
import { Button } from './ui/button'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div className="min-h-screen bg-secondary overflow-hidden">
      <div className="flex flex-col items-center text-center px-4 sm:px-6 pt-14 sm:pt-20 pb-0">
        <div className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-500 mb-6 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          AI-powered · zero setup
        </div>
        
        <motion.h1
  initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{
  duration: 1,
  delay: 0.2,
  ease: "easeOut",
}}
  className="font-serif text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-gray-900 max-w-2xl leading-[1.1] mb-4 sm:mb-5"
>
  Never take meeting<br />
  notes <em className="italic text-primary">again.</em>
</motion.h1>
        <p className="text-sm sm:text-base text-gray-500 font-light max-w-md leading-relaxed mb-7 sm:mb-9">
          Your AI agent joins every call, captures every decision, and delivers
          a clean summary before the call even ends.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-10 sm:mb-14 w-full sm:w-auto px-4 sm:px-0">
          <Button className="bg-primary text-sm font-medium px-6 py-2.5 rounded-lg w-full sm:w-auto">
            Get started free
          </Button>
          <Button
            variant="outline"
            className="bg-transparent text-gray-500 text-sm border px-6 py-2.5 rounded-lg w-full sm:w-auto"
          >
            See how it works →
          </Button>
        </div>
        <div className="w-full md:max-w-6xl max-w-3xl mx-auto rounded-t-2xl border border-b-0 border-gray-200 overflow-hidden shadow-[0_-4px_40px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-200">
            <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
            <span className="text-[11px] text-gray-400 ml-2 hidden sm:inline">app.notewise.ai</span>
            <div className="ml-auto flex items-center gap-1.5 bg-red-50 text-red-700 text-[11px] font-medium rounded-full px-2.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Recording
            </div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] min-h-[340px] bg-white">
            <div className="hidden sm:flex border-r border-gray-100 p-4 flex-col gap-1">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 px-2 mt-2 mb-1">Workspace</p>
              {['Dashboard', 'All meetings', 'Recordings'].map((item, i) => (
                <div
                  key={item}
                  className={`text-[13px] px-2.5 py-1.5 rounded-md cursor-pointer  ${
                    i === 0 ? 'bg-blue-50 text-blue-700 hover font-medium' : 'text-gray-500 hover:bg-primary hover:text-white transition-colors'
                  }`}
                >
                  {item}
                </div>
              ))}
              <p className="text-[10px] uppercase tracking-widest text-gray-400 px-2 mt-4 mb-1">Teams</p>
              {['Product', 'Sales'].map((item) => (
                <div key={item} className="text-[13px] px-2.5 py-1.5 rounded-md text-gray-500 cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
            <div className="p-4 sm:p-5 flex flex-col gap-3">
              <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-2">
                {[
                  { label: 'Meetings this week', val: '14', delta: '↑ 3 vs last week' },
                  { label: 'Hours saved', val: '6.2', delta: '↑ 1.4 hrs' },
                  { label: 'Action items', val: '31', delta: '12 completed' },
                ].map((s) => (
                  <div key={s.label} className="bg-white hover:bg-accent transition-colors border border-gray-100 rounded-lg p-3">
                    <p className="text-[10px] text-gray-400 mb-1">{s.label}</p>
                    <p className="text-xl font-medium text-gray-900">{s.val}</p>
                    <p className="text-[10px] text-emerald-600">{s.delta}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <p className="text-[13px] font-medium text-gray-800">Q2 Product Roadmap Review</p>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 rounded-full px-2 py-0.5 whitespace-nowrap">
                    ✓ Summary ready
                  </span>
                </div>
                <p className="text-[12px] text-gray-500 leading-relaxed mb-2">
                  Agreed to push the analytics dashboard to v2.4. Design team to finalize mockups by Thursday.
                </p>
                <div className="flex flex-col gap-1">
                  {[
                    'Sarah: send revised wireframes by Thu',
                    'Jake: update sprint board in Linear',
                    'Marcus: get sign-off from stakeholders',
                  ].map((item, i) => (
                    <div key={item} className="flex items-center gap-2 text-[11px] text-gray-500">
                      <span
                        className={`w-3 h-3 rounded-full border-[1.5px] flex-shrink-0 ${
                          i < 2 ? 'bg-emerald-500 border-emerald-500' : 'border-emerald-500'
                        }`}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero