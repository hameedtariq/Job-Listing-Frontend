import Button from './ui/button.component';
import { createJob } from '../api/jobs.api';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import ApiResponse from '../types/api-response.type';

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleCreateJob = async () => {
    setIsLoading(true);
    try {
      const response = await createJob();
      toast.success(response.message);
    } catch (error) {
      console.error(error);
      const err = error as AxiosError<ApiResponse<unknown>>;
      toast.error(err.response?.data.error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-primary">Job Listing</h1>
      <div>
        <Button
          label="Create Job"
          isLoading={isLoading}
          onClick={handleCreateJob}
        />
      </div>
    </div>
  );
};

export default Header;
