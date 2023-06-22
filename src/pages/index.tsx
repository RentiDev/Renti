'use client';

import fs from 'fs';

import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DropDown from "../components/DropDown";
import Layout from "../components/Layout";
import getCurrentUser from "~/actions/getCurrentUser";
import PropertyPicture from "../components/PropertyPicture";
import GetStartedButton from "~/components/GetStartedButton";
import PropertyDescription from "~/components/PropertyDescription";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { signIn, useSession } from "next-auth/react";




const Home: NextPage = () => {
  
  // const currentUser = getCurrentUser();

  useEffect(()=> {
    AOS.init();
  }, []);

  const { data: session } = useSession();
  const userName = session?.user?.name;

  return (
    <>
      <Head>
        <title>Renti - Secure Renting Platform for Landowners and Tenants</title>
        <meta name="description" content="Renting Reimagined" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="flex min-h-screen max-w-full flex-col items-center bg-white overflow-hidden" data-aos="fade-up" data-aos-duration="500">
          <div className="relative pl-[10vw] mx-auto w-screen h-[90vh] bg-gradient-to-br from-[#C4DAFC] to-[#356dbe]">
            <div className="absolute bottom-0 right-0 overflow-x-hidden w-1/2 h-screen" data-aos="fade-in" data-aos-duration="2000">
                <Image className="object-contain absolute bottom-[0vh] right-[0vh]" src="/../public/images/BuildingGoat.png" width={4200} height={3700}
                alt="Building background image"/>
            </div>
            <div className="container flex flex-col items-left justify-center gap-12 px-4 py-16 mt-32">
              <div>
                <h1 className="text-5xl font-lufgaExtraBold tracking-tight text-black sm:text-[6rem] text-left">
                  RENTING <br></br>RE-IMAGINED
                </h1>
                <p className="text-xl font-lufgaMedium text-black">
                  Renti streamlines the rental process, connecting landlords and tenants <br></br>
                  for a seamless and secure renting experience
                </p>
              </div>
              {/* <div className="justify-left mx-4 flex gap-48 scale-150">
                <GetStartedButton text="Landlords"></GetStartedButton>
                <GetStartedButton text="Tenants"></GetStartedButton>
              </div> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center h-[90vh] w-screen px-[5vw] bg-white" data-aos="fade-up" data-aos-duration="2000">
              <div className="flex items-center">
                  <div className="absolute w-1/3 scale-[.7]" >
                    <PropertyPicture src="/images/Bedroom.jpg" alt="Bedroom" />
                  </div>
                  <div className="absolute translate-x-[10vh] w-1/3 scale-[.85]">
                    <PropertyPicture src="/images/Living Room.jpg" alt="Living Room" />
                  </div>
                  <div className="absolute translate-x-[20vh] w-1/3">
                    <PropertyPicture src="/images/Dining Room.jpg" alt="Dining Room" />
                  </div>
                </div>
              <div className="flex items-center justify-center">
                <h1>
                  <PropertyDescription name = "Elegant apartment" 
                    price = {92000} 
                    subheading = "A spacious, sunny apartment" 
                    size = {1200} 
                    number_bedrooms = {2} 
                    number_bathrooms = {2} 
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae nisi id magna mattis faucibus. Sed in tellus eget tortor porta aliquet. Sed vitae dolor sit amet mi commodo lacinia. Sed sit amet nunc vitae purus faucibus tincidunt. Sed nec lectus in nisl dic." />
                </h1>
              </div>
          </div>
              
        </main>
      </Layout>
    </>
  );
};

export default Home;
