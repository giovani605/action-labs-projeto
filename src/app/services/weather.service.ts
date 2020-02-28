import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  procurarCidade(cidade: string): Observable<any> {
    return this.construirRequest('find', { q: cidade });
  }
  tempoAtualCidade(idCidade: any): Observable<any> {
    return this.construirRequest('weather', { id: idCidade });
  }
  previsaoTempoCidade(idLocation): Observable<any> {
    return this.construirRequest('forecast', { id: idLocation });
  }

  private construirRequest(path, parametro): Observable<any> {
    let params: HttpParams = new HttpParams();
    // http params is weird
    params = params.append('appId', environment.weatherApiKey);
    params = params.append('units', 'metrics');
    for (const key of Object.keys(parametro)) {
      params = params.append(key, parametro[key]);
    }
    return this.http.get(environment.weatherApi + path, {
      params
    });
  }
}
