import api from './api';
import Job from '../types/job.type';
import ApiResponse from '../types/api-response.type';

export const getJobs = async (): Promise<ApiResponse<Job[]>> => {
  return api.get('/jobs');
};

export const getJob = async (id: string): Promise<ApiResponse<Job>> => {
  return api.get(`/jobs/${id}`);
};

export const createJob = async (): Promise<ApiResponse<Job>> => {
  return api.post('/jobs');
};
