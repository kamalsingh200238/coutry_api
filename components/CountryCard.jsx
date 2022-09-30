import Image from "next/image";
import Link from "next/link";

export default function CountryCard(props) {
  return (
    <Link href={`/country/${props.singleCountryData.cca2}`}>
      <a className="rounded-md pb-8 overflow-hidden flex flex-col gap-6 border border-gray-200 shadow-lg">
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
          <p className="mb-4 text-xl font-bold">
            {props.singleCountryData.name.official}
          </p>
          <p>
            <span className="font-medium ">Population: </span>
            {props.singleCountryData.population.toLocaleString("en", {
              useGrouping: true,
            })}
          </p>
          <p>
            <span className="font-medium">region: </span>
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
