export default async function getSingleCountryData(ccn3) {
  const resp = await fetch(`https://restcountries.com/v3.1/alpha/${ccn3}`);
  const data = await resp.json();
  return data;
}
