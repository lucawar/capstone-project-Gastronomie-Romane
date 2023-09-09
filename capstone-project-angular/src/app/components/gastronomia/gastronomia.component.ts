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
  public currentPage: number = 1;
  public totalElements: number = 20;



  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    this.loadPage(this.currentPage);
}
loadPage(page: number): void {
  this.jsonService.getGastronomie(page - 1, 10).subscribe(data => {
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
}

