import Discover from "../components/Home/Discover";
import HowItWorks from "../components/Home/HowItWorks";
import News from "../components/Home/News";
import Quiz from "../components/Home/Quiz";
import Stories from "../components/Home/Stories";
import Trusted from "../components/Home/Trusted";
import Carousels from "../components/Home/Carousels";
import Skills from "../components/Home/Skills";
import Activities from "../components/Home/Activities";
import Career from "../components/Home/Career";
import Internship from "../components/Home/Internship";

export default function Home() {
  return (
    <main>
      <Carousels />
      <HowItWorks />
      <News />
      <Discover />
      <Quiz />
      <Career />
      <Skills />
      <Trusted />
      <Internship />
      <Activities />
      <Stories />
    </main>
  );
}
