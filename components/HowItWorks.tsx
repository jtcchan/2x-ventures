'use client'

const options = [
  {
    id: 1,
    description: 'We take over operations with our team of experienced founders.',
    badge: 'OPTION 1: FULL ACQUISITION',
    borderColor: '#91a1df', // purple
  },
  {
    id: 2,
    description: 'We join as operating partners and work alongside you and your team.',
    badge: 'OPTION 2: PARTNERSHIP',
    borderColor: '#68b0cc', // teal (sky-blue)
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-[60px] bg-white">
      <div className="max-w-[940px] mx-auto px-[30px] sm:px-[50px]">
        <div className="text-center mb-5">
          <h2 className="text-[36px] font-[var(--font-dm-serif)] italic text-gray-900 leading-[50px] mb-5">
            How it works
          </h2>
          <p className="text-base text-gray-500/60 max-w-[700px] mx-auto mb-5">
            We are flexible and can do majority acquisition, but are open to founding teams staying on.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-[30px]">
          {options.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-[5px] shadow-[0_2px_3px_rgba(0,0,0,0.15)] max-w-[320px] mx-[15px] my-[10px] p-[30px_20px] text-center"
              style={{ borderTop: `5px solid ${option.borderColor}` }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#353640] mb-4">
                {option.badge}
              </p>
              
              <p className="text-base text-gray-500/60 leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
