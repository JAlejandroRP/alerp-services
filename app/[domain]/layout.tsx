import Sidebar from '@/components/shared/Sidebar'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const layout = async ({
  params,
  children
}: {
  params: { domain: string },
  children: ReactNode
}) => {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()

  // if (error
  //   || !data.user
  //   // || !params
  //   // || !params.domain
  //   // || !data.user.email
  //   // || !data.user.user_metadata.domain
  // ) return <main>
  //   {children}
  // </main>

  if (error
    || !data.user
    // || !params
    // || !params.domain
    || !data.user.email
    || !data.user.user_metadata.domain
  ) redirect('/sign-in')

  return (
    <main className='flex min-h-screen w-full flex-col lg:flex-row'>
      <Sidebar
        tenant={data.user.user_metadata.domain}
        userEmail={data.user.email}
      />
      {children}
    </main>
  )
}

export default layout