import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  numeroTelefono: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  register(): void {
    this.authService.register(this.username, this.name, this.surname, this.email, this.password, this.numeroTelefono).subscribe(
      response => {
        this.router.navigate(['/login']); // reindirizza l'utente alla pagina di login dopo la registrazione
      },
      error => {
        this.errorMessage = 'Errore nella registrazione. Riprova.'; // mostrare questo messaggio di errore nel template
      }
    );
  }
}
