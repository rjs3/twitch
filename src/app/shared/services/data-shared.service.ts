import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataSharedService {
  detail: any;


  instanciaDetail = new BehaviorSubject(this.detail);

  currentDetail = this.instanciaDetail.asObservable();

  constructor() {}

  public setDetail(data) {
    this.instanciaDetail.next(data);
  }
}
