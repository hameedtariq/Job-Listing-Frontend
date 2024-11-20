import { useCallback, useEffect, useState } from 'react';
import JobType from '../types/job.type';
import { getJobs } from '../api/jobs.api';
import Job from '../components/job.component';
import { toast } from 'react-toastify';
import Button from '../components/ui/button.component';
import ApiResponse from '../types/api-response.type';

const JobsPage = () => {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJobs = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getJobs();
      setJobs(response.data || []);
    } catch (error) {
      console.error(error);
      toast.error((error as ApiResponse<unknown>).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleRefresh = () => {
    fetchJobs();
  };

  return (
    <div className="flex flex-col">
      <div className="self-end">
        <Button
          label="Refresh Jobs"
          onClick={handleRefresh}
          isLoading={isLoading}
        />
      </div>
      <div className="max-w-[960px] mx-auto flex flex-wrap gap-6">
        {jobs.map((job) => {
          return <Job job={job} />;
        })}
      </div>
    </div>
  );
};

export default JobsPage;
