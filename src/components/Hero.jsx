import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <div>
      <section className="text-left px-6 py-12 max-w-4xl mx-auto bg-[#111927]">
        {/* Contenu texte aligné à gauche */}
        <div className="text-tech.foreground">
          <h1 className="text-4xl sm:text-5xl font-bold font-krushnadevaraya text-tech-title mb-5">
            Hi, I'm Yacine<span className="text-tech-accent"></span>
          </h1>

          {/* Paragraphe 1 avec police "Roboto" */}
          <p className="text-2xl text-tech-title leading-relaxed mb-5 font-krushnadevaraya">
            I'm passionate about Deep Learning, Generative AI, Mathematics and more generally, Artificial Intelligence
          </p>

          {/* Paragraphe 2 avec police "IBM Plex Mono" */}
          <p className="text-2xl text-tech-highlight leading-relaxed mb-5 font-krushnadevaraya">
            Student in Double Degree at EPITA and Sorbonne University in the IMA master, specialized in Artificial Intelligence, Computer Vision and Medical Imaging
          </p>

          {/* Paragraphe 3 avec police "Poppins" */}
          <p className="text-2xl text-tech-title leading-relaxed mb-20 font-krushnadevaraya flex items-start gap-3">
          <span className="w-1 h-7 bg-blue-600 rounded-sm mt-2"></span>
          Research Scientist Intern at Siemens Healthineers, working on Diffusion Models
          </p>


          {/* Bouton "View My CV" */}
          <div className="flex justify-center">
          <a
            href={`${import.meta.env.BASE_URL}cv_yacine.pdf`}
            target="_blank"
            className="font-mono inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
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
    <section className="flex justify-center mt-1 gap-6 py-10 bg-[#111927]">
      <a
        href="mailto:yacineboureghda14@gmail.com"
        className="bg-white text-blue-600 p-3 rounded-full shadow-md hover:scale-110 transform transition duration-300 ring-1 ring-blue-300"
        aria-label="Email"
      >
        <FaEnvelope size={24} />
      </a>
      <a
        href="https://github.com/yacinebrg"
        target="_blank"
        rel="noreferrer"
        className="bg-white text-blue-600 p-3 rounded-full shadow-md hover:scale-110 transform transition duration-300 ring-1 ring-blue-300"
        aria-label="GitHub"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://linkedin.com/in/yacine-cadi-boureghda-5b9550224"
        target="_blank"
        rel="noreferrer"
        className="bg-white text-blue-600 p-3 rounded-full shadow-md hover:scale-110 transform transition duration-300 ring-1 ring-blue-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
    </section>

    </div>
  );
}
