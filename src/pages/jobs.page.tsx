import { useEffect, useState } from 'react';
import JobType from '../types/job.type';
import { getJobs } from '../api/jobs.api';
import Job from '../components/job.component';

const JobsPage = () => {
  const [jobs, setJobs] = useState<JobType[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await getJobs();
      if (response.error) {
        console.error(response.error);
        return;
      }
      console.log(response.data);
      setJobs(response.data || []);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <div className="max-w-[960px] mx-auto flex flex-wrap gap-4 justify-between">
        {jobs.map((job) => {
          return <Job job={job} />;
        })}
      </div>
    </div>
  );
};

export default JobsPage;
