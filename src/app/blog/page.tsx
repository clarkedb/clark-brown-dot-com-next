import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A blog about technology and mathematics',
}

export default function Blog() {
  return (
    <section className="prose prose-neutral text-center dark:prose-invert">
      <p>This page is a work in progress.</p>
      <p>🚧 🚧 🚧 🚧</p>
      <p>Please come back later.</p>
    </section>
  )
}
