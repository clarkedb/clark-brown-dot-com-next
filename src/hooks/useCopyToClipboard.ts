import { useEffect, useState } from 'react'
/**
 * Hook that can copy a string to clipboard, reset after a specified time, and avoid react memory leaks.
 * This hook returns an object containing a boolean (copied) and a function (copyToClipboard).
 * The boolean will be set to true after you call the copyToClipboard function.
 * copyToClipboard is an async function that copies a given string to the clipboard.
 * @param timeoutLength Optionally, you can pass a timeoutLength which will reset the copied
 * variable to false after the specified timeoutLength in milliseconds.
 * @returns An object containing { copied, copyToClipboard }
 */
export default function useCopyToClipboard(timeoutLength?: number) {
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (timeoutLength && copied) {
      const timeoutId = setTimeout(() => {
        setCopied(false)
      }, timeoutLength)
      return () => {
        clearTimeout(timeoutId)
      }
    }

    return
  }, [copied, timeoutLength])

  const copyToClipboard = async (textToCopy: string) => {
    await navigator.clipboard.writeText(textToCopy)
    setCopied(true)
  }

  return { copied, copyToClipboard }
}
