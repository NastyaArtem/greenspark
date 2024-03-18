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
    // Subscribe to active card changes
    this.activeBadgeService.activeCardId$.subscribe(id => {
      this.card.active = id === this.card.id;
    });
  }

  linkToPublicProfileSetted(value: boolean): void {
    this.card.linked = value;
  }

  selectedColorChanged(value: Color): void {
    this.card.selectedColor = value;
  }

  activateBudget(value: boolean): void {
    if (value) {
      // Set current card as active
      this.activeBadgeService.setActiveCard(this.card.id);
    }
  }

  // Function to determine if the color needs to be inverted on card header
  isColorInverted(color: string): boolean {
    return color === 'white' || color === 'beige';
  }

  showTimeout: NodeJS.Timeout;
  hideTimeout: NodeJS.Timeout;
  
  showTooltip(): void {
    console.log("showTooltip")
    clearTimeout(this.hideTimeout);
    this.showTimeout = setTimeout(() => {
        document.getElementById("tooltip" + this.card.id)?.classList.add("show");
    }, 200);
}

hideTooltip(): void {
    clearTimeout(this.showTimeout);
    this.hideTimeout = setTimeout(() => {
        document.getElementById("tooltip" + this.card.id)?.classList.remove("show");
    }, 300);
}
}
