import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      SHORT URL PAGE
      <Link href={'./add'}>
        ADD
      </Link>
    </div>
  )
}

export default page