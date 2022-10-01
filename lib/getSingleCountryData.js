export default async function getSingleCountryData(id) {
  const resp = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
  const data = await resp.json();
  return data;
}
