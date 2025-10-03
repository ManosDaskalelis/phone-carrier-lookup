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

  carrierLookup() {
    console.log(this.phone);
    const carrierInfo = this.carrierService.getCarrierInfo(this.phone);
    console.log(carrierInfo);
    return carrierInfo;
  }
}
