"use client";
import React from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '../ui/button';
import { ModeToggle } from './ThemeSelector';
import { Label } from '../ui/label';
import { createClient } from '@/lib/supabase/client';
import { signOut } from '@/lib/actions/auth.actions';

const sidebarItem = (link: any, pathname: string) => {
  const isActive = link.route === pathname;
  return (<li
    key={link.route}
  >
    <Link
      className={`flex p-16-semibold size-full gap-4 p-4 ${isActive ? 'underline bg-muted/100 rounded-2xl' : ''}`}
      href={link.route}
    >
      <>
        <div className='my-auto '>
          {link.icon}
        </div>
        <span className='text-md'>
          {link.label}
        </span>
      </>
    </Link>
  </li>)
}

const Sidebar = ({ tenant, userEmail }: { tenant: string, userEmail: string }) => {
  const splittedEmail = userEmail.split('@')[0]

  return (
    // oculto siempre a no ser que sea lg
    <aside className="hidden h-screen w-58 p-5 lg:flex print:hidden">
      <div className="flex size-full flex-col gap-4">
        <nav className='h-full flex-col justify-between md:flex md:gap-4'>
          <ul className="">
            <li>
              <div className='flex size-full gap-3 pl-4'>
                <>
                  {/* <Image
                    src='/assets/icons/sislab.png'
                    alt='logo'
                    width={24}
                    height={20}
                    className=''
                  /> */}
                  <Label className='m-auto ml-1 capitalize'>{tenant}</Label>
                </>
              </div>
            </li>
            {/* {(user.role === UserRoles.patient ||
              user.role === UserRoles.particular)
              && patientNavLinks.map(link => sidebarItem(link, pathname))}
            {user.role === UserRoles.user && webUserNavLinks.map(link => sidebarItem(link, pathname))}
            {(user.role === UserRoles.admin) &&
              webUserNavLinks.map(link => sidebarItem(link, pathname))}
            {(user.role === UserRoles.admin) &&
              AdminNavLinks.map(link => sidebarItem(link, pathname))} */}
          </ul>
          <ul>
            <li
              className='flex  justify-center items-center gap-4 p-4 bg-muted/80 rounded-2xl'
            >
              {splittedEmail}
              <ModeToggle />
            </li>
            <Button className='w-full mt-4' variant={'ghost'}
              onClick={async () => await signOut()}
            >
              Cerrar sesión
            </Button>
          </ul>
        </nav>
      </div>
    </aside >
  )
}

export default Sidebar