// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      _Page: Page
      _pageId: '/pages/_'
    }
  }
}

type Page = () => React.ReactElement

// Tell TypeScript that this file isn't an ambient module
export {}