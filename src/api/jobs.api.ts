import api from './api';
import Job from '../types/Job.type';
import ApiResponse from '../types/api-response.type';

export const getJobs = async (): Promise<ApiResponse<Job[]>> => {
  return api.get('/jobs');
};

export const getJob = async (id: string): Promise<ApiResponse<Job>> => {
  return api.get(`/jobs/${id}`);
};

export const createJob = async (job: Job): Promise<ApiResponse<Job>> => {
  return api.post('/jobs', job);
};
