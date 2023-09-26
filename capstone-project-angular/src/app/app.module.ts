import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthGuard } from './auth/auth.guard';


import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { GastronomiaComponent } from './components/gastronomia/gastronomia.component';
import { MenuComponent } from './components/menu/menu.component';
import { RecensioneComponent } from './components/recensione/recensione.component';
import { PrenotazioneComponent } from './components/prenotazione/prenotazione.component';
import { ProfiloUserComponent } from './components/profilo-user/profilo-user.component';
import { DettagliGastronomiaComponent } from './components/dettagli-gastronomia/dettagli-gastronomia.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'gastronomia',
    component: GastronomiaComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'profilo',
    component: ProfiloUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gastronomia/:id',
    component: DettagliGastronomiaComponent,
    canActivate: [AuthGuard]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    GastronomiaComponent,
    MenuComponent,
    RecensioneComponent,
    PrenotazioneComponent,
    ProfiloUserComponent,
    DettagliGastronomiaComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes) , FormsModule, HttpClientModule, NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
