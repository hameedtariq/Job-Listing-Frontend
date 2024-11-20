import { useCallback, useEffect, useState } from 'react';
import JobType from '../types/job.type';
import { createJob, getJobs } from '../api/jobs.api';
import Job from '../components/job.component';
import { toast } from 'react-toastify';
import Button from '../components/ui/button.component';
import ApiResponse from '../types/api-response.type';

const JobsPage = () => {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreatingJob, setIsCreatingJob] = useState(false);

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

  const handleCreateJob = async () => {
    setIsCreatingJob(true);
    try {
      const response = await createJob();
      toast.success(response.message);
      fetchJobs();
    } catch (error) {
      console.error(error);
      toast.error((error as ApiResponse<unknown>).message);
    } finally {
      setIsCreatingJob(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-6 pb-4">
        <div>
          <Button
            label="Create Job"
            isLoading={isCreatingJob}
            onClick={handleCreateJob}
          />
        </div>
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
