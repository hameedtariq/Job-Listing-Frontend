import JobStatus from './job-status.enum';

type Job = {
  id: string;
  status: JobStatus;
  result?: string;
  resolutionTime?: number;
};

export default Job;
