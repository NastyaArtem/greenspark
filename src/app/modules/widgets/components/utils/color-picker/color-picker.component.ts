import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../../../models/color';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.less']
})
export class ColorPickerComponent implements OnInit {

  @Input()
  selectedColor: string = 'black';

  @Output()
  colorChanged: EventEmitter<Color> = new EventEmitter();


  constructor() { }
// Array of available colors
  colors: (Color)[] = ['blue', 'green', 'beige', 'white', 'black'];
  
  ngOnInit(): void {
  }

  onColorSelect(value: Color): void {
    // Emit the selected color to card
    this.colorChanged.emit(value);
  }

}