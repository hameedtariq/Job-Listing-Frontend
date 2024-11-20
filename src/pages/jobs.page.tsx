import { useEffect, useState } from 'react';
import JobType from '../types/job.type';
import { getJobs } from '../api/jobs.api';
import Job from '../components/job.component';
import { toast } from 'react-toastify';

const JobsPage = () => {
  const [jobs, setJobs] = useState<JobType[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobs();
        setJobs(response.data || []);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch jobs');
      }
    };
    fetchJobs();

    const interval = setInterval(() => {
      fetchJobs();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="max-w-[960px] mx-auto flex flex-wrap gap-6">
        {jobs.map((job) => {
          return <Job job={job} />;
        })}
      </div>
    </div>
  );
};

export default JobsPage;
