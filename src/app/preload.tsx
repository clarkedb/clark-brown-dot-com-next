'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
  ReactDOM.preload('feather-sprite.svg', { as: 'image' })
  return null
}
