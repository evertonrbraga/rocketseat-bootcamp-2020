import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export const helloWorld = (request: Request, response: Response) => {
  const user = createUser({
    name: undefined,
    email: 'evrm.braga@gmail.com',
    password: '123456',
    techs: [
      'ReactJS',
      'React Native',
      'Node.js',
      { title: 'JavaScript', experience: 100 },
    ],
  });

  return response.json({ message: 'Hello World!!' });
};
