import getAllCountryData from "../lib/getAllCountryData.js";
import Head from "next/head";
import CountryCard from "../components/CountryCard.jsx";

export async function getStaticProps() {
  const data = await getAllCountryData();
  return {
    props: {
      allCountryData: data,
    },
  };
}

export default function Home({ allCountryData }) {
  console.log(allCountryData);
  return (
    <>
      <Head>
        <title>Country api</title>
      </Head>
      <div>
        {allCountryData.map((item, index) => (
          <CountryCard key={index} singleCountryData={item} />
        ))}
      </div>
    </>
  );
}
