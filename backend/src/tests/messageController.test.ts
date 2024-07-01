import { getMessage } from '../controllers/messageController';
import { Request, Response } from 'express';

describe('Message Controller', () => {
  it('should return a message', () => {
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;

    getMessage(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: 'Hello from the backend!' });
  });
});
