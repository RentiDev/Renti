import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { IoReturnUpBackOutline } from 'react-icons/io5';

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

  const handleLoad = async () => {
    const session = await getSession();
    if (session) {
      console.log("user id:");
      console.log(session.user.id)
      setLandlordId(session.user.id);
    } else {
      toast.error("You need to be logged in to create a listing");
    }
    console.log(landlordId)
  }

  useEffect(() => {
    handleLoad();
  }, [router.asPath]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formTitle = (form.elements.namedItem('title') as HTMLInputElement).value;
    const formDescription = (form.elements.namedItem('description') as HTMLInputElement).value;
    const formPrice = Number((form.elements.namedItem('price') as HTMLInputElement).value);
    // const formImages = Array.from((form.elements.namedItem('images') as HTMLInputElement).files || []);
    const formAddress = (form.elements.namedItem('address') as HTMLInputElement).value;
    // const formlandlordId = localStorage.getItem('userId') || '';

    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('description', description);
    // formData.append('price', String(price));
    // for (const image of images) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(image);
    //   reader.onloadend = () => {
    //     const base64data = reader.result?.toString().split(',')[1];
    //     if (base64data) {
    //       formData.append('images', base64data);
    //     }
    //   };
    // }
    // formData.append('address', address);

    if (!landlordId) {
      toast.error("You need to be logged in to create a listing");
      return;
    }
  
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
      router.push("/listings")
        .then(() => {
          console.log("Redirected to home page");
        })
        .catch((error: unknown) => {
          // Handle error during sign-in
        });
    } catch (error) {
      console.log(error.response?.data);
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        toast.error("Error creating listing!");
      }
    }
  };
  

  return (
    // <div onLoad = {handleLoad}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input 
            type="text" 
            id="title"
            name="title"
            placeholder="Enter title"
            required 
          />
        </label>
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
        <button type="submit">Create Listing</button>
      </form>
    // </div>
  );
};

export default AddListingWindow;