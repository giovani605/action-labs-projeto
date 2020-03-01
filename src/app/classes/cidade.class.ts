import { Sys } from './sys.class';
import { Weather } from './weather.class';
import { Principal } from './Principal.class';

export interface Cidade {
  id?: number;
  name?: string;
  main?: Principal;
  weather?: Weather;
  sys?: Sys;
}
