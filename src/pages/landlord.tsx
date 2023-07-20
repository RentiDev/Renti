import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import AddListingWindow from "../components/Listings/AddListingWindow";
import ImageUpload from "../components/Listings/ImageUpload";

const Landlord: NextPage = () => {
    return (
      <>
        <Head>
          <title>Renti - Secure Renting Platform for Landowners and Tenants</title>
          <meta name="description" content="Renting Reimagined" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <main
            className="flex min-h-screen max-w-full flex-col items-center bg-white overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="flex flex-col relative justify-center items-center mx-auto py-36 w-full bg-gradient-to-br from-[#C4DAFC] to-[#356dbe]">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-lufgaBold text-slate-900 mb-4">
                  Create your listing
                </h1>
                <p className="text-2xl font-lufgaMedium text-slate-700 mb-10">
                  Find exceptional tenants for your property today! 
                </p>
              </div>
              <div className="w-3/5 h-5/6 flex flex-col bg-white rounded-2xl">
                <div className="flex flex-col gap-10 mx-24 my-12">
                  <AddListingWindow></AddListingWindow>
                </div>
              </div>
            </div>
          </main>
        </Layout>
      </>
    );
  };
  

export default Landlord;