import Title from "./shared/title";
import { dataPortfolio } from "../data/data";
import { Card, CardContent } from "@/components/ui/card";

const Porfolio = () => {
  return (
    <section id="portfolio" className="w-full max-w-3xl mx-auto px-4">
      <Title title="Portafolio" subtitle="Mis Proyectos" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            dataPortfolio.map((item) => (
                <div key={item.id}>
                    <Card>
                        <CardContent>
                            <div className="flex flex-col gap-4">
                                <h3>{item.title}</h3>
                                <img src={item.image} alt="" />
                                <a href={item.urlGithub} target="_blank">Github</a>
                                <a href={item.urlDemo} target="_blank">Demo</a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default Porfolio;
