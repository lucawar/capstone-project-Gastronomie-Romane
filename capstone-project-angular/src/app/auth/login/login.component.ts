import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        if (response.accessToken) {
          this.router.navigate(['/home']); // reindirizza l'utente alla dashboard o alla home dopo il login
        }
      },
      error => {
        this.errorMessage = 'Email o password non valide. Riprova.'; // mostrare questo messaggio di errore nel template
      }
    );
  }
}
