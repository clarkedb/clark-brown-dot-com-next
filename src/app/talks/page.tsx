import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Talks',
  description: "Talks I've given",
}

export default function Talks() {
  return (
    <section className="flex flex-col items-center justify-between">
      <div>This page is a work in progress.</div>
      <div>🚧 🚧 🚧 🚧</div>
      <div>Please come back later.</div>
    </section>
  )
}
