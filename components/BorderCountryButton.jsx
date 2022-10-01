import Link from "next/link";
import { useEffect, useState } from "react";
import getSingleCountryData from "../lib/getSingleCountryData";

export default function BorderCountryButton(props) {
  const [singleCountryData, setSingleCountryData] = useState("");

  //fetch data
  useEffect(() => {
    async function getData() {
      setSingleCountryData(await getSingleCountryData(props.cca3));
    }
    getData();
  }, []);

  if (singleCountryData !== "") {
    return (
      <div className="">
        <Link href={`/country/${singleCountryData[0].cca2}`}>
          <a className="px-3 py-2 border border-gray-300 block truncate text-center shadow-md rounded-sm">
            {singleCountryData[0].name.common}
          </a>
        </Link>
      </div>
    );
  } else {
    return <div className="animate-pulse">Loading...</div>;
  }
}