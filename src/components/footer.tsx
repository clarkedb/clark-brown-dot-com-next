import Link from 'next/link'

const footerItems = {
  '/privacy': {
    name: 'privacy',
  },
  '/imprint': {
    name: 'imprint',
  },
}

export function Footer() {
  return (
    <footer className="mt-auto flex flex-row items-center px-2 py-4">
      <div className="fade relative flex w-full max-w-2xl scroll-pr-6 flex-col-reverse items-center justify-between gap-y-2 text-sm tracking-tighter md:relative md:mx-auto md:flex-row md:gap-y-0 md:overflow-auto">
        <p>© 2026 - Clark Brown</p>
        <div className="mx-auto flex flex-row space-x-4 md:mx-0">
          {Object.entries(footerItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 hover:underline dark:hover:text-neutral-200"
              >
                {name}
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
