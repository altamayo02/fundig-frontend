import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/models/service.model';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  /*
    0: Create
    1: View
    2: Update
  */
  mode: number
  service: Service
  formGroup: FormGroup
  submitAttempted: boolean

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private theServicesService: ServicesService,
  ) {
    this.mode = 0
    this.service = new Service()
    this.submitAttempted = false
    this.buildFormGroup()
  }

  ngOnInit(): void {
    const currentUrl = this.activatedRoute.snapshot.url.join("/")
    
    const modes = ['create', 'view', 'update']
    while (true) {
      if (currentUrl.includes(modes[this.mode])) break
      else this.mode++
    }
    console.log(`The mode is ${this.mode}`)

    if (this.activatedRoute.snapshot.params.id) {
      this.service.id = this.activatedRoute.snapshot.params.id
      this.getService(this.service.id)
    } 
  }

  getService(id: number) {
    this.theServicesService.find(id).subscribe(data => {
      this.service = data
      console.log(`Service: ${JSON.stringify(this.service)}`)
    })
  }

  getServiceData() {
    this.service.name = this.getFormGroup.name.value
    this.service.description = this.getFormGroup.description.value
    this.service.cost = this.getFormGroup.cost.value
  }
  
  get getFormGroup() {
    return this.formGroup.controls
  }

  buildFormGroup() {
    this.formGroup = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
      ]],
      description: ['', []],
      cost: [0, [
        Validators.required,
        Validators.min(0),
      ]],
    })
  }

  create() {
    if (this.formGroup.invalid) {
      this.submitAttempted = true
      Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error")
      return
    }
    this.theServicesService.create(this.service).subscribe(data => {
      Swal.fire("Creación exitosa", "Se ha creado la entrada correctamente")
      this.router.navigate(["services/list"])
    })
  }
  
  update(id: number) {
    if (this.formGroup.invalid) {
      this.submitAttempted = true
      Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error")
      return
    }
    this.theServicesService.find(id).subscribe(user => {
      this.theServicesService.update(user).subscribe(data => {
        console.log(data);
        Swal.fire("Actualzación exitosa", "Se ha actualizado la entrada correctamente")
        this.router.navigate(["services/list"])
      })
    })
  }
}
