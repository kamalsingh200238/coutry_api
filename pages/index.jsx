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

  // state of parameters in which search text need to matched
  const [searchParams] = useState(["common", "official"]);

  // state of region for filter, from drop down
  const [regionForFilter, setRegionForFilter] = useState("");

  // Filter Logic
  useEffect(() => {
    setFilteredAllCountryData(
      allCountryData.filter((singleCountryData) => {
        return (
          // First check if country is in region selected by user from dropdown
          singleCountryData.region
            .toLowerCase()
            .includes(regionForFilter.toLowerCase()) &&
          // Second check if the country has the characters typed in search field by user
          searchParams.some((singleParam) => {
            return singleCountryData.name[singleParam]
              .toLowerCase()
              .includes(q.toLowerCase());
          })
        );
      })
    );
  }, [q, regionForFilter]);
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
      <label htmlFor="filter-by-region">Filter by Region</label>
      <select
        name="Filter by region"
        id="filter-by-region"
        onChange={(e) => {
          setRegionForFilter(e.target.value);
        }}
      >
        <option value="">All</option>
        <option value="America">America</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
      </select>
      <div>
        {filteredAllCountryData.map((item, index) => (
          <CountryCard key={index} singleCountryData={item} />
        ))}
      </div>
    </>
  );
}
