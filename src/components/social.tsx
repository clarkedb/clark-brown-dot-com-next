import type { IconName } from './icon'
import { Icon } from './icon'

export function Social({ icon, url, label }: { icon: IconName; url: string; label: string }) {
  return (
    <a href={url} aria-label={label} target="_blank" rel="noopener">
      <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800">
        <Icon icon={icon} />
      </div>
    </a>
  )
}
