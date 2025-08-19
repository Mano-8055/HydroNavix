import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Job from "../json/Job";

export default function Openpos() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPositions = Job.filter(
    (position) =>
      position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const departments = [...new Set(Job.map((p) => p.department))];

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

        {/* Job Listings */}
        {departments.map((department) => (
          <div key={department} className="mb-4">
            <div className="space-y-4">
              {filteredPositions
                .filter((position) => position.department === department)
                .map((position) => (
                  <div
                    key={position.id}
                    className="group border border-secondary/40 rounded-lg p-6 hover:border-secondary/60 cursor-pointer hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-3">
                          <h3 className="text-xl font-medium text-secondary/80 group-hover:text-secondary">
                            {position.title}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full font-medium">
                              {position.type}
                            </span>
                            <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full font-medium">
                              {position.location}
                            </span>
                            <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full font-medium">
                              {position.experience}
                            </span>
                          </div>
                        </div>
                        <p className="text-secondary/70 text-sm text-justify leading-relaxed max-w-2xl">
                          {position.shortDescription}
                        </p>
                      </div>
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLScKEnJn5A9Xm1IAF2PJx6_b118X0hg8nBIj96St7GD-4Lp4Ow/viewform" target="_blank"
                        className="self-start md:self-auto px-6 py-2 bg-secondary text-primary text-sm font-medium rounded-full hover:bg-secondary/50 transition-colors flex-shrink-0"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {filteredPositions.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">
              No positions found matching "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm("")}
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
