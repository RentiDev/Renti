import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DropDown from "../components/DropDown";
import Header from "../components/Header";
import Layout from "../components/Layout";
import PropertyCard from "../components/PropertyCard";
import PropertyPicture from "../components/PropertyPicture";
import Pill from "../components/Pill";
import GetStartedButton from "~/components/GetStartedButton";
import PropertyDescription from "~/components/PropertyDescription";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Renti - Secure Renting Platform for Landowners and Tenants</title>
        <meta name="description" content="Renting Reimagined" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="flex min-h-screen max-w-full flex-col items-center bg-white overflow-hidden">
          <div className="relative pl-[10vw] mx-auto w-screen h-[90vh] bg-gradient-to-br from-[#C4DAFC] to-[#356dbe]">
            <div className="absolute bottom-0 right-0 overflow-x-hidden w-1/2 h-screen">
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
              <div className="flexbox w-[5vw] gap-y-3">
                <GetStartedButton text="Landlords"></GetStartedButton>
                <GetStartedButton text="Tenants"></GetStartedButton>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center h-[90vh] w-screen px-[5vw] bg-white">
              <div className="flex items-center">
                  <div className="absolute w-1/3 scale-[.7]">
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
              
          <div className="relative mx-auto w-screen h-[90vh] bg-[#356dbe]">

          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
