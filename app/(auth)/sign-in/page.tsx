import React from 'react'
import { login, signup } from '@/lib/actions/auth.actions'


const SignInPage = () => {
  return (
    <form>
      <div className='flex flex-col'>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </div>
    </form>
  )
}

export default SignInPage