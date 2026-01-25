
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div 
      onClick={() => window.open(project.githubUrl, '_blank')}
      className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4">
          <span className="text-xs font-semibold px-2 py-1 bg-blue-600 rounded-full text-white shadow-lg">
            {project.tech[0]}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-gray-500 border border-gray-800 px-2 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center text-blue-400 font-medium text-sm group-hover:underline">
          View on GitHub <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-xs"></i>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
