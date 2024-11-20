import Button from './ui/button.component';
import { createJob } from '../api/jobs.api';
import { useState } from 'react';

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleCreateJob = async () => {
    setIsLoading(true);
    try {
      const response = await createJob();
      if (response.error) {
        console.error(response.error);
        return;
      }
    } catch (error) {
      console.error(error);
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
