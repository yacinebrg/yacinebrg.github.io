// components/Contact.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="text-center py-20 px-4  border-t border-tech-secondary">
      <h3 className="text-3xl font-bold font-krushnadevaraya mb-12">Contact</h3>
      <div className="flex justify-center gap-6">
        <a
          href="mailto:yacineboureghda14@gmail.com"
          className="bg-white text-blue-600 p-4 rounded-full shadow-md hover:bg-blue-600 hover:text-white transform transition duration-300 ring-1 ring-blue-300"
          aria-label="Email"
        >
          <FaEnvelope size={28} />
        </a>
        <a
          href="https://github.com/yacinebrg"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-blue-600 p-4 rounded-full shadow-md hover:bg-blue-600 hover:text-white transform transition duration-300 ring-1 ring-blue-300"
          aria-label="GitHub"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/in/yacine-cadi-boureghda-5b9550224"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-blue-600 p-4 rounded-full shadow-md hover:bg-blue-600 hover:text-white transform transition duration-300 ring-1 ring-blue-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
