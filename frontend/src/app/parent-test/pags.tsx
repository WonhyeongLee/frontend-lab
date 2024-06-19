import TestComponent1 from '@/app/parent-test/_components/1'
import TestComponent2 from '@/app/parent-test/_components/2'
import React from 'react'

const ParentComponent = () => {
  return (
    <div>
      <TestComponent1 />
      <TestComponent2 />
    </div>
  )
}

export default ParentComponent