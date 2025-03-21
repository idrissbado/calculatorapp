import Calculator from "@/components/calculator"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
          Calculator App
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A beautiful calculator built with Next.js and Tailwind CSS. This project demonstrates version control,
          continuous integration, and quality assurance practices.
        </p>
      </div>

      <Calculator />

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          Built by students learning software development practices.
          <br />
          Version control with Git | CI with GitHub Actions | QA with Jest and ESLint
        </p>
      </div>
    </main>
  )
}

