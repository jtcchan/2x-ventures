'use client'

import { useState } from 'react'
export default function ApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const formData = new FormData(e.currentTarget)
      const messageLines = [
        `Full Name: ${formData.get('name') || ''}`,
        `Email Address: ${formData.get('email') || ''}`,
        `Investment Preference: ${formData.get('investment-preference') || ''}`,
        `Minimum Investment: ${formData.get('min-investment') || ''}`,
        `Maximum Investment: ${formData.get('max-investment') || ''}`,
        `Investment Experience: ${formData.get('experience') || ''}`,
      ]
      const subject = encodeURIComponent('2x Ventures Investment Application')
      const body = encodeURIComponent(messageLines.join('\n'))

      window.location.href = `mailto:hello@2xcd.com?subject=${subject}&body=${body}`
      setIsSubmitting(false)
    } catch {
      setError('Something went wrong. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Investment Preference
        </label>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="investment-preference"
              value="no-preference"
              defaultChecked
              className="w-4 h-4 text-[#5BBFBA] border-gray-300 focus:ring-[#5BBFBA]"
            />
            <span className="text-sm text-gray-600">No Preference</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="investment-preference"
              value="debt"
              className="w-4 h-4 text-[#5BBFBA] border-gray-300 focus:ring-[#5BBFBA]"
            />
            <span className="text-sm text-gray-600">Debt</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="investment-preference"
              value="equity"
              className="w-4 h-4 text-[#5BBFBA] border-gray-300 focus:ring-[#5BBFBA]"
            />
            <span className="text-sm text-gray-600">Equity</span>
          </label>
        </div>
      </div>

      {/* Minimum Investment */}
      <div>
        <label htmlFor="min-investment" className="block text-sm font-medium text-gray-700 mb-2">
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
        <label htmlFor="max-investment" className="block text-sm font-medium text-gray-700 mb-2">
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
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
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
