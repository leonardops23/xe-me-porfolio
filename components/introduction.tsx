// Introduction.tsx
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { buttonVariants } from "./ui/button";

const Introduction = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="introduction-title">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
        {/* Saludo */}
        <p className="text-lg text-primary font-medium">Hello, I'm</p>

        {/* Nombre */}
        <h1 id="introduction-title" className="text-4xl sm:text-5xl font-bold leading-tight">
          Iván Pacheco 🧑🏻‍💻
        </h1>

        {/* Cargo */}
        <span className="text-xl text-muted-foreground">Full Stack Developer</span>

        {/* Avatar */}
        <img
          src="https://avatars.githubusercontent.com/u/181615706?v=4"
          alt="Iván Pacheco - Full Stack Developer"
          className="w-36 h-36 rounded-full mx-auto mt-6 border-4 border-primary/20 shadow-lg"
          loading="lazy"
        />

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="mailto:tu-email@example.com"
            className={buttonVariants({ size: "lg" })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Contacta conmigo
          </Link>

          <Link
            href="/cv-ivan-pacheco.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="cv-ivan-pacheco.pdf"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Descargar CV
            <Download className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
