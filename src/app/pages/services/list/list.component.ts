import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/models/service.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  headers: string[]
  services: Service[]

  constructor(
    private theServicesService: ServicesService,
    private router: Router,
  ) {
    this.headers = Object.keys(Service.prototype)
    this.services = []
  }

  ngOnInit(): void {
    this.list()
  }

  create() {

  }

  list() {
    this.theServicesService.list().subscribe(services => {
      this.services = services
      console.log(JSON.stringify(services))
    })
  }

  view(id: number) {
    this.router.navigate(['services/view/', id])
  }

  update(id: number) {

  }

  delete(id: number) {

  }
}
