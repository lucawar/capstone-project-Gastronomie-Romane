import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/service/json.service';
import { User } from 'src/app/models/user';
import { Gastronomia } from 'src/app/models/gastronomia';
import { Review } from 'src/app/models/rewiew';

@Component({
  selector: 'app-profilo-user',
  templateUrl: './profilo-user.component.html',
  styleUrls: ['./profilo-user.component.scss']
})
export class ProfiloUserComponent implements OnInit {

  currentUser!: User;
  gastronomia: Gastronomia | undefined
  recensioni: Review[] = [];
  showGastronomie = false;
  showRecensioni = false;
  showPrenotazioni = false;

  constructor(private jsonService: JsonService ) { }


  ngOnInit(): void {
    this.jsonService.getCurrentUser().subscribe(
      user => {
        console.log('Dati utente ricevuti:', user);
        this.currentUser = user;


        this.loadGastronomiePreferite();
        this.loadRecensioniUtente();
        this.loadPrenotazioniUtente();
      },
      error => {
        console.error('Errore durante il recupero dell\'utente loggato:', error);
      }
    );
  }

  loadGastronomiePreferite(): void {
    if(this.currentUser) {
      this.jsonService.getGastronomiePreferite().subscribe(
        response => {
            console.log('Gastronomie Preferite ricevute:', response);
            this.currentUser.gastronomie_preferite = response.content;
        },
        error => {
            console.error('Errore durante il recupero delle gastronomie preferite:', error);
        }
      );
    }
  }

  loadRecensioniUtente(): void {
    this.jsonService.getRecensioniUtente().subscribe(response => {
      console.log('Recensioni utente:', response);
      this.currentUser.recensioni = response.content;
    }, error => {
      console.error("Errore nel caricare le recensioni dell'utente:", error);
    });
  }

  loadPrenotazioniUtente(): void {
    this.jsonService.getPrenotazioniUtente().subscribe(response => {
      console.log('Prenotazioni utente:', response);
      this.currentUser.prenotazioni = response.content;
    }, error => {
      console.error("Errore nel caricare le prenotazioni dell'utente:", error);
    });
  }

  onDeleteGastronomiaPreferita(gastronomiaId: string) {
    this.jsonService.rimuoviPreferitiGastronomia(gastronomiaId).subscribe(
      response => {
        this.currentUser.gastronomie_preferite = this.currentUser.gastronomie_preferite.filter(g => g.id !== gastronomiaId);
      },
      error => {
        console.error("Si è verificato un errore durante l'eliminazione:", error);
      }
    );
  }
}
