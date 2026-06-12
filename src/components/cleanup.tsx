'use client'

import { useEffect } from 'react'

// cleans up the old website's service worker one time
export function ServiceWorkerCleanup() {
  useEffect(() => {
    async function cleanup() {
      if (!('serviceWorker' in navigator)) return

      const key = 'sw-cleanup-v1'
      if (localStorage.getItem(key)) return

      const registrations = await navigator.serviceWorker.getRegistrations()

      await Promise.all(
        registrations
          .filter((registration) => {
            const scriptUrl =
              registration.active?.scriptURL ??
              registration.waiting?.scriptURL ??
              registration.installing?.scriptURL ??
              ''

            return scriptUrl.endsWith('/sw.js')
          })
          .map((registration) => registration.unregister()),
      )

      localStorage.setItem(key, 'done')
    }

    cleanup().catch(console.error)
  }, [])

  return null
}
