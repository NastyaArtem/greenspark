import { Component, OnInit } from '@angular/core';
import { WidgetRestService } from '../../services/widget-rest.service';
import { Observable, map, tap } from 'rxjs';
import { Widget } from '../../models/widget';
import { ActiveBadgeService } from '../../services/active-badge.service';

@Component({
  selector: 'app-widgets-dashboard',
  templateUrl: './widgets-dashboard.component.html',
  styleUrls: ['./widgets-dashboard.component.less']
})
export class WidgetsDashboardComponent implements OnInit {

  constructor(private widgetRestService: WidgetRestService) { }

  loadedWidgets$: Observable<Widget[]>;

  ngOnInit(): void {
    // Fetch widgets from service
    this.loadedWidgets$ = this.widgetRestService.getWidgets();
  }
}
