import type { APIRequestContext, APIResponse } from '@playwright/test';

export interface PostPayload {
  title: string;
  body: string;
  userId: number;
}

export class JsonPlaceholderClient {
  constructor(private readonly request: APIRequestContext) {}

  getPosts(): Promise<APIResponse> {
    return this.request.get('/posts');
  }

  getPost(postId: number): Promise<APIResponse> {
    return this.request.get(`/posts/${postId}`);
  }

  createPost(payload: PostPayload): Promise<APIResponse> {
    return this.request.post('/posts', { data: payload });
  }

  updatePost(postId: number, payload: PostPayload): Promise<APIResponse> {
    return this.request.put(`/posts/${postId}`, { data: payload });
  }

  deletePost(postId: number): Promise<APIResponse> {
    return this.request.delete(`/posts/${postId}`);
  }
}
