import React from 'react';

function Projects() {
  return (
    <section className="py-16 px-4 bg-secondary">
      <h3 className="text-4xl sm:text-5xl font-bold font-krushnadevaraya text-tech-title text-center mb-10">Recent Projects</h3>
      <div className="space-y-8 max-w-4xl mx-auto">
        
      <div className="bg-primary p-6 rounded shadow transition-all duration-300 transform group hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600 relative">
      {/* Button shown on hover */}
      <a 
        href="https://github.com/yacinebrg/Brain-MRI-Segmentation-Uncertainty" 
        target="_blank" 
        rel="noopener noreferrer"
        className="font-mono absolute bottom-2 right-4 text-sm text-tech-title opacity-0 group-hover:opacity-100 hover:text-blue-600 transition-opacity duration-300 flex items-center space-x-2"
      >
        <span>View Project</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>

      <h4 className="text-2xl font-mono text-tech-title mb-2">Deep Learning for Segmentation of Cerebral Tissues Images with Uncertainty Modeling </h4>
      <p className="mb-4 font-mono text-tech-secondary">
        This project focuses on the segmentation of brain tissues in human MRI scans. The aim is to develop a neural network model capable of segmenting the brain tissues accurately and estimating uncertainty for each pixel.
      </p>
      <div className="flex flex-wrap space-x-4">
        <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm">Deep Learning</span>
        <span className="bg-sky-950 font-mono text-tech-title bg-clip-padding px-3 py-1 text-sm">Research</span>
        <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm">Segmentation</span>
      </div>
    </div>


    <div className="bg-primary p-6 rounded shadow transition-all duration-300 transform group hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600 relative">
      {/* Button shown on hover */}
      <a 
        href="https://github.com/yacinebrg/Kaggle-Competition-Boat-Classification-with-a-Custom-CNN" 
        target="_blank" 
        rel="noopener noreferrer"
        className="font-mono absolute bottom-2 right-4 text-sm text-tech-title opacity-0 group-hover:opacity-100 hover:text-blue-600 transition-opacity duration-300 flex items-center space-x-2"
      >
          <span>View Project</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
      <h4 className="text-2xl font-mono text-tech-title mb-2">CNN-based Ship Classifier</h4>
      <p className="text-gray-300 mb-4 font-mono">
      This project focuses on classifying boats into 10 categories using a Convolutional Neural Network (CNN). The model was developed to participate in a Kaggle challenge, aiming to deliver accurate and reliable results.          </p>
      <div className="flex flex-wrap space-x-4">
        <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm">Convolutional Neural Networks</span>
        <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm">Image Recognition</span>
        <span className="bg-sky-950 font-mono text-tech-title px-3 py-1 text-sm">Deep Learning</span>
      </div>
    </div>

  </div>
</section>
  );
}

export default Projects;
