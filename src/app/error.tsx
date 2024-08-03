'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex w-full flex-col gap-5">
      <p>Oh no, something went wrong... maybe refresh?</p>
      <button
        onClick={reset}
        className='"rounded hover:bg-neutral-700" bg-neutral-800 px-4 py-2 font-bold text-neutral-300'
      >
        Refresh the page
      </button>
      <text className="mx-auto mt-40 text-8xl font-extrabold text-neutral-700 dark:text-neutral-300">
        500
      </text>
    </div>
  )
}
