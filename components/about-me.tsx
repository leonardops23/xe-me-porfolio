import Title from "./shared/title"
import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      className="p-6 md:px-12 md:py-20 max-w-5xl mx-auto"
      id="about-me"
    >
      <Title title="Sobre mi" subtitle="Conoceme" />

    </section>
  )
}

export default AboutMe;
