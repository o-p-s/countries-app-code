import { language } from "./language";
import { currency } from "./currency";
import { regionalBloc } from "./regionalBlocs";
import { translations } from "./translations";

//interface for country

export interface country{
    name: string, 
    topLevelDomain: string[],
    alpha2Code: string, 
    alpha3Code: string, 
    callingCodes: string[],
    altSpellings: string[],
    area: Number,
    borders: string[],
    capital: string,
    cioc: string,
    currencies: currency[],
    demonym: string,
    flag : string,
    gini: Number,
    languages: language[],
    latlng: Number[],
    nativeName: string,
    numericCode: string,
    population: Number,
    region: string,
    regionalBlocs:regionalBloc[],
    subregion:string,
    timezones:string[],
    translations:translations[],
}