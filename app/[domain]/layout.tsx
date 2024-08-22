import React, { ReactNode } from 'react'

const layout = ({
  params,
  children
}: {
  params: { domain: string },
  children: ReactNode
}) => {
  return (
    <div>
      {children}
      <span>{params?.domain}</span>
    </div>
  )
}

export default layout