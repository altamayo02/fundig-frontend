import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[]
  constructor() { }

  ngOnInit(): void {
  }

}
