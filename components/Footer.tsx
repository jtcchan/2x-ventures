'use client'

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 text-white text-lg font-bold">
                2
              </span>
              <span className="text-sm font-semibold tracking-[0.2em]">
                x MICRO VENTURES
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white/80 mb-4">
              COMPANY
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-[#5BBFBA] hover:text-[#76d6d1] transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#invest" className="text-[#5BBFBA] hover:text-[#76d6d1] transition-colors duration-300">
                  Invest With Us
                </a>
              </li>
              <li>
                <a href="#agency" className="text-[#5BBFBA] hover:text-[#76d6d1] transition-colors duration-300">
                  Our Agency
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white/80 mb-4">
              OUR OFFICE
            </h4>
            <p className="text-sm text-white/80 leading-relaxed">
              2x Conversion Design Ltd.
              <br />
              450 S.W. Marine Dr
              <br />
              Marine Gateway 18th Floor
              <br />
              Vancouver BC V5X 0C3
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white/80 mb-4">
              GET IN TOUCH
            </h4>
            <a
              href="mailto:hello@2xcd.com"
              className="text-sm text-white/80 hover:text-white transition-colors duration-300"
            >
              hello@2xcd.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-sm text-white/60">
          © 2022 2x Ventures Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
