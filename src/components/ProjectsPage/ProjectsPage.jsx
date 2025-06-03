import React from 'react';

const ProjectsPage = ({ darkMode }) => {
  // Example projects data
  const projects = [
    { id: 1, name: 'Project One', description: 'Description of project one.' },
    { id: 2, name: 'Project Two', description: 'Description of project two.' },
    { id: 3, name: 'Project Three', description: 'Description of project three.' },
  ];

  return (
    <section className={`min-h-screen p-8 ${
      darkMode ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className={`rounded-lg shadow p-4 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
