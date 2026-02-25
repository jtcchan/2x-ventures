'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const formData = new FormData(e.currentTarget)
      const encoded = new URLSearchParams()
      formData.forEach((value, key) => {
        encoded.append(key, String(value))
      })

      const response = await fetch('/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded.toString(),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      router.push('/submission-successful')
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      name="apply"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Netlify required hidden field */}
      <input type="hidden" name="form-name" value="apply" />

      {/* Honeypot field for spam protection */}
      <div className="absolute left-[-10000px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
        <label>Don&apos;t fill this out: <input name="bot-field" /></label>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wide text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Sarah Smith"
          required
          autoFocus
          className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5BBFBA]/30 focus:border-[#5BBFBA] transition-colors duration-200 placeholder:text-gray-400"
        />
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wide text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g. name@company.com"
          required
          className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5BBFBA]/30 focus:border-[#5BBFBA] transition-colors duration-200 placeholder:text-gray-400"
        />
      </div>

      {/* Investment Preference */}
      <div>
        <label className="block text-xs font-medium uppercase tracking-wide text-gray-700 mb-3">
          Investment Preference
        </label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="investment-preference"
              value="no-preference"
              defaultChecked
              className="w-4 h-4 text-[#5BBFBA] border-gray-300 focus:ring-[#5BBFBA]"
            />
            <span className="text-sm uppercase text-gray-600">No Preference</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="investment-preference"
              value="debt"
              className="w-4 h-4 text-[#5BBFBA] border-gray-300 focus:ring-[#5BBFBA]"
            />
            <span className="text-sm uppercase text-gray-600">Debt</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="investment-preference"
              value="equity"
              className="w-4 h-4 text-[#5BBFBA] border-gray-300 focus:ring-[#5BBFBA]"
            />
            <span className="text-sm uppercase text-gray-600">Equity</span>
          </label>
        </div>
      </div>

      {/* Minimum Investment */}
      <div>
        <label htmlFor="min-investment" className="block text-xs font-medium uppercase tracking-wide text-gray-700 mb-2">
          Minimum Investment
        </label>
        <input
          type="text"
          id="min-investment"
          name="min-investment"
          placeholder="e.g. $25,000 USD"
          required
          className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5BBFBA]/30 focus:border-[#5BBFBA] transition-colors duration-200 placeholder:text-gray-400"
        />
      </div>

      {/* Maximum Investment */}
      <div>
        <label htmlFor="max-investment" className="block text-xs font-medium uppercase tracking-wide text-gray-700 mb-2">
          Maximum Investment
        </label>
        <input
          type="text"
          id="max-investment"
          name="max-investment"
          placeholder="e.g. $100,000 USD"
          required
          className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5BBFBA]/30 focus:border-[#5BBFBA] transition-colors duration-200 placeholder:text-gray-400"
        />
      </div>

      {/* Investment Experience */}
      <div>
        <label htmlFor="experience" className="block text-xs font-medium uppercase tracking-wide text-gray-700 mb-2">
          Investment Experience
        </label>
        <textarea
          id="experience"
          name="experience"
          rows={5}
          placeholder="Tell us about your background in investing."
          required
          className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5BBFBA]/30 focus:border-[#5BBFBA] transition-colors duration-200 placeholder:text-gray-400 resize-none"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-4 text-sm font-medium uppercase tracking-[0.1em] text-white bg-[#5BBFBA] hover:bg-[#4AA9A4] disabled:bg-gray-400 disabled:cursor-not-allowed rounded-md transition-colors duration-300"
      >
        {isSubmitting ? 'Please wait...' : 'Submit application'}
      </button>
    </form>
  )
}
