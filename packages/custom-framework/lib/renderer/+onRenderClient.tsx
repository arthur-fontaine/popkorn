// https://vike.dev/onRenderClient

import React from 'react'
import ReactDOM from 'react-dom/client'
import { PageShell } from './PageShell'
import type { OnRenderClientAsync } from 'vike/types'
import { defineReact } from './defineReact'

let root: ReactDOM.Root
export const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {
  const { _Page } = pageContext

  const undefineReact = defineReact()
  const page = (
    <PageShell pageContext={pageContext}>
      <_Page />
    </PageShell>
  )
  undefineReact()

  const container = document.getElementById('page-view')!

  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page)
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
  }
}
