import { Component, inject} from '@angular/core';
import { CarrierService } from '../shared/services/carrier-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrier-info-fields-component',
  imports: [FormsModule],
  templateUrl: './carrier-info-fields-component.html',
  styleUrl: './carrier-info-fields-component.css'
})
export class CarrierInfoFieldsComponent {
  private carrierService = inject(CarrierService);
  phone: string = '';
  countryCode: string = '';

  carrierLookup() {
    const code = this.carrierService.getCarrierCodeNumber(this.countryCode);
    const fullnumber = "+"+code+this.phone;
    const carrierInfo = this.carrierService.getCarrierInfo(fullnumber);
    console.log(fullnumber);
    return carrierInfo;
  }
}
