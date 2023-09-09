import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/service/json.service';
import { Gastronomia } from 'src/app/models/gastronomia';



@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrls: ['./gastronomia.component.scss']
})
export class GastronomiaComponent implements OnInit {

  gastronomie: Gastronomia[] = [];
  public page: number = 0;
  public tipo: string[] = ['RISTORANTE', 'FORNO', 'ENOTECA', 'GELATERIA', 'OSTERIA', 'CAFFETTERIA', 'MERCATO'];
  public selezionaTipo: string = '';
  public selezionaPriceRange: string = '';
  selectedMenu: any = null;
  selectedGastronomiaId: string | null = null;





  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    this.loadGastronomia();
}
nextPage() {
  this.page++;
  this.loadGastronomia();
}

previousPage() {
  if (this.page > 0) {
    this.page--;
    this.loadGastronomia();
  }
}

loadGastronomia(): void {
  this.jsonService.getGastronomie(this.page, 10).subscribe(data => {
    console.log(data);
    if (Array.isArray(data.content)) {
      this.gastronomie = data.content;
    } else {
      console.error('Formato dati inaspettato:', data);
    }
  }, error => {
    console.error('Errore nella chiamata al servizio:', error);
  });
}

getGastronomieByTipo(): void {
  if (this.selezionaTipo) {
    this.jsonService.getGastronomieByTipo(this.selezionaTipo).subscribe(data => {
      if (Array.isArray(data.content)) {
        this.gastronomie = data.content;
      } else {
        console.error('Formato dati inaspettato:', data);
      }
    }, error => {
      console.error('Errore nella chiamata al servizio:', error);
    });
  } else {
    this.loadGastronomia();
  }
}

getGastronomiaByPriceRange(): void {
  if (this.selezionaPriceRange) {
    const [minPrice, maxPrice] = this.selezionaPriceRange.split('-');
    this.jsonService.getGastronomieByPrezzo(minPrice, maxPrice).subscribe(data => {
      if (Array.isArray(data.content)) {
        this.gastronomie = data.content;
      } else {
        console.error('Formato dati inaspettato:', data);
      }
    }, error => {
      console.error('Errore nella chiamata al servizio:', error);
    });
  } else {
    this.loadGastronomia();
  }
}

loadMenuForGastronomia(gastronomiaId: string): void {
  this.selectedGastronomiaId = gastronomiaId;
  this.jsonService.getMenuByGastronomia(gastronomiaId).subscribe(data => {
    console.log('Menu ricevuto:', data);
      this.selectedMenu = data;
  }, error => {
      console.error('Errore nella chiamata al servizio:', error);
  });
}
}

