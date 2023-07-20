import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { getSession, useSession } from 'next-auth/react';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { Dropdown } from "@nextui-org/react"
import ImageUpload from './ImageUpload';

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
  // const [images, setImages] = useState([]);
  // const [address, setAddress] = useState('');
  // console.log(session?.user.id);
  const router = useRouter();
  const [landlordId, setLandlordId] = useState('');
  const { data: session, status } = useSession();
  const [imageSrcs, setImageSrcs] = useState<string[]>([]);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  
    const form = event.currentTarget;
  
    const formTitle = (form.elements.namedItem('title') as HTMLInputElement).value;
    const formDescription = (form.elements.namedItem('description') as HTMLInputElement).value;
    const formPrice = Number((form.elements.namedItem('price') as HTMLInputElement).value);
    // const formImages = Array.from((form.elements.namedItem('images') as HTMLInputElement).files || []);
    const formAddress = (form.elements.namedItem('address') as HTMLInputElement).value;
    // const formlandlordId = localStorage.getItem('userId') || '';
  
    axios
      .post("/api/createListing", {
        title: formTitle,
        description: formDescription,
        price: formPrice,
        images: imageSrcs,
        address: formAddress,
        landlordId: landlordId,
      })
      .then(response => {
        console.log(response.data);
        toast.success("Successfully created listing!");
        router.push("/landlord")
          .then(() => {
            console.log("Redirected to home page");
          })
          .catch((error: unknown) => {
            // Handle error during sign-in
          });
      })
      .catch(error => {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
          toast.error("Error creating listing!");
        }
      });
  };

  
  const handleNewImageUpload = (newImageSrc: string) => {
    setImageSrcs((currentImageSrcs) => {
      const updatedImageSrcs = [...currentImageSrcs, newImageSrc];
      console.log(updatedImageSrcs);
      return updatedImageSrcs;
    });
};



  return (
    // <div onLoad = {handleLoad}>
    <div className="flex flex-col justify-self-center mt-10 mx-40">
      <form className="w-full" onSubmit={handleSubmit}>
      <div className="relative mb-4">
        <input 
          className=" peer h-10 w-full border-b-4 border-gray-300 text-slate-700 placeholder-transparent bg-white focus:outline-none focus:border-[#0f59c1]"
          type="text" 
          id="title"
          name="title"
          placeholder="Enter title"
          required 
        />
        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" htmlFor="title">
          Title
        </label>
      </div>
      <div className="mb-4 relative">
        <select 
          className="bg-white h-10 appearance-none border-b-4 border-gray-300 w-full py-2 pr-3 text-gray-600 leading-tight focus:outline-none focus:border-[#0f59c1] focus:shadow-outline"
          id="unitType"
          name="unitType"
          required 
        >
          <option value="Apartment" className="text-gray-600 hover:bg-gray-100 text-lg font-Medium">Apartment</option>
          <option value="House" className="text-gray-600 hover:bg-gray-100 text-lg font-Medium">House</option>
          <option value="Condo" className="text-gray-600 hover:bg-gray-100 text-lg font-Medium">Condo</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current text-gray-600" viewBox="0 0 20 20">
            <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
          </svg>
        </div>
      </div>
      <div className="relative mb-4">
        <input 
          className="peer h-10 w-full border-b-4 border-gray-300 text-slate-700 placeholder-transparent bg-white focus:outline-none focus:border-[#0f59c1]"
          type="text" 
          id="description"
          name="description"
          placeholder="Enter Description"
          required
        />
        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" htmlFor="description">
          Description
        </label>
      </div>
      <div className="relative mb-4">
        <input 
          className="peer h-10 w-full border-b-4 border-gray-300 text-slate-700 placeholder-transparent bg-white focus:outline-none focus:border-[#0f59c1]"
          type="number" 
          id="price"
          name="price"
          placeholder="Enter Price"
          required
          min = "0"
        />
        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" htmlFor="price">
          Price
        </label>
      </div>
      <div className="relative mb-4">
        <input 
          className="peer h-10 w-full border-b-4 border-gray-300 text-slate-700 placeholder-transparent bg-white focus:outline-none focus:border-[#0f59c1]"
          type="text" 
          id="address"
          name="address"
          placeholder="Enter Address"
          required
          min = "0"
        />
        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" htmlFor="address">
          Address
        </label>
      </div>
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
        </label> 
        <br />*/}
        <div className="flex text-center items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Listing
          </button> 
        </div> 
      </form>
      <ImageUpload onImageUpload={handleNewImageUpload}/>
    </div>
  );
};

export default AddListingWindow;