import Test1 from '@/app/test1/_components/1'
import React from 'react'

const TestPage = () => {
  return (
    <div>
      <p>자식컴포넌트가 없는 경로</p>
      <Test1 />
    </div>
  )
}

export default TestPage