import { useParams } from "react-router-dom";
import Job from "../json/Job";
import { useEffect } from "react";

const JobApply = () => {
  const { title } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const job = Job.find(
    (j) => j.title.toLowerCase().replace(/\s+/g, "-") === title.toLowerCase()
  );

  return (
    <div className="py-28 px-4 max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600 mb-4">
        {job.department} • {job.type} • {job.location} • {job.experience}
      </p>

      {/* Short Description */}
      <p className="text-lg mb-6">{job.shortDescription}</p>

      {/* Role Overview */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Role Overview</h2>
        <p>{job.roleOverview}</p>
      </section>

      {/* Responsibilities */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-1">
          {job.responsibilities.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>
      </section>

      {/* Mandatory Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Mandatory Skills</h2>
        <ul className="list-disc pl-6 space-y-1">
          {job.mandatorySkills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Advantages */}
      {job.advantages && job.advantages.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Advantages</h2>
          <ul className="list-disc pl-6 space-y-1">
            {job.advantages.map((adv, idx) => (
              <li key={idx}>{adv}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Apply Button */}
      <div className="mt-8">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobApply;
