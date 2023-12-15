// https://vike.dev/onRenderHtml

import { renderToStream } from 'react-streaming/server'
import React from 'react'
import { escapeInject } from 'vike/server'
import { PageShell } from './PageShell'
import type { OnRenderHtmlAsync } from 'vike/types'
import { defineReact } from './defineReact'

export const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { _Page } = pageContext

  const undefineReact = defineReact()
  const stream = await renderToStream(
    <PageShell pageContext={pageContext}>
      <_Page />
    </PageShell>,
  )
  undefineReact()

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`

  return {
    documentHtml,
    // See https://vike.dev/stream#initial-data-after-stream-end
    pageContext: async () => {
      return {}
    }
  }
}
