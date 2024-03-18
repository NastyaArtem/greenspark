import { Component, Input, OnInit } from '@angular/core';
import { Widget } from '../../models/widget';
import { Color } from '../../models/color';
import { ActiveBadgeService } from '../../services/active-badge.service';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.less']
})
export class WidgetCardComponent implements OnInit {

  @Input() card: Widget;

  constructor(private activeBadgeService: ActiveBadgeService) { }
  

  ngOnInit(): void {
    this.activeBadgeService.activeCardId$.subscribe(id => {
      console.log(id)
      this.card.active = id === this.card.id
    })
    console.log(this.card)
  }

  linkToPublicProfileSetted(value: boolean){
    console.log(value);
    this.card.linked = value;
  }

  selectedColorChanged(value: Color): void {
    this.card.selectedColor = value;
  }

  activateBudget(value: boolean): void {
    if(value){
      this.activeBadgeService.setActiveCard(this.card.id);
    }
  }

}
