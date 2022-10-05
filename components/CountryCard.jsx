import Image from "next/image";
import Link from "next/link";

export default function CountryCard(props) {
  return (
    <Link href={`/country/${props.singleCountryData.cca2}`}>
      <a className="hover:scale-105 transition-all duration-150 ease-in-out rounded-md pb-8 overflow-hidden flex flex-col gap-6 border border-gray-200 shadow-lg focus:outline-none focus:border-gray-600 focus:ring-gray-700 focus:ring">
        <div className="relative w-full aspect-video">
          <Image
            priority
            src={props.singleCountryData.flags.svg}
            alt={`Image of flag of ${props.singleCountryData.name}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-6">
          <p className="mb-4 text-lg lg:text-xl font-bold">
            {props.singleCountryData.name.common}
          </p>
          <p>
            <span className="font-medium ">Population: </span>
            {props.singleCountryData.population.toLocaleString("en", {
              useGrouping: true,
            })}
          </p>
          <p>
            <span className="font-medium capitalize">region: </span>
            {props.singleCountryData.region}
          </p>
          <p>
            <span className="font-medium ">Capital: </span>
            {props.singleCountryData.capital}
          </p>
        </div>
      </a>
    </Link>
  );
}
