"use client";

import { useState, useEffect } from "react";
import { Code, Lightbulb, Palette, User } from "lucide-react";
import Title from "./shared/title";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function AboutMe() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full max-w-5xl mx-auto px-6 py-20 md:py-28"
      aria-labelledby="about-title"
    >
      {/* Fondo sutil con gradiente */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10 rounded-3xl"
        aria-hidden="true"
      />

      {/* Título */}
      <div className="text-center mb-16">
        <Title title="Sobre mí" subtitle="Conóceme" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
        {/* Imagen + Badge */}
        <div
          className={cn(
            "relative flex justify-center lg:justify-end",
            "opacity-0 transition-all duration-1000",
            isLoaded && "opacity-100 translate-y-0"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="relative group">
            {/* Imagen circular con borde animado */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Iván Pacheco - Desarrollador Full Stack"
                width={288}
                height={288}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Badge flotante decorativo */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full shadow-lg animate-pulse">
              Full Stack
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="space-y-8">
          {/* Texto introductorio */}
          <p
            className={cn(
              "text-lg leading-relaxed text-muted-foreground text-center lg:text-left transition-all duration-1000 delay-400 opacity-0",
              isLoaded && "opacity-100 translate-y-0"
            )}
          >
            Apasionado por crear experiencias digitales atractivas y funcionales. Con experiencia en desarrollo web y diseño de interfaces, me enfoco en soluciones creativas para problemas complejos.
          </p>

          {/* Pestañas */}
          <Tabs
            defaultValue="perfil"
            className={cn(
              "opacity-0 transition-all duration-1000 delay-600",
              isLoaded && "opacity-100"
            )}
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-6">
              <TabsTrigger value="perfil">Perfil</TabsTrigger>
              <TabsTrigger value="habilidades">Habilidades</TabsTrigger>
              <TabsTrigger value="intereses">Intereses</TabsTrigger>
            </TabsList>

            {/* --- PERFILES --- */}
            <TabsContent value="perfil" className="space-y-6 mt-2">
              <div className="flex items-start gap-4">
                <User className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Desarrollador Full Stack</h3>
                  <p className="text-muted-foreground mt-1">
                    Con más de 2 años de experiencia construyendo aplicaciones modernas con JavaScript, Python (Django), React y tecnologías web emergentes. Siempre en busca de entregar valor real al usuario.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Lightbulb className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Filosofía</h3>
                  <p className="text-muted-foreground mt-1">
                    Creo que el mejor diseño es el que combina belleza y funcionalidad. La simplicidad, la usabilidad y la performance son mis prioridades.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* --- HABILIDADES --- */}
            <TabsContent value="habilidades" className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Frontend", level: 70 },
                  { name: "Backend", level: 50 },
                  { name: "React / Next.js", level: 65 },
                  { name: "Python / Django", level: 55 },
                  { name: "Tailwind CSS", level: 60 },
                  { name: "JavaScript / TypeScript", level: 62 },
                ].map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary origin-left transition-transform duration-1000 ease-out"
                        style={{
                          transform: isLoaded
                            ? `scaleX(${skill.level / 100})`
                            : "scaleX(0)",
                          transitionDelay: `${700 + index * 100}ms`,
                        }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* --- INTERESES --- */}
            <TabsContent value="intereses" className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                {[
                  { icon: <Code />, title: "Programación", desc: "Nuevas tecnologías" },
                  { icon: <Palette />, title: "Diseño", desc: "UI/UX elegante" },
                  { icon: <Lightbulb />, title: "Innovación", desc: "Soluciones creativas" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-muted/50 hover:bg-accent/60 transition-colors duration-300 group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
