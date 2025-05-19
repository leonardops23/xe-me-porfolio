"use client"

import Title from "./shared/title";

import { Card, CardContent } from "../components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Textarea } from "./ui/textarea";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { formSchema } from "@/data/formData";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send, Twitter } from "lucide-react";
import { toast } from "sonner";

const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast.success("Mensaje enviado", {
        description: "Gracias por contactarme. Te responderé lo antes posible.",
        duration: 5000,
      })

      form.reset()
    } catch (error) {
      toast.error("Error al enviar", {
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full max-w-3xl mx-auto px-4" id="contact">
      <div className="text-center mt-20 mb-12">
        <Title
          title="Contacto"
          subtitle="¿Tienes alguna pregunta o propuesta? No dudes en contactarme. Estaré encantado 
            de escuchar tus ideas y responder a tus consultas." 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <Form {...form}>
              <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Nombre
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="tu.email@ejemplo.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Escribe tu mensaje aquí" className="min-h[120px]" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                    </svg>
                    Enviando...
                  </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Enviar mensaje
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-4">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Información de contacto</h2>
              <div className="">
                <div className="flex items-center gap-3 pt-2">
                  <Mail />
                  <p>ivanpachecoleo23@gmail.com</p>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <Phone />
                  <p>+593969803512</p>
                </div>
              </div>
            </CardContent>  
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Redes Sociales</h2>
              <div>
                <div className="flex items-center gap-3 pt-2">
                  <Github />
                  <a href="https://github.com/leonardops23" target="_blank">
                    <p>github.com/leonardops23</p>
                  </a>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <Linkedin />
                  <a href="https://www.linkedin.com/in/ivan-pacheco-59072a349/" target="_blank">
                    <p>linkedin.com/in/ivan-pacheco</p>
                  </a>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <Twitter />
                  <a href="https://bsky.app/profile/leonardps.bsky.social" target="_blank">
                    <p>bsky.app/profile/leonardps.bsky.social</p>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>        
        </div>
      </div>
    </section>
  )
}

export default ContactMe;
