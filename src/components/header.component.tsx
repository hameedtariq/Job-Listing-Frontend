import Button from './ui/button.component';
import { createJob } from '../api/jobs.api';
import { useState } from 'react';
import { toast } from 'react-toastify';
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
      toast.error((error as ApiResponse<unknown>).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-2 flex justify-between items-center">
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
