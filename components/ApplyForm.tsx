'use client'

import { FormEvent, useState } from 'react'

export default function ApplyForm() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (response.ok) {
        setSubmitted(true)
        ;(e.target as HTMLFormElement).reset()
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16 sm:py-20">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-6">
          <div className="text-5xl text-green-600">✓</div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
          Thank you for your application!
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-md mx-auto leading-relaxed">
          We'll review your application and get back to you within 5-7 business days. We look forward to exploring a potential partnership!
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
        >
          Back to Home
        </a>
      </div>
    )
  }

  return (
    <form
      name="apply"
      method="POST"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-7 sm:space-y-8"
    >
      {/* Netlify honeypot field */}
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="apply" />

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-black mb-3">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-black mb-3">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
          placeholder="john@company.com"
        />
      </div>

      {/* Investment Preference */}
      <div>
        <label className="block text-sm font-semibold text-black mb-4">
          Investment Preference <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {['Full Acquisition', 'Partnership', 'Not Sure'].map((option) => (
            <div key={option} className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-300">
              <input
                type="radio"
                id={option.replace(/\s/g, '')}
                name="investmentPreference"
                value={option}
                required
                className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={option.replace(/\s/g, '')} className="ml-3 text-sm font-medium text-gray-900 cursor-pointer flex-1">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Amounts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="minInvestment" className="block text-sm font-semibold text-black mb-3">
            Minimum Investment ($) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-3.5 text-gray-500">$</span>
            <input
              type="number"
              id="minInvestment"
              name="minInvestment"
              required
              min="0"
              step="1000"
              className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              placeholder="50,000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="maxInvestment" className="block text-sm font-semibold text-black mb-3">
            Maximum Investment ($) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-3.5 text-gray-500">$</span>
            <input
              type="number"
              id="maxInvestment"
              name="maxInvestment"
              required
              min="0"
              step="1000"
              className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              placeholder="500,000"
            />
          </div>
        </div>
      </div>

      {/* Experience */}
      <div>
        <label htmlFor="experience" className="block text-sm font-semibold text-black mb-3">
          Your Experience <span className="text-red-500">*</span>
        </label>
        <p className="text-xs text-gray-600 mb-2">Tell us about your experience with e-commerce, SaaS, or direct-to-consumer businesses.</p>
        <textarea
          id="experience"
          name="experience"
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 resize-none"
          placeholder="Describe your background and experience with consumer businesses..."
        />
      </div>

      {/* Additional Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-black mb-3">
          Additional Information
        </label>
        <p className="text-xs text-gray-600 mb-2">Optional: Anything else you'd like to share about your business or investment goals.</p>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 resize-none"
          placeholder="Tell us more about your vision..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          'Submit Application'
        )}
      </button>

      <p className="text-xs text-gray-600 text-center">
        <span className="text-red-500">*</span> Required fields. We'll review your application and respond within 5-7 business days.
      </p>
    </form>
  )
}
