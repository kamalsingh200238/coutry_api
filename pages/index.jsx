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
  const [searchParams] = useState(["official", "common"]);

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
    <div className="lg:container pt-10 px-5">
      <Head>
        <title>Country api</title>
      </Head>
      <div>
        <input
          className="w-full rounded-lg shadow-lg border-gray-300 focus:border-gray-600 focus:ring-gray-700"
          type="search"
          name="search-form"
          id="search-form"
          placeholder="Search for..."
          value={q}
          onChange={async (e) => {
            setQ(e.target.value);
          }}
        />
        <span className="sr-only">Search countries here</span>
      </div>
      <div>
        <select
          name="Filter by region"
          id="filter-by-region"
          className="w-2/3 rounded-lg shadow-lg border-gray-300 focus:border-gray-600 focus:ring-gray-700"
          onChange={(e) => {
            setRegionForFilter(e.target.value);
          }}
        >
          <option value="">Filter by region</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="grid px-10 gap-10">
        {filteredAllCountryData.map((item, index) => (
          <CountryCard key={index} singleCountryData={item} />
        ))}
      </div>
    </div>
  );
}
