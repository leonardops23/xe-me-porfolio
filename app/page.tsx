import Navbar from '@/components/navbar';
import Introduction from '@/components/introduction';
import AboutMe from '@/components/about-me';

export default function Home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe />
    </main>
  )
}
