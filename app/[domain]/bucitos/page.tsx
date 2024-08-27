import { createClient } from '@/lib/supabase/server'
import React from 'react'

const page = async() => {
  const supabase = createClient()
  const user = await supabase.auth.getSession()
  
  return (
    <div>bucitos domain page</div>
  )
}

export default page