import { Component, OnInit, Input } from '@angular/core';
import { JsonService } from 'src/app/service/json.service';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.scss']
})
export class PrenotazioneComponent implements OnInit {

  prenotazione = {
    dataPrenotazione: '',
    oraPrenotazione: '',
    nota: '',
    numeroPersone: ''
  };
  @Input() gastronomiaId!: string;
  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
  }


  onSubmitPrenotazioneForm(): void {
    if (this.prenotazione.dataPrenotazione && this.prenotazione.oraPrenotazione && this.prenotazione.nota && this.prenotazione.numeroPersone) {
      this.jsonService.creaPrenotazione(this.prenotazione, this.gastronomiaId)
        .subscribe(response => {
          console.log('Prenotazione effettuata con successo!', response);
          alert('Prenotazione effettuata con successo!');
          this.prenotazione = {
            dataPrenotazione: '',
            oraPrenotazione: '',
            nota: '',
            numeroPersone: ''
          };
        }, error => {
          console.error('Errore nella prenotazione:', error);
          alert('Si è verificato un errore durante la prenotazione.');
        });
    } else {
      alert('Compila tutti i campi del form della prenotazione!');
    }
  }}
