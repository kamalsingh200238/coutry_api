import { useEffect, useState } from "react";
import Head from "next/head";

import getAllCountryData from "../lib/getAllCountryData.js";
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
  // console.log(allCountryData);

  // state for Search
  const [q, setQ] = useState("");

  // state for filtered country
  const [filteredAllCountryData, setFilteredAllCountryData] =
    useState(allCountryData);

  // parameters in which search text need to matched
  const [searchParams] = useState(["common", "official"]);

  // Filter Logic
  useEffect(() => {
    setFilteredAllCountryData(
      allCountryData.filter((singleCountryData) => {
        return searchParams.some((singleParam) => {
          return singleCountryData.name[singleParam]
            .toLowerCase()
            .includes(q.toLowerCase());
        });
      })
    );
  }, [q]);
  return (
    <>
      <Head>
        <title>Country api</title>
      </Head>
      <label htmlFor="search-form">
        <input
          type="search"
          name="search-form"
          id="search-form"
          placeholder="Search for..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <span className="sr-only">Search countries here</span>
      </label>
      <div>
        {filteredAllCountryData.map((item, index) => (
          <CountryCard key={index} singleCountryData={item} />
        ))}
      </div>
    </>
  );
}
