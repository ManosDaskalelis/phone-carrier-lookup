import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrierInfoContainerComponent } from "./carrier-info-container-component/carrier-info-container-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarrierInfoContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CarrierIdentifier');
}
