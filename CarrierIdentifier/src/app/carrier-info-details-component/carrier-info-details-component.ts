import { Component, inject, OnInit } from '@angular/core';
import { CarrierService } from '../shared/services/carrier-service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-carrier-info-details-component',
  imports: [],
  templateUrl: './carrier-info-details-component.html',
  styleUrl: './carrier-info-details-component.css'
})
export class CarrierInfoDetailsComponent implements OnInit {
  private carrierService = inject(CarrierService);
  carrierName: string ="";
  
  ngOnInit(): void {
    this.carrierService.carrier$.subscribe(pipe(name => {
      this.carrierName = name;
    }));
  }
}
