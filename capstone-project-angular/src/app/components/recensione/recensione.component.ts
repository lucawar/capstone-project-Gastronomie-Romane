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

}
