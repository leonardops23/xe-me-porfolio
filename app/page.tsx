import Navbar from '@/components/navbar';
import Introduction from '@/components/introduction';
import AboutMe from '@/components/about-me';
import Porfolio from '@/components/porfolio';
import ContactMe from '@/components/contact-me';

export default function Home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Porfolio />
      <ContactMe />
    </main>
  )
}
