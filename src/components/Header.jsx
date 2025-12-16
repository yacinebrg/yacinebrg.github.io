// Header.jsx
export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center text-tech-secondary text-sm bg-transparent z-10">
      <span className="font-semibold tracking-wide text-tech-secondary">Yacine Cadi-Boureghda</span>
      <nav className="space-x-6 text-tech-secondary text-sm">
        <a href="#projects" className="hover:text-blue-600 transition-colors duration-300">Projects</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a>
      </nav>
    </header>
  );
}
