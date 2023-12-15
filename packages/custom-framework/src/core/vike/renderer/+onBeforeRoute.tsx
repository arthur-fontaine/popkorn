import type { OnBeforeRouteAsync } from 'vike/types'

export const onBeforeRoute: OnBeforeRouteAsync = async (_pageContext): ReturnType<OnBeforeRouteAsync> => {
  return {
    pageContext: {
      _Page: () => <div>hello</div>,
      _pageId: '/core/vike/pages/_',
    },
  }
}
