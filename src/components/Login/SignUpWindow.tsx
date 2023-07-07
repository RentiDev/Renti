import axios, { Axios, AxiosError } from "axios";
import Link from 'next/link';
import Button from '../Button';
import { useState } from "react";
import {FcGoogle} from 'react-icons/fc';
import {FaFacebookF} from 'react-icons/fa';
import { signIn } from "next-auth/react";
import toast from "react-hot-toast"
import { useRouter } from "next/router";

const SignUpWindow =() => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;
  
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
  
    try {
      setIsLoading(true);
      axios.post("/api/register", {
        name,
        email,
        password,
      }).then((response) => {
        toast.success("Successfully registered!");
        console.log(response.data);
        setIsLoading(false);
        router.push('/')
        .then(() => {
          console.log("Redirected to home page");
        })
        .catch((error: unknown) => {
          // Handle error during sign-in
        });
      }).catch((error) => {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
        }
        toast.error("Error registering!");
        setIsLoading(false);
      });
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
      toast.error("Error registering!");
      setIsLoading(false);
    }
  };


  return (
          <div className="flex justify-center items-center fixed inset-0 bg-gradient-to-br from-[#C4DAFC] to-[#356dbe]">
            <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
              <h2 className="text-3xl font-lufgaExtraBold text-gray-900 text-center mb-6">
                Sign up for an account
              </h2>
              <form onSubmit={handleLoginFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-md font-lufgaMedium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="p-4 mt-1 block w-full text-black bg-gray-200 border-gray-600 border-2 font-lufgaMedium rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-md"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-md font-lufgaMedium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-4 mt-1 block w-full text-black bg-gray-200 border-gray-600 border-2 font-lufgaMedium rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-md"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-md font-lufgaMedium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="p-4 mt-1 block w-full text-black bg-gray-200 border-gray-600 border-2 font-lufgaMedium rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-md"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-lufgaMedium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign up
                  </button>
                </div>
                <div className="flex flex-col mt-5 gap-3 font-lufgaLight">
                <Button
                  outline
                  label="Continue with Google"
                  icon={FcGoogle}
                  onClick={() => {
                    signIn('google', { callbackUrl: '/' })
                    .then((callback) => {
                      if (callback?.ok) {
                        toast.success('Logged in successfully!');
                        router.push('/')
                        .then(() => {
                          console.log("Redirected to home page");
                        })
                        .catch((error: unknown) => {
                          // Handle error during sign-in
                        });
                      }
                      if (callback?.error) {
                        toast.error(callback.error);
                        console.log('Error logging in: ', callback.error);
                      }
                    })
                    .catch((error: any) => {
                      console.log('Error logging in: ', error);
                    });
                  }}
                  
                />
                <Button
                  outline
                  label="Continue with Facebook"
                  icon={FaFacebookF}
                  onClick = {() => {
                    signIn('facebook', { callbackUrl: '/' })
                    .then((callback) => {
                      if (callback?.ok) {
                        toast.success('Logged in successfully!');
                        router.push('/')
                        .then(() => {
                          console.log("Redirected to home page");
                        })
                        .catch((error: unknown) => {
                          // Handle error during sign-in
                        });
                      }
                      if (callback?.error) {
                        toast.error(callback.error);
                        console.log('Error logging in: ', callback.error);
                      }
                    })
                    .catch((error: any) => {
                      console.log('Error logging in: ', error);
                    });
                  }}
                />
              </div>
              </form>
              <div className="mt-6 font-lufgaMedium text-sm text-gray-500 text-center">
                Already have an account?
                <Link href="/login" className="ml-1 font-lufgaMedium text-indigo-600 hover:text-indigo-500">
                  Log in
                </Link>
              </div>
            </div>
          </div>
  );
};

export default SignUpWindow;