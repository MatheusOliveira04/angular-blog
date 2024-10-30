import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';

import { MenuBarComponent } from  '../../components/menu-bar/menu-bar.component';

import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [CommonModule, MenuTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent],
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  dataArraySmallCard!:Array<any>;
  bigCard!: { id: string, photo: string, title: string, date:string, description: string };
  private readonly BIG_CARD_ID:string = '1';

  ngOnInit(): void {
    this.getBigCardData();
    this.getSmallCardDatas();
  }

  getBigCardData(): void{
    const selectedItem = dataFake.find(item => item.id === this.BIG_CARD_ID);
    if (selectedItem) {
      this.bigCard = selectedItem;
    }
  }

  getSmallCardDatas():void {
    this.dataArraySmallCard = dataFake.filter(item => item.id != this.BIG_CARD_ID);
  }

}
