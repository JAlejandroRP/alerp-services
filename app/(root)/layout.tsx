export const metadata = {
  title: 'ALERP',
  description: 'ALERP Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen w-full">
      {children}
    </main>
  )
}
