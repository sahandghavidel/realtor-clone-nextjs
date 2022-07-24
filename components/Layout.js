import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

export default function Layout({ children, title, description, keywords }) {
  return (
    <div className="bg-green-50 min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

Layout.defaultProps = {
  title: "Realtor Clone Next.js",
  description: "A real estate website to buy, sell and rent your properties",
  keywords: "real estate, realtor, house, villa, condo",
};
