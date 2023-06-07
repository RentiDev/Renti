import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const SignUp: NextPage = () => {
    return (
      <>
        <Head>
          <title>About | Renti</title>
        </Head>
        <Layout>
          <main>
            <h1>About Page</h1>
            <p>This is the about page content.</p>
          </main>
        </Layout>
      </>
    );
  };
  
  export default SignUp;
  