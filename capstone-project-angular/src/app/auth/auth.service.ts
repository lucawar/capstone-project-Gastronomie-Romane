import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BehaviorSubject,} from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser!: User;
  private authSubj = new BehaviorSubject<null | User>(null);
  user$ = this.authSubj.asObservable();

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post<any>('http://localhost:3001/auth/login', credentials)
      .pipe(map(response => {
        if (response.accessToken) {
          this.authSubj.next(response);
          this.currentUser = response;
          console.log('Token:', response.accessToken);
          localStorage.setItem('token', response.accessToken);
        }
        return response;
      }));
  }

  register(username:String, name:String,  surname: string,
    email: string,
    password: string,
    numeroTelefono: string): Observable<any> {
      const newUser = { username, name, surname, email, password, numeroTelefono};
    return this.http.post<any>('http://localhost:3001/auth/register', newUser);
  }


  logout() {
    localStorage.removeItem('token');
    alert("CIAO,RIEFFETTUA IL LOGIN PER ACCEDERE")



  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getCurrentUser(): Observable<any> {
    if (this.currentUser) {
        return of(this.currentUser);
    }

    return this.http.get<any>('http://localhost:3001/users/current').pipe(
        map(response => {
            console.log("Risposta API:", response);
            if (!response) {
                throw new Error('Invalid API response');
            }
            this.currentUser = response;
            return this.currentUser;
        }),
        catchError(error => {
            console.error("Errore nell'API:", error);
            return throwError(error);
        })
    );
}}


