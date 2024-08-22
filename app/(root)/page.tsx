import Proyect from "@/components/shared/proyect/Proyect"
import { ModeToggle } from "@/components/shared/ThemeSelector"
import { Button } from "@/components/ui/button"
import { getProyects } from "@/lib/actions/proyects.actions"
import Link from "next/link"

export default async function page() {
  const proyects = await getProyects()

  if(proyects.error) {
    console.trace(proyects.error)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">ALERP</span>
          <span className="font-bold text-lg">ALERP</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <div
          className="fixed bottom-1 right-0 p-4">
          <ModeToggle rounded="rounded-2xl" />
        </div>
        <section className="w-full py-16 md:py-16 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  ALERP Tech Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Delivering cutting-edge technology services to drive your business forward.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Our Services</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8">
              Current Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {proyects?.data?.map(e => <Proyect
                key={e.name}
                name={e.name}
                url={e.url.href}
                desc={e.description}
              />)}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 ALERP. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}