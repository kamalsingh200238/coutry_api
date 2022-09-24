import getSingleCountryData from "../../lib/getSingleCountryData.js";
import getAllCountryData from "../../lib/getAllCountryData.js";
import Head from "next/head";

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
  console.log(params);
  const data = await getSingleCountryData(params.cca2);
  return {
    props: {
      singleCountryData: data,
    },
  };
}

export default function SingleCountryPage({ singleCountryData }) {
  console.log(singleCountryData);
  return (
    <>
      <Head>
        <title>Country api</title>
      </Head>
    </>
  );
}