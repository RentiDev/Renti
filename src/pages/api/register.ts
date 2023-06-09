import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { prisma } from '../../server/db';

export default async function registerHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    // Return a 405 "Method Not Allowed" if the request method is not POST
    return res.status(405).end();
  }

  const { email, name, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    console.log("Creating user...")
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return res.status(201).json(user);
  } catch (error) {
    // Handle any errors that occur during user creation
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
