import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import LoginWindow from "../components/Login/LoginWindow";


const Login: NextPage = () => {
    
    return (
      <>
        <Head>
          <title>Login | Renti</title>
        </Head>
        <Layout>
          <main>
            <LoginWindow />
          </main>
        </Layout>
      </>
    );
  };

  export default Login;
  