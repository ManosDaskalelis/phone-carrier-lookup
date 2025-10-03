import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import carriers from '../../shared/carrierinfo.json';
import { Carrier } from '../model/carrier.model';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {
  private carrierSubject = new BehaviorSubject<Carrier>({} as Carrier);
  carrier$ = this.carrierSubject.asObservable();


  getCarrierInfo(phoneNumber: string) {
    const carrier = carriers.carriers.find(cp => cp.phone.substring(0, 6) === phoneNumber.substring(0, 6));

    if (carrier) {
      this.carrierSubject.next(carrier);
      return carrier.name;
    }
    this.carrierSubject.next({} as Carrier);
    return 'Unknown';
  }

  getCarrierCodeNumber(phoneNumber: string) {
    const carrier = carriers.carriers.find(cn => cn.code == phoneNumber.substring(0, 3));
    console.log(phoneNumber);

    return carrier ? carrier.codeNum : 'Unknown';
  }
}
