import Image from "next/image";
import Link from "next/link";

export default function CountryCard(props) {
  return (
    <Link href={`/country/${props.singleCountryData.cca2}`}>
      <a>
        <div className="relative aspect-[3/2] w-52">
          <Image
            priority
            src={props.singleCountryData.flags.svg}
            alt={`Image of flag of ${props.singleCountryData.name}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <p>{props.singleCountryData.name.official}</p>
          <p>{props.singleCountryData.population}</p>
          <p>{props.singleCountryData.region}</p>
          <p>{props.singleCountryData.capital}</p>
        </div>
      </a>
    </Link>
  );
}
