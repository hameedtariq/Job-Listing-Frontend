import React from 'react';
import JobType from '../types/Job.type';

type JobProps = {
  job: JobType;
};

const Job: React.FC<JobProps> = ({ job }) => {
  return (
    <div
      key={job.id}
      className="bg-white shadow-md p-4 mb-4 flex items-center gap-4"
    >
      <img src={job.result} alt="Job" className="w-24 h-24" />
      <h2 className="text-lg font-bold text-primary">{job.status}</h2>
    </div>
  );
};

export default Job;
