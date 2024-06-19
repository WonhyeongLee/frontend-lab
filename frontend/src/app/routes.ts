import ChildComponentTest from "@/app/parent-test/child-test/page"
import Child2ComponentTest from "@/app/parent-test/child-test/page"
import TestPage from "@/app/test1/page"


export const routePaths = [
  '/',
  '/test1',
  '/parent-test',
  '/parent-test/child-test',
  '/parent-test/child2-test'
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
      '/test1',
      '/parent-test',
    ]
  },
  '/test1': {
    key: '/test1',
    link: '/test1',
    name: '테스트',
    children: TestPage
  },
  '/parent-test': {
    key: '/parent-test',
    link: '/parent-test/child-test',
    name: '부모요소테스트',
    children: ['/parent-test/child-test','/parent-test/child2-test'],
  },
  '/parent-test/child-test': {
    key: '/parent-test/child-test',
    link: '/parent-test/child-test',
    name: '자식요소테스트1',
    children: ChildComponentTest
  },
  '/parent-test/child2-test': {
    key: '/parent-test/child2-test',
    link: '/parent-test/child2-test',
    name: '자식요소테스트2',
    children: Child2ComponentTest
  }
}


export const isParentRoute = (route: ROUTE): route is ParentRoute => Array.isArray(route.children)

export const gnbRootList = (routes['/'] as ParentRoute).children.map(r => routes[r])