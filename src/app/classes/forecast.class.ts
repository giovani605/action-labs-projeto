import { Weather } from './weather.class';
import { Principal } from './Principal.class';

export interface Forecast {
  dt?;
  dt_txt: Date;
  weather: Weather;
  main?: Principal;
}
