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
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <h1 className="text-5xl font-light text-gray-900 tracking-tight">
              Open roles
            </h1>
            <div className="text-right text-sm text-gray-600 max-w-md leading-relaxed">
              You don't need to be a government expert or infrastructure lifer. You just 
              need to care deeply about solving hard problems, doing honest work, 
              and helping high-impact teams succeed.
            </div>
          </div>
        </div>

        {/* Departments */}
        {departments.map(department => (
          <div key={department} className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light text-gray-900">
                {department}
              </h2>
              
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search for a role"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-80 bg-gray-100 border-0 rounded-full text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {filteredPositions
                .filter(position => position.department === department)
                .map((position) => (
                <div
                  key={position.id}
                  className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-700">
                          {position.title}
                        </h3>
                        
                        {/* Tags */}
                        <div className="flex gap-2">
                          {position.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                        {position.description}
                      </p>
                    </div>
                    
                    {/* Apply Button */}
                    <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors ml-6 flex-shrink-0">
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
