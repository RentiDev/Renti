import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import DropDown from "../components/DropDown";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Renti - Secure Renting Platform for Landowners and Tenants</title>
        <meta name="description" content="Renting Reimagined" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <Header></Header> */}
        <main className="flex min-h-screen flex-col items-center bg-white">
          <div className="pl-20 mx-auto items-center w-screen h-[90vh] bg-gradient-to-br from-[#71AAF7] to-[#356dbe]">
            <div className="container flex flex-col items-left justify-center gap-12 px-4 py-16 mt-32">
              <h1 className="text-5xl font-lufgaExtraBold tracking-tight text-white sm:text-[6rem] text-left">
                RENTING <br></br><span className="text-black">REIMAGINED</span>
              </h1>
            </div>
          </div>
          <div className="h-screen w-screen bg-black">
            {/* <div className="flex flex-col items-center justify-center gap-12 px-4 py-16"> */}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
