import Head from "next/head";
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
    </div>
  );
}

Layout.defaultProps = {
  title: "Realtor Clone Next.js",
  description: "A real estate website to buy, sell and rent your properties",
  keywords: "real estate, realtor, house, villa, condo",
};
