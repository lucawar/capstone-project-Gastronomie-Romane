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
  currentPage: number = 0;
itemsPerPage: number = 5;
nomeGastronomia!: string;
isEditing: boolean = false;
updatedData: any = {};
editingPrenotazioneId: string | null = null;

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


  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage() {
    const totalItems = this.currentUser.recensioni.length;
    if ((this.currentPage + 1) * this.itemsPerPage < totalItems) {
      this.currentPage++;
    }
  }

nextPageGastronomiaPref() {
  const totalItems = this.currentUser.gastronomie_preferite.length;
  if ((this.currentPage + 1) * this.itemsPerPage < totalItems) {
    this.currentPage++;
  }
}

nextPagePrenotazioni() {
  const totalItems = this.currentUser.prenotazioni.length;
  if ((this.currentPage + 1) * this.itemsPerPage < totalItems) {
    this.currentPage++;
  }
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
      this.currentUser.prenotazioni = response.content;

      // Popoliamo i nomi delle gastronomie per ogni prenotazione.
      this.currentUser.prenotazioni.forEach(prenotazione => {
        this.jsonService.findByGastronomiaId(prenotazione.gastronomia).subscribe(
          dettagliGastronomia => {
            prenotazione.gastronomia = dettagliGastronomia.nome;
          },
          error => {
            console.error("Errore nel caricare i dettagli della gastronomia:", error);
          }
        );
      });

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

  onDeletePrenotazione(prenotazioneId: string): void {
    this.jsonService.deletePrenotazione(prenotazioneId).subscribe(() => {
      console.log('Prenotazione eliminata con successo!');
      this.currentUser.prenotazioni = this.currentUser.prenotazioni.filter(p => p.id !== prenotazioneId);
      alert('Prenotazione eliminata con successo!');

    }, (error) => {
      console.error('errore nella cancellazione della prenotazione utente', error);
    });
  }

  onSubmitUpdate(prenotazioneId: string): void {
    this.jsonService.updatePrenotazione(prenotazioneId, this.updatedData).subscribe(() => {
      console.log('Prenotazione aggiornata con successo!');
      const prenotazione = this.currentUser.prenotazioni.find(p => p.id === prenotazioneId);
      if (prenotazione) {
        prenotazione.dataPrenotazione = this.updatedData.dataPrenotazione;
        prenotazione.oraPrenotazione = this.updatedData.oraPrenotazione;
        prenotazione.numeroPersone = this.updatedData.numeroPersone;
        prenotazione.nota = this.updatedData.nota;
      }
      this.updatedData = {};
      this.isEditing = false;
    }, (error) => {
      console.error('Errore nell\'aggiornamento della prenotazione', error);
    });
  }

  onEditPrenotazione(prenotazione: any): void {
    this.updatedData = {
      dataPrenotazione: prenotazione.dataPrenotazione,
      oraPrenotazione: prenotazione.oraPrenotazione,
      numeroPersone: prenotazione.numeroPersone,
      nota: prenotazione.nota
    };
    this.isEditing = true;
  }

}
