import ApplyForm from '@/components/ApplyForm'

export const metadata = {
  title: 'Apply | 2x Ventures',
  description: 'Apply to partner with 2x Ventures',
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Apply to 2x Ventures
          </h1>
          <p className="text-lg text-gray-600">
            Tell us about your business and let's explore how we can partner together to achieve exponential growth.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <ApplyForm />
        </div>
      </div>
    </div>
  )
}
