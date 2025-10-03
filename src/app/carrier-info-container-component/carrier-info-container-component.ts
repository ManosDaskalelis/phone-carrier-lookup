import { Component } from '@angular/core';
import { CarrierInfoFieldsComponent } from "../carrier-info-fields-component/carrier-info-fields-component";
import { CarrierInfoDetailsComponent } from "../carrier-info-details-component/carrier-info-details-component";
import { NavbarComponent } from "../navbar-component/navbar-component";

@Component({
  selector: 'app-carrier-info-container-component',
  imports: [CarrierInfoFieldsComponent, CarrierInfoDetailsComponent, NavbarComponent],
  templateUrl: './carrier-info-container-component.html',
  styleUrl: './carrier-info-container-component.css'
})
export class CarrierInfoContainerComponent {

}
