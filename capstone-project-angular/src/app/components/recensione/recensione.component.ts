import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recensione',
  templateUrl: './recensione.component.html',
  styleUrls: ['./recensione.component.scss']
})
export class RecensioneComponent implements OnInit {

  @Input() recensioni: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getRatingStars(valutazione: number): boolean[] {
    let stars: boolean[] = Array(5).fill(false);
    for (let i = 0; i < 5; i++) {
      stars[i] = i < valutazione;
    }
    return stars;
  }
}

