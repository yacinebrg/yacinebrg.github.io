// components/Contact.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
<section className="text-center py-20 px-4 bg-tech-background border-t border-tech-secondary">
  <h3 className="text-3xl font-bold font-krushnadevaraya mb-12">Contact</h3>
  <div className="flex justify-center gap-6">
    <a
      href="mailto:yacineboureghda14@gmail.com"
      className="bg-white text-tech-accent p-4 rounded-full shadow-md hover:scale-110 transform transition duration-300 ring-1 ring-tech-secondary"
      aria-label="Email"
    >
      <FaEnvelope size={28} />
    </a>
    <a
      href="https://github.com/yacinebrg"
      target="_blank"
      rel="noreferrer"
      className="bg-white text-tech-accent p-4 rounded-full shadow-md hover:scale-110 transform transition duration-300 ring-1 ring-tech-secondary"
      aria-label="GitHub"
    >
      <FaGithub size={28} />
    </a>
    <a
      href="https://linkedin.com/in/yacine-cadi-boureghda-5b9550224"
      target="_blank"
      rel="noreferrer"
      className="bg-white text-tech-accent p-4 rounded-full shadow-md hover:scale-110 transform transition duration-300 ring-1 ring-tech-secondary"
      aria-label="LinkedIn"
    >
      <FaLinkedin size={28} />
    </a>
  </div>
</section>


  );
}

export default Contact;
