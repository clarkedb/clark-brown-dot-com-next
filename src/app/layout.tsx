import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Providers } from './providers'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Clark Brown',
  description: 'Software Engineer and Avid Whiteboarder',
}

// TODO: add og:

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="flex min-h-screen flex-col antialiased">
        <div className="mx-4 flex max-w-2xl flex-col pb-2 pt-8  md:mx-auto md:pb-8">
          <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
            <Navbar />
            <Providers>{children}</Providers>
            <Analytics />
            <SpeedInsights />
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
