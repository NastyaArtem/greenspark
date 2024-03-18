import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Widget } from '../models/widget';

const GET_WIDGETS_URL = '/v2/016d11e8/product-widgets'

@Injectable({
  providedIn: 'root'
})
export class WirgetRestService {
  
  constructor(private httpClient: HttpClient) { }

  getWidgets(): Observable<Widget[]>{
    return this.httpClient.get<Widget[]>(GET_WIDGETS_URL)
  }
}
