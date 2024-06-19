'use client'

import { ROUTE_PATH, isParentRoute, routePaths, routes } from '@/app/routes'
import { notFound } from 'next/navigation'

const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ['', ...item].join('/') as ROUTE_PATH
  const route = routes[path]
  if (!routePaths.includes(path) || isParentRoute(route) || !route.children) {
    notFound()
    return null
  }
  const Component = route.children
  return <Component />
}

export default ItemPage
