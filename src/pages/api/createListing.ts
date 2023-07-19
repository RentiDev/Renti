import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../server/db';


interface CreateListingRequestBody {
  title: string;
  description: string;
  price: number;
  images: string[];
  address: string;
  landlordId: string;
}

export default async function createListingHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    // Return a 405 "Method Not Allowed" if the request method is not POST
    return res.status(405).end();
  }

  const { title, description, price, images, address, landlordId } = req.body as CreateListingRequestBody;

  // const session = await getSession({ req });

  // if (!session) {
  //   return res.status(401).json({ message: 'Unauthorized' });
  // }

  // if (session.user.id !== landlordId) {
  //   console.log(session.user.id)
  //   console.log(landlordId)
  //   return res.status(401).json({ message: 'Unauthorized' });
  // }

  try {
    console.log("Creating listing...")
    const listing = await prisma.listing.create({
        data: {
            title,
            description,
            price,
            images,
            address,
            landlordId
        }
    });

    return res.status(201).json(listing);
  } catch (error) {
    // Handle any errors that occur during listing creation
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}