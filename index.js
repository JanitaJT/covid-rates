const fetch = require("node-fetch");

module.exports.getRatesByCountry = async function (country) {
  let byCountry;
  let url =
    "https://covid-api.mmediagroup.fr/v1/cases?country=" + jsUcfirst(country);
  await fetch(url)
    .then((res) => res.json())
    .then((json) => json.All)
    .then((data) => (byCountry = data));
  return byCountry;
};

module.exports.getRatesByAb = async function (ab) {
  let byAb;
  let url = "https://covid-api.mmediagroup.fr/v1/cases?ab=" + ab.toUpperCase();
  await fetch(url)
    .then((res) => res.json())
    .then((json) => json.All)
    .then((data) => (byAb = data));
  return byAb;
};

module.exports.getRatesByContinent = async function (continent) {
  let byContinent;
  let url =
    "https://covid-api.mmediagroup.fr/v1/cases?continent=" +
    jsUcfirst(continent);
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (byContinent = data));
  return byContinent;
};

module.exports.getConfirmedRatesByCountry = async function (
  country,
  confirmed
) {
  let confirmedByCountry;
  let url =
    "https://covid-api.mmediagroup.fr/v1/history?country=" +
    jsUcfirst(country) +
    "&status=" +
    jsUcfirst(confirmed);
  await fetch(url)
    .then((res) => res.json())
    .then((json) => json.All)
    .then((data) => (confirmedByCountry = data));
  return confirmedByCountry;
};

module.exports.getConfirmedRatesByAb = async function (ab, confirmed) {
  let confirmedByAb;
  let url =
    "https://covid-api.mmediagroup.fr/v1/history?ab=" +
    ab.toUpperCase() +
    "&status=" +
    jsUcfirst(confirmed);
  await fetch(url)
    .then((res) => res.json())
    .then((json) => json.All)
    .then((data) => (confirmedByAb = data));
  return confirmedByAb;
};

module.exports.getConfirmedRatesByContinent = async function (
  continent,
  confirmed
) {
  let confirmedByContinent;
  let url =
    "https://covid-api.mmediagroup.fr/v1/history?continent=" +
    jsUcfirst(continent) +
    "&status=" +
    jsUcfirst(confirmed);
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (confirmedByContinent = data));
  return confirmedByContinent;
};

module.exports.getDeathRatesByCountry = async function (country, deaths) {
  let deathByCountry;
  let url =
    "https://covid-api.mmediagroup.fr/v1/history?country=" +
    jsUcfirst(country) +
    "&status=" +
    jsUcfirst(deaths);
  await fetch(url)
    .then((res) => res.json())
    .then((json) => json.All)
    .then((data) => (deathByCountry = data));
  return deathByCountry;
};

module.exports.getDeathRatesByAb = async function (ab, deaths) {
  let deathByAb;
  let url =
    "https://covid-api.mmediagroup.fr/v1/history?ab=" +
    ab.toUpperCase() +
    "&status=" +
    jsUcfirst(deaths);
  await fetch(url)
    .then((res) => res.json())
    .then((json) => json.All)
    .then((data) => (deathByAb = data));
  return deathByAb;
};

module.exports.getDeathRatesByContinent = async function (continent, deaths) {
  let deathByContinent;
  let url =
    "https://covid-api.mmediagroup.fr/v1/history?continent=" +
    jsUcfirst(continent) +
    "&status=" +
    jsUcfirst(deaths);
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (deathByContinent = data));
  return deathByContinent;
};

module.exports.getVaccinesRatesByCountry = async function (country) {
  let byCountry;
  let url =
    "https://covid-api.mmediagroup.fr/v1/vaccines?country=" +
    jsUcfirst(country);
  await fetch(url)
    .then((res) => res.json())
    .then((json) => json.All)
    .then((data) => (byCountry = data));
  return byCountry;
};

module.exports.getVaccinesRatesByAb = async function (ab) {
  let byAb;
  let url =
    "https://covid-api.mmediagroup.fr/v1/vaccines?ab=" + ab.toUpperCase();
  await fetch(url)
    .then((res) => res.json())
    .then((json) => json.All)
    .then((data) => (byAb = data));
  return byAb;
};

module.exports.getVaccinesRatesByContinent = async function (continent) {
  let byContinent;
  let url =
    "https://covid-api.mmediagroup.fr/v1/vaccines?continent=" +
    jsUcfirst(continent);
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (byContinent = data));
  return byContinent;
};

function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
