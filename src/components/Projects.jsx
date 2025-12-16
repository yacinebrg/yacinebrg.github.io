import React from 'react';

function Projects() {
  return (
    <section className="py-20 bg-[#111927]">
      <h3 className="text-4xl sm:text-5xl font-bold font-krushnadevaraya text-tech-title text-center mb-12">
        Recent Projects & Certifications
      </h3>

      <div className="flex flex-col gap-16 max-w-4xl mx-auto">

        {/* Projet 1 */}
        <div className="group relative p-10 rounded-md border border-transparent bg-[#111927] transition-all duration-300 transform hover:scale-[1.02] hover:border-[#F4EBD0] hover:shadow-[4px_4px_0_#F4EBD0]">
          <a 
            href="https://github.com/yacinebrg/Brain-MRI-Segmentation-Uncertainty" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono absolute bottom-4 right-6 text-sm text-tech-title opacity-0 group-hover:opacity-100 hover:text-blue-600 transition-opacity duration-300 flex items-center space-x-2"
          >
            <span>View Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <h4 className="text-2xl font-mono font-bold text-tech-title mb-4">
            Deep Learning for Segmentation of Cerebral Tissues Images with Uncertainty Modeling
          </h4>

          <p className="mb-6 text-base font-sans text-tech-secondary leading-relaxed">
            This project focuses on the segmentation of brain tissues in human MRI scans. The aim is to develop a neural network model capable of segmenting the brain tissues accurately and estimating uncertainty for each pixel.
          </p>

          <div className="flex flex-wrap gap-y-2 gap-x-4">
            <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm rounded-md">Deep Learning</span>
            <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm rounded-md">Research</span>
            <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm rounded-md">Segmentation</span>
          </div>
        </div>

        {/* Projet 2 */}
        <div className="group relative p-10 rounded-md border border-transparent bg-[#111927] transition-all duration-300 transform hover:scale-[1.02] hover:border-[#F4EBD0] hover:shadow-[4px_4px_0_#F4EBD0]">
          <a 
            href="https://github.com/yacinebrg/Kaggle-Competition-Boat-Classification-with-a-Custom-CNN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono absolute bottom-4 right-6 text-sm text-tech-title opacity-0 group-hover:opacity-100 hover:text-blue-600 transition-opacity duration-300 flex items-center space-x-2"
          >
            <span>View Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <h4 className="text-2xl font-mono font-bold text-tech-title mb-4">
            CNN-based Ship Classifier
          </h4>

          <p className="mb-6 text-base font-sans text-tech-secondary leading-relaxed">
            This project focuses on classifying boats into 10 categories using a Convolutional Neural Network (CNN). The model was developed to participate in a Kaggle challenge, aiming to deliver accurate and reliable results.
          </p>

          <div className="flex flex-wrap gap-y-2 gap-x-4">
            <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm rounded-md">Convolutional Neural Networks</span>
            <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm rounded-md">Image Recognition</span>
            <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm rounded-md">Deep Learning</span>
          </div>
        </div>

        {/* Projet 3 – Certification Coursera */}
        <div className="group relative p-10 rounded-md border border-transparent bg-[#111927] transition-all duration-300 transform hover:scale-[1.02] hover:border-[#F4EBD0] hover:shadow-[4px_4px_0_#F4EBD0]">
          <a 
            href="https://coursera.org/share/405e75a225947c81234f5aba1681823d" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono absolute bottom-4 right-6 text-sm text-tech-title opacity-0 group-hover:opacity-100 hover:text-blue-600 transition-opacity duration-300 flex items-center space-x-2"
          >
            <span>View Certification</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <h4 className="text-2xl font-mono font-bold text-tech-title mb-4">
            Machine Learning Specialization – Coursera & Stanford Online
          </h4>

          <p className="mb-6 text-base font-sans text-tech-secondary leading-relaxed">
            Currently completing the Machine Learning Specialization by Andrew Ng on Coursera and Stanford Online. It provides a foundation in supervised and unsupervised learning, ML engineering best practices, and model deployment.
          </p>

          <div className="flex flex-wrap gap-y-2 gap-x-4">
            <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm rounded-md">Machine Learning</span>
            <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm rounded-md">Certification</span>
            <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm rounded-md">Coursera</span>
            <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm rounded-md">Reinforcement Learning</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
