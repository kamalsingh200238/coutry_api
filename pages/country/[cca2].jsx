import getSingleCountryData from "../../lib/getSingleCountryData.js";
import getAllCountryData from "../../lib/getAllCountryData.js";
import Head from "next/head";
import SingleCountryInfo from "../../components/SingleCountryInfo.jsx";
import Link from "next/link.js";

export async function getStaticPaths() {
  // call the api
  const data = await getAllCountryData();
  // create paths
  const paths = data.map((item) => {
    return {
      params: {
        cca2: item.cca2,
      },
    };
  });
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const data = await getSingleCountryData(params.cca2);
  return {
    props: {
      singleCountryData: data,
    },
  };
}

export default function SingleCountryPage({ singleCountryData }) {
  return (
    <div className="pt-12 dark:bg-background-d min-h-screen dark:text-white">
      <Head>
        <title>Country api</title>
      </Head>
      <div className="lg:container px-10 mx-auto">
        <SingleCountryInfo singleCountryData={singleCountryData[0]} />
      </div>
    </div>
  );
}
