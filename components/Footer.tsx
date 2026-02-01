'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#424448] text-white text-center text-[13px] mt-[60px] pt-0 pb-[30px]">
      <div className="max-w-[940px] mx-auto">
        <div className="flex flex-col md:flex-row justify-around text-left mt-[60px] mb-[20px]">
          {/* Logo */}
          <Link href="/" className="flex-none min-w-[60px] max-h-[60px]">
            <Image
              src="/2x-mark-white.png"
              alt="2x Ventures"
              width={75}
              height={75}
              className="h-[75px] w-auto object-contain object-left"
            />
          </Link>

          {/* Company */}
          <div>
            <h2 className="text-white uppercase text-[16px] font-medium leading-[28px] mt-0 mb-5">
              Company
            </h2>
            <ul className="list-none p-0">
              <li className="mb-[10px]">
                <Link href="/about" className="text-[#68b0cc] text-[14px] font-normal hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-[10px]">
                <Link href="/apply" className="text-[#68b0cc] text-[14px] font-normal hover:underline">
                  Invest With Us
                </Link>
              </li>
              <li className="mb-[10px]">
                <a href="https://2xcd.com" target="_blank" rel="noopener noreferrer" className="text-[#68b0cc] text-[14px] font-normal hover:underline">
                  Our Agency
                </a>
              </li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h2 className="text-white uppercase text-[16px] font-medium leading-[28px] mt-0 mb-5">
              Our Office
            </h2>
            <ul className="list-none p-0 text-white text-[14px] font-normal">
              <li>2x Conversion Design Ltd.</li>
              <li>450 S.W. Marine Dr,</li>
              <li>Marine Gateway, 18th Floor</li>
              <li>Vancouver, BC V5X 0C3</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white uppercase text-[16px] font-medium leading-[28px] mt-0 mb-5">
              <strong className="text-[14px] font-medium">Get in touch</strong>
            </h2>
            <ul className="list-none p-0">
              <li>
                <a
                  href="mailto:hello@2xcd.com?subject=Let's%20work%20together!"
                  className="text-[#68b0cc] text-[14px] font-normal hover:underline"
                >
                  hello@2xcd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white font-normal">
          © 2022 2x Ventures Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
