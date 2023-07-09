import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import AddListingWindow from "../components/Listings/AddListingWindow";

const Landlord: NextPage = () => {
    return (
        <>
            <Head>
                <title>Renti - Secure Renting Platform for Landowners and Tenants</title>
                <meta name="description" content="Renting Reimagined" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout> 
                <main> 
                    <div className="flex flex-col items-center justify-center min-h-screen py-2">
                        <AddListingWindow></AddListingWindow>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default Landlord;