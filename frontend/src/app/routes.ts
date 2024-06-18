import Tests from "@/app/_components/01_test"
import ChildTest1 from "@/app/_components/02_tab/2"
import ChildTest2 from "@/app/_components/02_tab/3"

export const routePaths = [
  '/',
  '/tests',
  '/test2',
  '/test2/child1',
  '/test2/child2'
] as const
export type ROUTE_PATH = (typeof routePaths)[number]

type BaseRoute = {
  key: ROUTE_PATH
  link: ROUTE_PATH
  name: string
}
export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[]
}
export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null
}
export type ROUTE = ParentRoute | ChildRoute

export const routes: Record<ROUTE_PATH, ROUTE> = {
  '/': {
    key: '/',
    link: '/',
    name: 'root',
    children: [
      '/tests',
      '/test2'
    ]
  },
  '/tests': {
    key: '/tests',
    link: '/tests',
    name: '테스트',
    children: Tests
  },
  '/test2': {
    key: '/test2',
    link: '/test2/child1',
    name: '테스트2',
    children: ['/test2/child1','/test2/child2'],
  },
  '/test2/child1': {
    key: '/test2/child1',
    link: '/test2/child1',
    name: '테스트2-1',
    children: ChildTest1
  },
  '/test2/child2': {
    key: '/test2/child2',
    link: '/test2/child2',
    name: '테스트2-2',
    children: ChildTest2
  }
}


export const isParentRoute = (route: ROUTE): route is ParentRoute => Array.isArray(route.children)

export const gnbRootList = (routes['/'] as ParentRoute).children.map(r => routes[r])