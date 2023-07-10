import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { getSession, useSession } from 'next-auth/react';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { Dropdown } from "@nextui-org/react"

interface CreateListingRequestBody {
  title: string;
  description: string;
  price: number;
  // images: File[];
  address: string;
  landlordId: string;
}

const AddListingWindow = () => {

  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [price, setPrice] = useState(0);
  // const [images, setImages] = useState<File[]>([]);
  // const [address, setAddress] = useState('');
  // console.log(session?.user.id);
  const router = useRouter();
  const [landlordId, setLandlordId] = useState('');
  const { data: session, status } = useSession();

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const handleLoad = async () => {
      if (status === "loading") return; // Do nothing while loading
      if (!session) { // If no session, redirect to login
        toast.error("You need to be logged in to create a listing"); // If not logged in, advertise services to landlords and incentivize a sign up - render a different page entirely
        await sleep(2000);
        router.push("/login").catch((error: unknown) => {
          // Handle error during redirect
        });
      } else {
        console.log("user id:");
        console.log(session.user.id);
        setLandlordId(session.user.id);
      }
    };
    
    handleLoad().catch((error: unknown) => {
      // Handle error during load
    }
    );
  }, [session, status, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const form = event.currentTarget;

    const formTitle = (form.elements.namedItem('title') as HTMLInputElement).value;
    const formDescription = (form.elements.namedItem('description') as HTMLInputElement).value;
    const formPrice = Number((form.elements.namedItem('price') as HTMLInputElement).value);
    // const formImages = Array.from((form.elements.namedItem('images') as HTMLInputElement).files || []);
    const formAddress = (form.elements.namedItem('address') as HTMLInputElement).value;
    // const formlandlordId = localStorage.getItem('userId') || '';

    try {
      const response = await axios.post("/api/createListing", {
        title: formTitle,
        description: formDescription,
        price: formPrice,
        // images: formImages,
        address: formAddress,
        landlordId: landlordId,
      });
      console.log(response.data);
      toast.success("Successfully created listing!");
      router.push("/landlord")
        .then(() => {
          console.log("Redirected to home page");
        })
        .catch((error: unknown) => {
          // Handle error during sign-in
        });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        toast.error("Error creating listing!");
      }
    }
  };
  

  return (
    // <div onLoad = {handleLoad}>
    <div className="flex justify-center mt-10">
      <form className="w-1/2" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-lufgaBold mb-2" htmlFor="title">
            Title:
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              type="text" 
              id="title"
              name="title"
              placeholder="Enter title"
              required 
            />
          </label>
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-lufgaBold mb-2" htmlFor="unitType">
          Property Type
        </label>
        <select 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="unitType"
          name="unitType"
          required 
        >
          <option value="">Select property type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Condo">Condo</option>
        </select>
      </div>
        <br />
        <label htmlFor="description">
          Description:
          <input 
            type="text" 
            id="description"
            name="description"
            placeholder="Enter description"
            required
          />
        </label>
        <br />
        <label htmlFor="price">
          Price:
          <input 
            type="number" 
            id="price"
            name="price"
            placeholder="Enter price"
            required 
          />
            </label>
            <br />
        <label htmlFor="address">
          Address:
          <input 
            type="text" 
            id="address"
            name="address"
            placeholder="Enter address"
            required
          />
        </label>
        <br />
        {/* <label htmlFor="images">
          Images:
          <input 
            type="file" 
            id="images"
            name="images"
            accept="image/*"
            multiple
            required
          />
        </label> */}
        <br />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListingWindow;