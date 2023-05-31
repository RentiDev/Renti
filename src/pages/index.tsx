import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DropDown from "../components/DropDown";
import Header from "../components/Header";
import Layout from "../components/Layout";
import PropertyCard from "../components/PropertyCard";
import Pill from "../components/Pill";
import GetStartedButton from "~/components/GetStartedButton";

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
            <div className="absolute bottom-0 right-0 overflow-x-hidden">
              <Image src="/../public/images/BuildingGoat.png" width={900} height={1000} alt="Building background image"/>
            </div>
            <div className="container flex flex-col items-left justify-center gap-12 px-4 py-16 mt-32">
              <div>
                <h1 className="text-5xl font-lufgaExtraBold tracking-tight text-black sm:text-[6rem] text-left">
                  RENTING <br></br>REIMAGINED
                </h1>
                <p className="text-xl font-lufgaMedium text-black">
                  Renti streamlines the rental process, connecting landlords and tenants <br></br>
                  for a seamless and secure renting experience
                </p>
              </div>
              {/* <select className="select select-bordered select-lg w-full max-w-xs">
                <option disabled selected>Large</option>
                <option>Large Apple</option>
                <option>Large Orange</option>
                <option>Large Tomato</option>
              </select> */}
              <div className="flexbox w-[5vw] gap-y-3">
                <GetStartedButton text="Landlords"></GetStartedButton>
                <GetStartedButton text="Tenants"></GetStartedButton>
              </div>
            </div>
          </div>
          <div className="container relative items-center h-screen w-screen bg-white">
            {/* <div className="flex flex-col items-center justify-center gap-12 px-4 py-16"> */}
            <div className="absolute inset-x-0 top-0">
              <Pill
                  items={
                      <>
                          <PropertyCard />
                          <PropertyCard />
                          <PropertyCard />
                      </>
                  }
              />
            </div>
          </div>

        </main>
      </Layout>
    </>
  );
};

export default Home;
