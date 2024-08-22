'use server'
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react'

const Proyect = ({ name, url, desc }: { name: string, url: string, desc: string }) => {
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

export default Proyect