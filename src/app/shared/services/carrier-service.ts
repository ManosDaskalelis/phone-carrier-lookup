import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import carriers from '../../shared/carrierinfo.json';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {
  private carrierSubject= new BehaviorSubject<string>('Unknown');
  carrier$ = this.carrierSubject.asObservable();

  getCarrierInfo(phoneNumber: string) {
    const carrier = carriers.carriers.find(cp => cp.phone.substring(0, 3) === phoneNumber.substring(0, 3));

    if (carrier) {
      this.carrierSubject.next(carrier.name);
      return carrier.name;
    }
    this.carrierSubject.next('Unknown');
    return 'Unknown';
  }
}
