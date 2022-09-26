import Image from "next/image";
import Link from "next/link";

export default function CountryCard(props) {
  return (
    <Link href={`/country/${props.singleCountryData.cca2}`}>
      <a className="rounded-md overflow-hidden flex flex-col gap-6 border border-gray-200 shadow-lg pb-10">
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
            Population: <span>{props.singleCountryData.population}</span>
          </p>
          <p>
            Region: <span>{props.singleCountryData.region}</span>
          </p>
          <p>
            Capital: <span>{props.singleCountryData.capital}</span>
          </p>
        </div>
      </a>
    </Link>
  );
}
