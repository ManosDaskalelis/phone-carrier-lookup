import { Injectable } from '@angular/core';
import carriers from '../../shared/carrierinfo.json';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {

  getCarrierInfo(phoneNumber: string) {
    console.log(carriers.carriers);
    
    const carrier = carriers.carriers.find(cp => cp.phone.substring(0, 3) === phoneNumber.substring(0, 3));

    if (carrier) {
      return carrier.name;
    }

    return 'Unknown';
  }
}
