import { useEffect, useState } from "react";
import Head from "next/head";

import getAllCountryData from "../lib/getAllCountryData.js";
import CountryCard from "../components/CountryCard.jsx";
import DropDown from "../components/DropDown.jsx";

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
    <div className="dark:bg-background-d">
      <div className="lg:container pt-8 px-5 min-h-screen mx-auto">
        <Head>
          <title>Country api</title>
        </Head>
        <div className="flex flex-col gap-10 mb-10 sm:flex-row sm:justify-between">
          <div className="max-w-[30rem]">
            <input
              className="px-6 py-3 w-full rounded-lg shadow-lg border-gray-300 focus:outline-none  focus:ring-gray-700 focus:ring-2 dark:bg-elements-d dark:text-white dark:border-none dark:ring-white"
              type="search"
              name="search-form"
              id="search-form"
              placeholder="Search for a country..."
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
              }}
            />
            <span className="sr-only">Search countries here</span>
          </div>

          <div className="w-2/3 max-w-[15rem] dark:text-white">
            <DropDown setRegionForFilter={setRegionForFilter} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 px-10 gap-14 lg:px-0">
          {filteredAllCountryData.map((item, index) => (
            <CountryCard key={index} singleCountryData={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
