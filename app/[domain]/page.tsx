import { signOut } from '@/lib/actions/auth.actions'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const page = async ({
  params,
}: {
  params: { domain: string },
}) => {

  return (
    <div className='flex flex-col'>
      Main page
      {/* <span>Hello {data.user.email}</span> */}
      {/* <button formAction={signOut}>Close session?</button> */}
      {/* <span>{params?.domain}</span> */}
    </div>
  )
}

export default page