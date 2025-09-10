import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UX Research Designer',
  description: 'AI-powered research design tool that ensures methodological rigor and helps create bulletproof research plans.',
  keywords: ['UX Research', 'Research Design', 'AI Tool', 'Methodology', 'User Experience'],
  authors: [{ name: 'UXR Tools Suite' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <h1 className="text-xl font-bold text-gray-900">
                    UX Research Designer
                  </h1>
                  <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                    v1.0
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  AI-Powered Research Design Tool
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="bg-white border-t border-gray-200 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="text-center text-sm text-gray-500">
                <p>© 2024 UXR Research Workflow Tools Suite</p>
                <p className="mt-1">Built for UX researchers, by UX researchers</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}