import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <div>
      <section className="text-left px-6 py-24 max-w-3xl mx-auto">
        {/* Contenu texte aligné à gauche */}
        <div className="text-tech.foreground">
          <h1 className="text-4xl sm:text-5xl font-bold font-krushnadevaraya text-tech-title mb-4">
            Hi, I'm Yacine<span className="text-tech-accent"></span>
          </h1>

          {/* Paragraphe 1 avec police "Roboto" */}
          <p className="text-2xl text-tech-title leading-relaxed mb-4 font-krushnadevaraya">
            I'm passionate about Deep Learning, Generative AI, Mathematics and more generally, Artificial Intelligence
          </p>

          {/* Paragraphe 2 avec police "IBM Plex Mono" */}
          <p className="text-2xl text-tech-highlight leading-relaxed mb-4 font-krushnadevaraya">
            Student in Double Degree at EPITA and Sorbonne University in the IMA master, specialized in Artificial Intelligence, Computer Vision and Medical Imaging
          </p>

          {/* Paragraphe 3 avec police "Poppins" */}
          <p className="text-2xl text-tech-title leading-relaxed mb-8 font-krushnadevaraya">
            Research Scientist Intern at Siemens Healthineers, working on Diffusion Models.
          </p>

          {/* Bouton "View My CV" */}
          <div className="flex justify-center">
            <a
              href="/cv"
              className="font-mono inline-block px-6 py-2 border border-tech-accent text-tech-accent rounded-md hover:bg-tech-accent hover:text-tech-background transition duration-300"
            >
              View My CV
            </a>
          </div>
        </div>
      </section>


      {/* gap : permet d'ajuster l'espacement entre les 3 bulles 
          py : permet d'ajuster l'espace entre les 3 bulles et la barre verticale
          mt : permet d'ajuster l'espace entre les 3 bulles et le view my cv 
      
      */}
      {/* Section de Contact */}
      <section className="flex justify-center gap-6 py-20 bg-tech-background">
        <a
          href="mailto:yacineboureghda14@gmail.com"
          className="bg-white text-tech-accent p-3 rounded-full shadow-md hover:scale-110 transform transition duration-300 ring-1 ring-tech-secondary"
          aria-label="Email"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://github.com/yacinebrg"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-tech-accent p-3 rounded-full shadow-md hover:scale-110 transform transition duration-300 ring-1 ring-tech-secondary"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yacine-cadi-boureghda-5b9550224"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-tech-accent p-3 rounded-full shadow-md hover:scale-110 transform transition duration-300 ring-1 ring-tech-secondary"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </section>
    </div>
  );
}
