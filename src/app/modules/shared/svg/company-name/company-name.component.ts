import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'company-name',
  styleUrls: ['./company-name.component.less'],
  templateUrl: './company-name.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CompanyNameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
