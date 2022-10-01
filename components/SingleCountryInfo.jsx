import Image from "next/image";
import BorderCountryButton from "../components/BorderCountryButton";

export default function SingleCountryInfo(props) {
  const info1 = [
    {
      text: "native name",
      value:
        props.singleCountryData.name.nativeName[
          Object.keys(props.singleCountryData.languages).pop()
        ].common,
    },
    {
      text: "Population",
      value: props.singleCountryData.population,
    },
    {
      text: "region",
      value: props.singleCountryData.region,
    },
    {
      text: "subregion",
      value: props.singleCountryData.subregion,
    },
    {
      text: "capital",
      value: props.singleCountryData.capital,
    },
  ];

  const info2 = [
    {
      text: "top level domain",
      value: props.singleCountryData.tld,
    },
    {
      text: "currencies",
      value:
        props.singleCountryData.currencies[
          Object.keys(props.singleCountryData.currencies).pop()
        ].name,
    },
    {
      text: "languages",
      value: Object.values(props.singleCountryData.languages).join(", "),
    },
  ];
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
          {info1.map((item) => (
            <p className="capitalize">
              <span className="capitalize font-medium">{item.text}: </span>
              {item.value}
            </p>
          ))}
        </div>
        <div>
          {info2.map((item) => (
            <p className="capitalize">
              <span className="capitalize font-medium">{item.text}: </span>
              {item.value}
            </p>
          ))}
        </div>
        <div>
          <p>Border Countries: </p>
          <div className="grid grid-cols-2 gap-4">
            {props.singleCountryData?.borders?.map((item) => (
              <BorderCountryButton key={item} cca3={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
