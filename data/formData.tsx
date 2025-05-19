import * as z from "zod";
import {
    Mail,
    Phone,
    Github,
    Linkedin,
    Twitter,
} from "lucide-react";


// This schema defines the structure and validation rules for the form data.
// It uses the Zod library to create a schema that validates the input fields.
export const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un correo electrónico válido.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  })
})


// Datos de contacto y redes sociales
const contactInfo = [
{ icon: <Mail className="h-5 w-5" />, label: "Email", value: "tu.email@ejemplo.com" },
{ icon: <Phone className="h-5 w-5" />, label: "Teléfono", value: "+1 (234) 567-8901" },
]

const socialLinks = [
{ icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/tuusuario" },
{ icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://linkedin.com/in/tuusuario" },
{ icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "https://twitter.com/tuusuario" },
]
