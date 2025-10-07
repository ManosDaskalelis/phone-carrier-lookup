import { Component, EventEmitter, inject, OnInit, output, signal } from '@angular/core';
import { CarrierService } from '../shared/services/carrier-service';
import { tap } from 'rxjs';
import { Carrier } from '../shared/model/carrier.model';

@Component({
  selector: 'app-carrier-info-details-component',
  imports: [],
  templateUrl: './carrier-info-details-component.html',
  styleUrl: './carrier-info-details-component.css'
})
export class CarrierInfoDetailsComponent implements OnInit {
  private carrierService = inject(CarrierService);
  private carrier = signal<Carrier | null>(null);
  carrierName: string = "";
  carrierAddress: string = "";

  ngOnInit(): void {
    this.carrierService.carrier$.pipe(
      tap(c => {
        this.carrierName = c.name;
        this.carrierAddress = c.address;
      })
    ).subscribe();
  }

  getCarrierDetails() {
    
  }

}
