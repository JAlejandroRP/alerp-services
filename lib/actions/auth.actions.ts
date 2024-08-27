'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../supabase/server'
import { handleError } from '../utils'

export async function login(formData: FormData) {
  const supabase = createClient()
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const userData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(userData)

  if (error) {
    console.log(error?.message);
    redirect('/error')
  }

  const { data, error: userError } = await supabase.auth.getUser()

  if(userError || !data.user?.user_metadata?.domain){
    console.error('user has no domain!');
    return;
  }

  const homeUrl = `/${data.user.user_metadata.domain}`

  revalidatePath(homeUrl, 'layout')
  redirect(homeUrl)
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signOut() {
  const supabase = createClient()
  await supabase.auth.signOut()
}