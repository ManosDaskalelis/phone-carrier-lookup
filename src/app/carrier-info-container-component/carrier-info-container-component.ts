import { Component, inject, OnInit } from '@angular/core';
import { CarrierInfoFieldsComponent } from "../carrier-info-fields-component/carrier-info-fields-component";
import { CarrierInfoDetailsComponent } from "../carrier-info-details-component/carrier-info-details-component";
import { NavbarComponent } from "../navbar-component/navbar-component";
import { CarrierService } from '../shared/services/carrier-service';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-carrier-info-container-component',
  imports: [CarrierInfoFieldsComponent, CarrierInfoDetailsComponent, NavbarComponent, AsyncPipe],
  templateUrl: './carrier-info-container-component.html',
  styleUrl: './carrier-info-container-component.css'
})
export class CarrierInfoContainerComponent {
  carrierService = inject(CarrierService);
  carrierInfo$ = this.carrierService.carrier$;;
}
