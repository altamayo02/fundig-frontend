import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/models/service.model';
import { ServicesService } from 'src/app/services/repositories/services.service';

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
    this.headers = Object.keys(new Service())
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
    this.router.navigate(['services/update/', id])
  }

  remove(id: number) {
    this.theServicesService.delete(id).subscribe(() => {
      this.router.navigate(['services/delete'])
    })
  }
}
