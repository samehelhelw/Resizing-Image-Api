import express from 'express';
import supertest from 'supertest';
const app = express();
const request = supertest(app);

describe('test access wrong route', () => {
  it('send request to invaid route', async () => {
    const response = await request.get('/api/wrong');
    expect(response.status).toEqual(404);
  });
});
describe('test  responses', () => {
  it('send request without filename', async () => {
    const response = await request.get('/api/images?width=100&height=100');
    expect(response.status).toEqual(404);
  });

  it('send request with no width', async () => {
    const response = await request.get('/api/images?filename=porta&height=100');
    expect(response.status).toEqual(404);
  });
  it('send request with no height', async () => {
    const response = await request.get('/api/images?filename=porta&width=100');
    expect(response.status).toEqual(404);
  });
  it('send request with a wrong filename', async () => {
    const response = await request.get(
      '/api/images?filename=wrongvalue&width=100&height=100'
    );
    expect(response.status).toEqual(404);
  });
  it('send request with string width', async () => {
    const response = await request.get(
      '/api/images?filename=porta&width=stringe&height=100'
    );
    expect(response.status).toEqual(404);
  });
  it('sendrequest with string height', async () => {
    const response = await request.get(
      '/api/images?filename=porta&width=100&height=string'
    );
    expect(response.status).toEqual(404);
  });
});
