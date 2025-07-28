import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Openpos() {
  const [searchTerm, setSearchTerm] = useState('');

  const positions = [
    {
      id: 1,
      title: 'Naval Architect',
      department: 'Marine Engineering',
      type: 'Freelance',
      location: 'Remote',
      description: 'Design and oversee construction of marine vessels and offshore structures with focus on performance and safety standards.',
      tags: ['Remote Integration', 'New York City']
    },
    {
      id: 2,
      title: 'Structural Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'On-site',
      description: 'Analyze and design structural systems for marine and offshore applications ensuring compliance with international standards.',
      tags: ['Systems Integration', 'San Francisco']
    },
    {
      id: 3,
      title: 'Piping Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'On-site',
      description: 'Design and develop piping systems for marine vessels and industrial facilities with focus on efficiency and safety.',
      tags: ['Process Design', 'New York City']
    },
    {
      id: 4,
      title: 'E & I Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'On-site',
      description: 'Design electrical and instrumentation systems for marine and offshore projects ensuring optimal performance.',
      tags: ['Control Systems', 'San Francisco']
    },
    {
      id: 5,
      title: 'Structural Draughtsman',
      department: 'Design',
      type: 'Full-time',
      location: 'On-site',
      description: 'Create detailed technical drawings and plans for structural components using CAD software and engineering specifications.',
      tags: ['Technical Drawing', 'New York City']
    },
    {
      id: 6,
      title: 'Piping Draughtsman',
      department: 'Design',
      type: 'Full-time',
      location: 'On-site',
      description: 'Develop comprehensive piping drawings and isometric diagrams for marine and industrial piping systems.',
      tags: ['CAD Design', 'San Francisco']
    },
    {
      id: 7,
      title: 'E & I Draughtsman',
      department: 'Design',
      type: 'Full-time',
      location: 'On-site',
      description: 'Produce detailed electrical and instrumentation drawings including schematics, panel layouts, and cable routing.',
      tags: ['Electrical Design', 'New York City']
    }
  ];

  const filteredPositions = positions.filter(position =>
    position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    position.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const departments = [...new Set(positions.map(p => p.department))];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <h1 className="text-2xl md:text-4xl font-semibold text-secondary tracking-tight">
              Open roles
            </h1>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary/50 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search for a role"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-44 md:w-80 bg-secondary/5 border-0 rounded-full text-sm text-secondary/70 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-primary transition-all"
                />
            </div>
          </div>
        </div>

        {departments.map(department => (
          <div key={department} className="mb-12">
            <div className="space-y-4">
              {filteredPositions
                .filter(position => position.department === department)
                .map((position) => (
                <div
                  key={position.id}
                  className="group border border-secondary/40 rounded-lg p-6 hover:border-secondary/60 cursor-pointer hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-3">
                        <h3 className="text-xl font-medium text-secondary/80 group-hover:text-secondary">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {position.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-secondary/70 text-sm text-justify leading-relaxed max-w-2xl">
                        {position.description}
                      </p>
                    </div>
                    <button className="px-6 py-2 bg-secondary text-primary text-sm font-medium rounded-full hover:bg-secondary/80 transition-colors flex-shrink-0">
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* No Results */}
        {filteredPositions.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No positions found matching "{searchTerm}"</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Clear search
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
