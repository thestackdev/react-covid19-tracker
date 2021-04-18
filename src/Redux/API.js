import Axios from "axios";

const GLOBAL_URL = "https://disease.sh/v3/covid-19/all";
const COUNTRIES_URL = "https://disease.sh/v3/covid-19/countries";

export const fetchGlobal = async () => await Axios.get(GLOBAL_URL);
export const fetchCountries = async () => await Axios.get(COUNTRIES_URL);
