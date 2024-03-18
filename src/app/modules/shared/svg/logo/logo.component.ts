import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'logo',
  styleUrls: ['./logo.component.less'],
  templateUrl: './logo.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
