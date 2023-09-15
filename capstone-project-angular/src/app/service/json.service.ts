import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gastronomia } from '../models/gastronomia';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private baseURL = 'http://localhost:3001';  // INDIRIZZO BACK-END

  constructor(private http: HttpClient) { }

  getGastronomie(page: number = 0, size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/gastronomia?page=${page}&size=${size}`);
  }

  getGastronomieByTipo(tipo: string): Observable<any> {
    return this.http.get(`${this.baseURL}/gastronomia/cerca?tipo=${tipo}`);
  }

  getGastronomieByPrezzo(minPrice: string, maxPrice: string): Observable<any> {
    return this.http.get(`${this.baseURL}/gastronomia/cerca?prezzoMin=${minPrice}&prezzoMax=${maxPrice}`);
  }

  getMenuByGastronomia(gastronomiaId: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/gastronomia/${gastronomiaId}/menu`);
  }

  getRecensioniByGastronomia(gastronomiaId: string): Observable<any> {
    return this.http.get(`${this.baseURL}/gastronomia/${gastronomiaId}/recensioni`);
  }

  creaRecensione(payload: any, gastronomiaId: string): Observable<any> {
    return this.http.post(`${this.baseURL}/users/gastronomia/${gastronomiaId}/recensioni`, payload);
  }

  creaPrenotazione(payload: any, gastronomiaId: string): Observable<any> {
    return this.http.post(`${this.baseURL}/users/gastronomia/${gastronomiaId}/prenotazioni`, payload);
  }

  aggiungiPreferitiGastronomia(gastronomiaId: string): Observable<any> {
    return this.http.post(`${this.baseURL}/users/aggiungiPreferiti/${gastronomiaId}`, null, { responseType: 'text' as 'json' });
  }

  rimuoviPreferitiGastronomia(gastronomiaId: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/users/rimuoviPreferiti/${gastronomiaId}`, { responseType: 'text' as 'json' });
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/users/current`);
  }

  getGastronomiePreferite(page: number = 0, size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/users/preferiti?page=${page}&size=${size}`);
  }

  getRecensioniUtente(page: number = 0, size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/users/myRecensioni?page=${page}&size=${size}`);
  }

  getPrenotazioniUtente(page: number = 0, size: number = 10, sortBy: string = "id"): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/users/myPrenotazioni?page=${page}&size=${size}&sortBy=${sortBy}`);
  }

}
