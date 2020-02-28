import { Sys } from './sys.class';
import { Weather } from './weather.class';

export interface Tempo {
  weather?: Weather;
  sys?: Sys;
  timezone?;
  id?;
  name?;
  cod?;
}
