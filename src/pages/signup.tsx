import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import SignUpWindow from "../components/Login/SignUpWindow";

const SignUp: NextPage = () => {
    return (
      <>
        <Head>
          <title>About | Renti</title>
        </Head>
        <Layout>
          <main>
            <SignUp></SignUp>
          </main>
        </Layout>
      </>
    );
  };
  
  export default SignUp;
  