import getAllCountryData from "../lib/getAllCountryData.js";

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
  return <></>;
}
