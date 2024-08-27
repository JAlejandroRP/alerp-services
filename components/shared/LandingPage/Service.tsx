import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, LucideProps } from 'lucide-react'
import React, { ForwardRefExoticComponent, RefAttributes } from 'react'

const Service = ({ title, description, icon }: { title: string, description: string, icon?: JSX.Element }) => {
  return (
    <Card>
      <CardHeader>
        {icon}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description} </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default Service