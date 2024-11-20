import { useEffect, useState } from 'react';
import JobType from '../types/Job.type';
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
    <div className="max-w-[960px] mx-auto">
      {jobs.map((job) => {
        return <Job job={job} />;
      })}
    </div>
  );
};

export default JobsPage;
