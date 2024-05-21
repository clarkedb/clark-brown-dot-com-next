import { useCallback, useState } from 'react'

export enum LocalStorageKey {
  RecentSearches = 'RecentSearches',
}

/**
 * This hook shuold be used like React.useState with the additional feature in that it syncs changes to local storage
 * @param {T} key the local storage key to save to
 * @param {T} initialValue the initalValue to set state with if not found in local storage
 * @param {Function} shouldUseInitialValue a callback that will use the initialValue if it returns true, regardless of storage value
 * @returns {[T, Function]} the same api as React.useState; a value and a function to update the value
 */
export default function useLocalStorage<T>(
  key: LocalStorageKey,
  initialValue?: T,
  shouldUseInitialValue?: (storageValue: T) => boolean,
) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      // Get from local storage by key
      const item = localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      if (item && shouldUseInitialValue?.(JSON.parse(item))) {
        if (typeof window !== 'undefined') {
          localStorage.setItem(key, JSON.stringify(initialValue))
        }
        return initialValue
      }
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      if (process.env.NODE_ENV === 'development') {
        console.log(error)
      }
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = useCallback(
    (value: T | ((prevValue: T) => T)) => {
      try {
        // Allow value to be a function so we have same API as useState
        if (value instanceof Function) {
          setStoredValue((prevValue) => {
            const newValue = value(prevValue)
            // Save to local storage
            if (typeof window !== 'undefined') {
              localStorage.setItem(key, JSON.stringify(newValue))
            }
            return newValue
          })
        } else {
          // Save state
          setStoredValue(value)
          // Save to local storage
          if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(value))
          }
        }
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error)
      }
    },
    [key],
  )

  return [storedValue, setValue] as const
}
