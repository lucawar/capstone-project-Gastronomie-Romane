import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gastronomia } from '../models/gastronomia';


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
    return this.http.get(`${this.baseURL}/gastronomia/${gastronomiaId}/menu`);
  }

  getRecensioniByGastronomia(gastronomiaId: string): Observable<any> {
    return this.http.get(`${this.baseURL}/gastronomia/${gastronomiaId}/recensioni`);
}

}
