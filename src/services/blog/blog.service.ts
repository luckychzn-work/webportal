import { AxiosResponse } from 'axios';
import axiosInstance from '../api/axios.config';
import { API_ENDPOINTS } from '../api/endpoints';

export interface BlogPost {
    id: string;
    title: string;
    content: string;
    // ... other blog post properties
}

export class BlogService {
    static async getAllPosts(): Promise<BlogPost[]> {
        try {
            const response: AxiosResponse<BlogPost[]> = await axiosInstance.get(
                API_ENDPOINTS.BLOG.GET_ALL
            );
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch blog posts');
        }
    }

    static async getPostById(id: string): Promise<BlogPost> {
        try {
            const response: AxiosResponse<BlogPost> = await axiosInstance.get(
                API_ENDPOINTS.BLOG.GET_BY_ID(id)
            );
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch blog post');
        }
    }

    static async createPost(post: Omit<BlogPost, 'id'>): Promise<BlogPost> {
        try {
            const response: AxiosResponse<BlogPost> = await axiosInstance.post(
                API_ENDPOINTS.BLOG.CREATE,
                post
            );
            return response.data;
        } catch (error) {
            throw new Error('Failed to create blog post');
        }
    }
} 