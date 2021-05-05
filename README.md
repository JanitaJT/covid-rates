# COVID-19 rates

Package to get easily COVID-19 information by country, abbreviation and continent, on confirmed cases, vaccine- and death rates from https://covid-api.mmediagroup.fr/v1 .

## Installation

```bash
	$ npm install covid-rates
	Const rates = require(‘covidrates’)
```

## Methods

NOTE: All functions are asynchronous and parameters are not case sensitive.

    getRatesByCountry(country);
    getRatesByAb(ab);
    getRatesByContinent(continent);
    getConfirmedRatesByCountry(country, confirmed);
    getConfirmedRatesByAb(ab, confirmed);
    getConfirmedRatesByContinent(continent, confirmed);
    getDeathRatesByCountry(country, deaths);
    getDeathRatesByAb(ab, deaths);
    getDeathRatesByContinent(continent, deaths);
    getVaccinesRatesByCountry(country);
    getVaccinesRatesByAb(ab);
    getVaccinesRatesByContinent(continent);

## Usage

#### getRatesByCountry(country), getRatesByAb(ab), getRatesByContinent(continent)

With these three functions you can get all covid-19 information by country, abbreviation and continent.

```
var rates = await covidrates.getRatesByCountry("finland");
```

```
var rates = await covidrates.getRatesByAb("fi");
```

```
var rates = await covidrates.getRatesByContinent("europe");

```

#### getConfirmedRatesByCountry(country, confirmed), getConfirmedRatesByAb(ab, confirmed), getConfirmedRatesByContinent(continent, confirmed)

With these three functions you can get all confirmed cases by country, abbreviation and continent.

```
var rates = await covidrates.getConfirmedRatesByCountry("germany", "confirmed");
```

```
var rates = await covidrates.getConfirmedRatesByAb("de", "confirmed");
```

```
var rates = await covidrates.getConfirmedRatesByContinent("europe", "confirmed");

```

#### getDeathRatesByCountry(country, deaths), getDeathRatesByAb(ab, deaths), getDeathRatesByContinent(continent, deaths)

With these three functions you can get all death rates by country, abbreviation and continent.

```
var rates = await covidrates.getDeathRatesByCountry("france", "deaths");
```

```
var rates = await covidrates.getDeathRatesByAb("fr", "deaths");
```

```
var rates = await covidrates.getDeathRatesByContinent("europe", "deaths");

```

#### getVaccinesRatesByCountry(country), getVaccinesRatesByAb(ab), getVaccinesRatesByContinent(continent)

With these three functions you can get all vaccines rates by country, abbreviation and continent.

```
var rates = await covidrates.getVaccinesRatesByCountry("finland");
```

```
var rates = await covidrates.getVaccinesRatesByAb("fi");
```

```
var rates = await covidrates.getVaccinesRatesByContinent("europe");

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
