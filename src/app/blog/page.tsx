import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A blog about technology and mathematics',
}

export default function Blog() {
  return (
    <section className="flex flex-col items-center justify-between">
      <div>This page is a work in progress.</div>
      <div>🚧 🚧 🚧 🚧</div>
      <div>Please come back later.</div>
    </section>
  )
}
