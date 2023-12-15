import React from 'react'

export const defineReact = () => {
  const oldReact = globalThis.React
  globalThis.React = React
  return () => {
    globalThis.React = oldReact
  }
}
