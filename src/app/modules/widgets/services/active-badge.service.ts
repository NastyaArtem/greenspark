import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveBadgeService {

  private activeCardIdSubject: Subject<number> = new Subject();
  activeCardId$: Observable<number> = this.activeCardIdSubject.asObservable();

  constructor() { }

  setActiveCard(id: number): void {
    this.activeCardIdSubject.next(id);
  }

}
