import { Component, OnInit, Input } from '@angular/core';
import { TipoPiatto } from 'src/app/enum/tipo-piatto';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {

  @Input() menuItems: any[] = [];

  categories = Object.values(TipoPiatto);
  organizzaMenu: Record<TipoPiatto, any[]> = {
    [TipoPiatto.ANTIPASTI]: [],
    [TipoPiatto.PRIMI]: [],
    [TipoPiatto.SECONDI]: [],
    [TipoPiatto.DESSERT]: [],
    [TipoPiatto.BEVANDE]: []
  };

  ngOnInit(): void {
      this.organizzaMenuByTipoPiatto();
  }

  organizzaMenuByTipoPiatto() {
      for (let category of this.categories) {
          this.organizzaMenu[category] = this.menuItems.filter(item => item.tipoPiatto === category);
      }
      console.log(this.organizzaMenu);

  }
}
