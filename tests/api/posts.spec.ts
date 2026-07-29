import { expect, test } from '../../src/fixtures/test.fixture';
import type { PostPayload } from '../../src/api/json-placeholder.client';

test.describe('JSONPlaceholder posts API', () => {
  test('GET /posts returns a collection of posts', async ({
    jsonPlaceholderClient,
  }) => {
    const response = await jsonPlaceholderClient.getPosts();

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const posts = (await response.json()) as unknown[];

    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        userId: expect.any(Number),
        title: expect.any(String),
        body: expect.any(String),
      }),
    );
  });

  test('GET /posts/1 returns the requested post', async ({
    jsonPlaceholderClient,
  }) => {
    const response = await jsonPlaceholderClient.getPost(1);

    expect(response.status()).toBe(200);

    const post = await response.json();

    expect(post).toEqual(
      expect.objectContaining({
        id: 1,
        userId: expect.any(Number),
        title: expect.any(String),
        body: expect.any(String),
      }),
    );
  });

  test('GET for a missing post returns 404', async ({
    jsonPlaceholderClient,
  }) => {
    const response = await jsonPlaceholderClient.getPost(999999);

    expect(response.status()).toBe(404);
  });

  test('POST /posts creates a simulated post', async ({
    jsonPlaceholderClient,
  }) => {
    const payload: PostPayload = {
      title: 'AI-assisted Playwright framework',
      body: 'Created for the Senior QA Engineer take-home exercise',
      userId: 1,
    };

    const response = await jsonPlaceholderClient.createPost(payload);

    expect(response.status()).toBe(201);

    const createdPost = await response.json();

    expect(createdPost).toEqual({
      ...payload,
      id: expect.any(Number),
    });
  });

  test('PUT /posts/1 updates a simulated post', async ({
    jsonPlaceholderClient,
  }) => {
    const payload: PostPayload = {
      title: 'Updated title',
      body: 'Updated body',
      userId: 1,
    };

    const response = await jsonPlaceholderClient.updatePost(1, payload);

    expect(response.status()).toBe(200);

    const updatedPost = await response.json();

    expect(updatedPost).toEqual({
      ...payload,
      id: 1,
    });
  });

  test('DELETE /posts/1 returns success', async ({
    jsonPlaceholderClient,
  }) => {
    const response = await jsonPlaceholderClient.deletePost(1);

    expect(response.status()).toBe(200);
  });
});
