import React from 'react';
import JobType from '../types/job.type';
import JobStatus from '../types/job-status.enum';
import placeholder from '../assets/placeholder.svg';

type JobProps = {
  job: JobType;
};

const Job: React.FC<JobProps> = ({ job }) => {
  return (
    <div
      key={job.id}
      className="bg-white shadow-md p-6 mb-4 flex flex-col items-center gap-4 max-w-[300px] rounded-md"
    >
      <div className="max-w-[350px] max-h-[200px] overflow-hidden rounded-md">
        {job.status === JobStatus.RESOLVED ? (
          <img
            src={job.result}
            alt="Job"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={placeholder}
            alt="Job Placeholder"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <p
        className={`text-lg font-bold ${
          job.status === JobStatus.RESOLVED ? 'text-primary' : 'text-secondary'
        }`}
      >
        Status: {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
      </p>
    </div>
  );
};

export default Job;
