import { Briefcase, ChartLine, Cog, Globe } from "lucide-react";

export const Services = [
  {
    title: 'Consultoría de Proyectos',
    description: 'Ofrecemos asesoramiento especializado para guiar tus proyectos tecnológicos hacia el éxito. Desde la fase de planificación hasta la ejecución, me aseguro de que cada detalle esté alineado con tus objetivos de negocio.',
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    title: 'Automatización de Procesos de Negocio',
    description: ' Mejora la eficiencia de tu empresa mediante la automatización de tareas y procesos repetitivos. Implemento soluciones personalizadas que optimizan la productividad y reducen los costos operativos.',
    icon: <Cog className="w-8 h-8" />
  },
  {
    title: 'Desarrollo de Aplicaciones Web',
    description: 'Diseño y desarrollo aplicaciones web a medida que se adaptan a las necesidades específicas de tu negocio. Utilizando las últimas tecnologías, creo experiencias digitales robustas, seguras y escalables.',
    icon: <Globe className="w-8 h-8" />
  },
  {
    title: 'Análisis de Rendimiento de Servicios',
    description: 'Evalúo el rendimiento de tus sistemas y servicios para identificar cuellos de botella y áreas de mejora. Proporcionamos soluciones prácticas para optimizar el rendimiento y garantizar la máxima eficiencia operativa.',
    icon: <ChartLine className="w-8 h-8"/>
  }
]