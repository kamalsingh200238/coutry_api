import Image from "next/image";
import BorderCountryButton from "../components/BorderCountryButton";

export default function SingleCountryInfo(props) {
  console.log(props);
  //for printing native name
  const nativeName =
    props.singleCountryData.name.nativeName[
      Object.keys(props.singleCountryData.languages).pop()
    ].common;

  const currencies =
    props.singleCountryData.currencies[
      Object.keys(props.singleCountryData.currencies).pop()
    ].name;

  const languages = Object.values(props.singleCountryData.languages).join(", ");

  return (
    <div className="grid gap-12">
      <div className="relative aspect-video w-full">
        <Image
          priority
          src={props.singleCountryData.flags.svg}
          alt={`Image of flag of ${props.singleCountryData.name}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl">
          {props.singleCountryData.name.official}
        </h1>
        <div>
          {" "}
          <p>
            <span className="capitalize">native name: </span>
            {nativeName}
          </p>
          <p>
            <span className="capitalize">population: </span>
            {props.singleCountryData.population}
          </p>
          <p>
            <span className="capitalize">region: </span>
            {props.singleCountryData.region}
          </p>
          <p>
            <span className="capitalize">subregion: </span>
            {props.singleCountryData.subregion}
          </p>
          <p>
            <span className="capitalize">capital: </span>
            {props.singleCountryData.capital}
          </p>
        </div>
        <div>
          <p>
            <span className="capitalize">top level domain: </span>
            {props.singleCountryData.tld}
          </p>
          <p>
            <span className="capitalize">currencies: </span>
            {currencies}
          </p>
          <p>
            <span className="capitalize">languages: </span>
            {languages}
          </p>
        </div>
        <div>
          <p>Border Countries: </p>
          <div className="flex gap-4">
            {props.singleCountryData.borders?.map((item) => {
              return <BorderCountryButton cca3={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
