import Link from "next/link";
import { useState } from "react";
import React from "react";
import Button from "../Button";
import {FcGoogle} from "react-icons/fc";
import {FaFacebookF} from "react-icons/fa";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";


const LoginWindow = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Add your login form submission logic here
      signIn("credentials", {
        email,
        password,
        redirect: false,
      })
      .then((callback) => {
        console.log("callback")
        console.log(callback);


        if (callback?.ok) {
          toast.success("Logged in successfully!");
          console.log("Logged in successfully!");
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
          console.log("Error logging in: ", callback.error);
        }
      })
      .catch((error: any) => {
        console.log("Error logging in: ", error);
      });
    };
  
    return (
      <div className="flex justify-center items-center fixed inset-0 bg-gradient-to-br from-[#C4DAFC] to-[#356dbe]">
        <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-lufgaExtraBold text-gray-900 text-center mb-6">
            Log in to your account
          </h2>
          <form onSubmit={handleLoginFormSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-md font-lufgaMedium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="p-4 mt-1 block w-full text-black bg-gray-200 border-gray-600 border-2 font-lufgaMedium rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-md"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="h-4 w-4 bg-gray-600 border-gray-600 rounded-2xl"
                />
                <label htmlFor ="rememberMe" className="ml-2 block text-sm font-lufgaMedium text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link href="#" className="font-lufgaMedium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-4 px-4 border border-transparent rounded-md shadow-sm text-md font-lufgaMedium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
            <div className="flex gap-3 flex-col mt-5 font-lufgaLight">
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
                {/* <Button
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
                /> */}
            </div>
          </form>
          <div className="mt-6 font-lufgaMedium text-sm text-gray-500 text-center">
            Don&apos;t have an account?
            <Link href="/signup" className="ml-1 font-lufgaMedium text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginWindow;