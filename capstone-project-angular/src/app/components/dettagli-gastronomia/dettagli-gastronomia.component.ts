import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from 'src/app/service/json.service';
import { Gastronomia } from 'src/app/models/gastronomia';

@Component({
  selector: 'app-dettagli-gastronomia',
  templateUrl: './dettagli-gastronomia.component.html',
  styleUrls: ['./dettagli-gastronomia.component.scss']
})
export class DettagliGastronomiaComponent implements OnInit {
gastronomia: any;
gastronomie: Gastronomia[] = [];
public page: number = 0;
public tipo: string[] = ['RISTORANTE', 'FORNO', 'ENOTECA', 'GELATERIA', 'OSTERIA', 'CAFFETTERIA', 'MERCATO'];
public selezionaTipo: string = '';
public selezionaPriceRange: string = '';
selectedMenu: any = null;
selectedGastronomiaId: string | null = null;
isLoading: boolean = false;
recensioneForGastronomiaId: string | null = null;
selectedRecensioni: any[] = [];
public prenotazioneGastronomiaId: string | null = null;
public selectedGastronomiaForPrenotazione: any;
favoritedGastronomies: string[] = [];


nuovaRecensione = {
  valutazione: '',
  commento: ''
};

showPrenotazioneForm: boolean = false;
stars: boolean[] = Array(5).fill(false);

showRecensioneForm: boolean = false;
recensioneFormGastronomiaId!: number
  constructor(private jsonService:JsonService,private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
        this.jsonService.findByGastronomiaId(id).subscribe(data => {
            this.gastronomia = data;
        });
    }
}
loadRecensioniForGastronomia(gastronomiaId: string): void {
  if (this.recensioneForGastronomiaId === gastronomiaId) {
    this.recensioneForGastronomiaId = null;
    this.selectedRecensioni = [];
    return;
  }
  this.recensioneForGastronomiaId = gastronomiaId;
  this.jsonService.getRecensioniByGastronomia(gastronomiaId).subscribe(data => {
    console.log('Recensioni ricevute:', data);
    this.selectedRecensioni = data;
  }, error => {
    console.error('Errore nella chiamata al servizio:', error);
  });
}

toggleRecensioneForm() {
  this.showRecensioneForm = !this.showRecensioneForm;
}


onSubmitRecensioneForm(gastronomiaId: string): void {
  if (this.nuovaRecensione.valutazione && this.nuovaRecensione.commento) {
    this.jsonService.creaRecensione(this.nuovaRecensione, gastronomiaId)
      .subscribe(response => {
        console.log('Recensione creata con successo!', response);
        alert('Recensione inserita con successo!');
        this.selectedRecensioni.push(response);
        this.nuovaRecensione = {
          valutazione: '',
          commento: ''
        };
      }, error => {
        console.error('Errore nella creazione della recensione:', error);
      });
  } else {
    console.warn('Compila tutti i campi del form della recensione!');
  }
}

togglePrenotazioneForm(gastronomiaId: string) {
  if (this.prenotazioneGastronomiaId === gastronomiaId) {
    this.prenotazioneGastronomiaId = '';
  } else {
    this.prenotazioneGastronomiaId = gastronomiaId;
  }
}


selectStar(index: number): void {
  for (let i = 0; i < 5; i++) {
    this.stars[i] = i <= index;
  }
  this.nuovaRecensione.valutazione = (index + 1).toString();
}

isFavorited(gastronomiaId: string): boolean {
  return this.favoritedGastronomies.includes(gastronomiaId);
}

aggiungiAiPreferiti(gastronomiaId: string): void {
  console.log(`Tentativo di aggiungere gastronomia con ID ${gastronomiaId} ai preferiti...`);
  this.jsonService.aggiungiPreferitiGastronomia(gastronomiaId).subscribe(
    response => {
      console.log('Gastronomia aggiunta con successo ai preferiti!', response);
      alert('Gastronomia aggiunta ai preferiti!');
      this.favoritedGastronomies.push(gastronomiaId);
    },
    error => {
      console.error(`Errore durante l'aggiunta della gastronomia con ID ${gastronomiaId} ai preferiti:`, error);
      alert('Errore nell\'aggiungere la gastronomia ai preferiti.');
    }
  );
}

rimuoviDaiPreferiti(gastronomiaId: string): void {
  console.log(`Tentativo di rimuovere gastronomia con ID ${gastronomiaId} dai preferiti...`);
  this.jsonService.rimuoviPreferitiGastronomia(gastronomiaId).subscribe(
    response => {
      console.log('Gastronomia rimossa con successo dai preferiti!', response);
      alert('Gastronomia rimossa dai preferiti!');
      this.favoritedGastronomies = this.favoritedGastronomies.filter(id => id !== gastronomiaId);
    },
    error => {
      console.error(`Errore durante la rimozione della gastronomia con ID ${gastronomiaId} dai preferiti:`, error);
      alert('Errore nel rimuovere la gastronomia dai preferiti.');
    }
  );
}


}


