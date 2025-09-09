import Title from "./shared/title";
import { dataPortfolio } from "../data/data";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react"; // opcional: instalar con `npm install lucide-react`

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="w-full max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="portfolio-title"
    >
      <Title title="Portafolio" subtitle="Mis Proyectos" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12">
        {dataPortfolio.map(({ id, title, image, urlGithub, urlDemo }) => (
          <article
            key={id}
            className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {title}
                </h3>

                <div className="relative aspect-video mb-4 rounded-md overflow-hidden">
                  <img
                    src={image}
                    alt={`Captura de pantalla del proyecto ${title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href={urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Código en GitHub
                  </a>

                  <a
                    href={urlDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
