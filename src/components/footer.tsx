import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-auto flex flex-row items-end px-2 py-4">
      <div className="fade w-100 relative mx-auto flex scroll-pr-6 flex-row text-sm tracking-tighter md:relative md:overflow-auto">
        <p>Copyright Clark Brown, 2024</p>
      </div>
    </footer>
  )
}
