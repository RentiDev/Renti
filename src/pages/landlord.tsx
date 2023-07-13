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
              <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <AddListingWindow></AddListingWindow>
              </div>
              <div className="w-5/6 h-5/6 flex flex-col bg-white rounded-2xl">
                <div className="flex flex-col gap-10 mx-24 my-12">
                  <ImageUpload></ImageUpload>
                </div>
              </div>
            </div>
          </main>
        </Layout>
      </>
    );
  };
  

export default Landlord;