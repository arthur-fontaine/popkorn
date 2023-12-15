import React from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from 'vike/types'

export { PageShell }

function PageShell({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return children
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      {children}
    </div>
  )
}
