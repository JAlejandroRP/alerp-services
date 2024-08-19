import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const Proyect = (name: string, url: string, desc: string) => {
  return <Link
    href={url}
  >
    <Card>
      <CardContent className="p-4">
        <h3 className="font-bold mb-2">{name}</h3>
        <p className="text-sm text-gray-500">
          {desc}
        </p>
      </CardContent>
    </Card>
  </Link>
}

const Proyects = () => {
  const proyects = process.env.PROYECTS?.split(' ');
  const proyectsUrl = process.env.PROYECTS_URL?.split(' ');
  const proyectsDesc = process.env.PROYECTS_DESC?.split('~');

  if (!proyects || !proyectsUrl || !proyectsDesc)
    redirect('/_not-found')

  return (<div>
    {proyects?.map((proyect, i) => Proyect(proyect, proyectsUrl[i], proyectsDesc[i]))}
  </div>
  )
}

export default Proyects