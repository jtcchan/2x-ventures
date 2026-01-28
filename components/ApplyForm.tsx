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
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✓</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Thank you for your application!
        </h2>
        <p className="text-gray-600 mb-6">
          We'll review your application and get back to you within 5-7 business days.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
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
      className="space-y-6"
    >
      {/* Netlify honeypot field */}
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="apply" />

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
          placeholder="your@email.com"
        />
      </div>

      {/* Investment Preference */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          Investment Preference *
        </label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="fullAcquisition"
              name="investmentPreference"
              value="Full Acquisition"
              required
              className="h-4 w-4 text-gray-900 border-gray-300 focus:ring-gray-900"
            />
            <label htmlFor="fullAcquisition" className="ml-3 text-sm text-gray-700">
              Full Acquisition
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="partnership"
              name="investmentPreference"
              value="Partnership"
              className="h-4 w-4 text-gray-900 border-gray-300 focus:ring-gray-900"
            />
            <label htmlFor="partnership" className="ml-3 text-sm text-gray-700">
              Partnership
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="notSure"
              name="investmentPreference"
              value="Not Sure"
              className="h-4 w-4 text-gray-900 border-gray-300 focus:ring-gray-900"
            />
            <label htmlFor="notSure" className="ml-3 text-sm text-gray-700">
              Not Sure
            </label>
          </div>
        </div>
      </div>

      {/* Minimum Investment */}
      <div>
        <label htmlFor="minInvestment" className="block text-sm font-semibold text-gray-900 mb-2">
          Minimum Investment Amount ($) *
        </label>
        <input
          type="number"
          id="minInvestment"
          name="minInvestment"
          required
          min="0"
          step="1000"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
          placeholder="50000"
        />
      </div>

      {/* Maximum Investment */}
      <div>
        <label htmlFor="maxInvestment" className="block text-sm font-semibold text-gray-900 mb-2">
          Maximum Investment Amount ($) *
        </label>
        <input
          type="number"
          id="maxInvestment"
          name="maxInvestment"
          required
          min="0"
          step="1000"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
          placeholder="500000"
        />
      </div>

      {/* Experience */}
      <div>
        <label htmlFor="experience" className="block text-sm font-semibold text-gray-900 mb-2">
          Experience with E-commerce / SaaS / Direct-to-Consumer *
        </label>
        <textarea
          id="experience"
          name="experience"
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
          placeholder="Tell us about your experience..."
        />
      </div>

      {/* Additional Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
          placeholder="Anything else you'd like to share?"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>

      <p className="text-xs text-gray-500">
        * Required fields. We'll review your application and get back to you within 5-7 business days.
      </p>
    </form>
  )
}
