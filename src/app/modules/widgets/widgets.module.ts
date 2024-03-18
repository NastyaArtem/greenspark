import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsDashboardComponent } from './components/widgets-dashboard/widgets-dashboard.component';
import { WidgetCardComponent } from './components/widget-card/widget-card.component';
import { SharedModule } from '../shared/shared.module';
import { WidgetsRoutingModule } from './widgets-routing.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerComponent } from './components/utils/color-picker/color-picker.component';


@NgModule({
  declarations: [
    WidgetsDashboardComponent,
    WidgetCardComponent,
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    SharedModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule
  ],
  exports: [
    WidgetsDashboardComponent
  ]
})
export class WidgetsModule { }
