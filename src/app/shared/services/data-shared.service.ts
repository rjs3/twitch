import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataSharedService {

  detail: any;
  numberResults: any;

  instanciaDetail = new BehaviorSubject(this.detail);
  instanciaCountResult = new BehaviorSubject(this.numberResults);


  currentDetail = this.instanciaDetail.asObservable();
  currentNumberResult = this.instanciaCountResult.asObservable();


  constructor() {}

  public setDetail(data) {
    this.instanciaDetail.next(data);
  }

  public setCountResult(number) {
    this.instanciaCountResult.next(number);
  }
}