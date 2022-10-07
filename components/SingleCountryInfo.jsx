import Image from "next/image";
import BorderCountryButton from "../components/BorderCountryButton";

export default function SingleCountryInfo(props) {
  const info1 = [
    {
      text: "native name",
      value: props.singleCountryData.languages
        ? props.singleCountryData.name.nativeName[
            Object.keys(props.singleCountryData.languages).pop()
          ].common
        : props.singleCountryData.name.common,
    },
    {
      text: "Population",
      value: props.singleCountryData.population.toLocaleString("en", {
        useGrouping: true,
      }),
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
      value: props.singleCountryData.currencies
        ? props.singleCountryData.currencies[
            Object.keys(props.singleCountryData.currencies).pop()
          ].name
        : "",
    },
    {
      text: "languages",
      value: props.singleCountryData.languages
        ? Object.values(props.singleCountryData.languages).join(", ")
        : "",
    },
  ];
  return (
    <div className="grid gap-12 lg:grid-cols-2 ">
      <div
        className="relative aspect-video w-full place-self-center
        "
      >
        <Image
          priority
          src={props.singleCountryData.flags.svg}
          alt={`Image of flag of ${props.singleCountryData.name}`}
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl mb-6">
          {props.singleCountryData.name.official}
        </h1>
        <div className="grid gap-5 md:grid-cols-2 gap-y-10">
          <div>
            {info1.map((item) => (
              <p
                key={item.text}
                className="capitalize dark:text-white/50 text-black/80"
              >
                <span className="capitalize font-medium dark:text-white text-black">
                  {item.text}:{" "}
                </span>
                {item.value}
              </p>
            ))}
          </div>
          <div>
            {info2.map((item) => (
              <p
                key={item.text}
                className="capitalize dark:text-white/50 text-black/80"
              >
                <span className="capitalize font-medium dark:text-white text-black">
                  {item.text}:{" "}
                </span>
                {item.value}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-6 md:flex-row md:items-center justify-between md:col-span-2">
            <p className="">Border Countries: </p>
            {typeof props.singleCountryData?.borders === "undefined" && (
              <p className="dark:text-white"> No border Countries</p>
            )}
            <div className="grid grid-cols-2 gap-4 flex-grow md:grid-cols-3">
              {props.singleCountryData?.borders?.map((item) => (
                <BorderCountryButton key={item} cca3={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
