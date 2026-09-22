import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";
import { About } from "./sections/About";
import { GitHubActivity } from "./sections/GitHubActivity";
import { Contact } from "./sections/Contact";
import { SecretLab } from "./sections/SecretLab";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <main>
      <Hero />

      <Work />

      <About />

      <GitHubActivity />

      <Contact />

      <SecretLab />

      <Footer />
    </main>
  );
}

export default App;