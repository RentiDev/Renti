import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db';

interface CreateListingRequestBody {
  title: string;
  description: string;
  price: number;
  images: string[];
  address: string;
  latitude: number;
  longitude: number;
  landlordId: string;
}

export default async function createListingHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    // Return a 405 "Method Not Allowed" if the request method is not POST
    return res.status(405).end();
  }

  const { title, description, price, images, address, latitude, longitude, landlordId } = req.body as CreateListingRequestBody;

  try {
    console.log("Creating listing...")
    const listing = await prisma.listing.create({
        data: {
            title,
            description,
            price,
            images,
            address,
            latitude,
            longitude,
            landlord: {
                connect: {
                    id: landlordId,
                },
            },
        },
    });



    return res.status(201).json(listing);
  } catch (error) {
    // Handle any errors that occur during listing creation
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}