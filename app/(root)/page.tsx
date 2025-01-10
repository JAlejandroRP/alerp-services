import Proyect from "@/components/shared/LandingPage/Proyect"
import Service from "@/components/shared/LandingPage/Service"
import { ModeToggle } from "@/components/shared/ThemeSelector"
import { Button } from "@/components/ui/button"
import { Services } from "@/constants/services"
import { getProyects } from "@/lib/actions/proyects.actions"
import { ArrowDown, ArrowRight, Linkedin, LinkedinIcon, LucideLinkedin } from "lucide-react"
import Link from "next/link"

export default async function page() {
  const proyects = await getProyects()

  if (proyects.error) {
    console.trace(proyects.error)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 backdrop-blur-sm">
        <nav className="flex flex-row items-stretch justify-around gap-4 sm:gap-6 w-full">
          <Link className="hover:text-red-700 text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="hover:text-red-700 text-sm font-medium hover:underline underline-offset-4" href="#proyects">
            Work experience
          </Link>
          <Link className="hover:text-red-700 text-sm font-medium hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="hover:text-red-700 text-sm font-medium hover:underline underline-offset-4" href="mailto:dev.alerp@gmail.com" target="_self">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        {/* <div
          className="fixed bottom-1 right-0 p-4">
          <ModeToggle rounded="rounded-2xl" />
        </div> */}
        <section className="w-full py-16 md:py-16 lg:py-24 xl:py-32 h-dvh">
          <div className="flex flex-col items-center space-y-4 text-center h-4/6">
            <div className="space-y-2">
              <h1 className="text-5xl tracking-tighter">
                Alejandro Pérez
              </h1>
              <h1 className="text-4xl text-red-700 tracking-tighter pl-28">
                Computer Engineer
              </h1>
            </div>
            <div className="space-x-4 pt-16">
              <Link href='#services'>
                <Button className="my-auto gap-2 hover:scale-110 transition-transform duration-300 rounded-full bg-red-700 px-6 h-12 hover:bg-red-600">
                  <p>See experience</p>
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center h-full w-full pb-20">
            <div className="relative w-10 h-10 overflow-hidden group">
              <LinkedinIcon
                role='button'
                className="absolute w-full h-full transition-all duration-300 ease-in-out transform group-hover:translate-y-full"
                size={40}
              />
              <LinkedinIcon
                role='button'
                className="absolute w-full h-full transition-all duration-300 ease-in-out transform -translate-y-full group-hover:translate-y-0"
                size={40}
              />
            </div>
          </div>
        </section>
        <section id="proyects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8">
              Proyectos actuales
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
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Nuestros Servicios
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {Services.map(service => <Service
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
              )}
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Listo para impulsar tu negocio?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Contáctanos hoy para una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href='mailto:dev.alerp@gmail.com' target="_self">
                  <Button className="w-full" size="lg">
                    Contáctanos <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
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