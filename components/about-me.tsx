"use client"

import { useState, useEffect } from "react"
import { Code, Lightbulb, Palette, User } from "lucide-react"
import Title from "./shared/title"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export default function AboutMe() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Simular la animación de entrada escalonada con CSS
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-16 md:py-24">
      <Title title="Sobre mi" subtitle="Conóceme" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagen con animación CSS */}
        <div
          className={cn(
            "flex justify-center md:justify-start transition-opacity duration-500 ease-in-out",
            isLoaded ? "opacity-100" : "opacity-0",
            "transition-all duration-300 delay-100",
          )}
        >
          {/* Imagen visible en todos los dispositivos, pero con diferentes tamaños */}
          <div className="relative w-48 ml-8 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 transition-all duration-300 hover:scale-105 hover:rotate-2 shadow-lg hover:shadow-xl hover:shadow-primary/20">
            <img
              src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Tu nombre"
              width={256}
              height={256}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

        {/* Contenido de texto */}
        <div className="space-y-6">
          <p
            className={cn(
              "text-base md:text-lg transition-all duration-300 ease-in-out delay-[300ms]",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            Apasionado por crear experiencias digitales atractivas y funcionales. Con experiencia en desarrollo web y
            diseño de interfaces, me enfoco en soluciones creativas para problemas complejos.
          </p>
        </div>
      </div>

      {/* Sección de pestañas (siempre visible) */}
      <div
        className={cn(
          "mt-12 transition-all duration-500 ease-in-out",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <Tabs defaultValue="perfil" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="perfil">Perfil</TabsTrigger>
            <TabsTrigger value="habilidades">Habilidades</TabsTrigger>
            <TabsTrigger value="intereses">Intereses</TabsTrigger>
          </TabsList>

          <TabsContent value="perfil" className="mt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <User className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">Perfil</h3>
                  <p className="text-muted-foreground">
                    Soy un Programador web full stack con más de 2 años de experiencia creando aplicaciones web modernas y
                    responsivas. Tengo conocimientos en JavaScript, Python, y Rust como lenguajes de programación, siempre buscando la mejor experiencia
                    para el usuario final.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Lightbulb className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-medium">Filosofía</h3>
                  <p className="text-muted-foreground">
                    Creo que el mejor diseño es aquel que resuelve problemas reales de forma elegante y simple. Me
                    apasiona crear interfaces que sean tanto hermosas como funcionales.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="habilidades" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Desarrollo Frontend", level: 70 },
                { name: "Desarrollo Backend", level: 50 },
                { name: "Python & Django, Flask", level: 50 },
                { name: "React", level: 62 },
                { name: "Tailwind CSS", level: 60 },
                { name: "JavaScript", level: 60 },
              ].map((skill, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">{skill.name}</h3>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary origin-left transition-transform duration-1000 ease-out"
                        style={{
                          transform: isLoaded ? `scaleX(${skill.level / 100})` : "scaleX(0)",
                          transitionDelay: `${500 + index * 100}ms`,
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="intereses" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code className="h-10 w-10" />,
                  title: "Programación",
                  desc: "Explorar nuevas tecnologías y frameworks",
                },
                {
                  icon: <Palette className="h-10 w-10" />,
                  title: "Diseño",
                  desc: "Crear interfaces atractivas y funcionales",
                },
                {
                  icon: <Lightbulb className="h-10 w-10" />,
                  title: "Innovación",
                  desc: "Buscar soluciones creativas a problemas complejos",
                },
              ].map((interest, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="text-primary mb-4">{interest.icon}</div>
                  <h3 className="text-lg font-medium mb-2">{interest.title}</h3>
                  <p className="text-muted-foreground">{interest.desc}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
