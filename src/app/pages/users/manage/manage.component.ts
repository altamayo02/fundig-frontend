import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/repositories/users.service';
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
    user: User
    formGroup: FormGroup
    submitAttempted: boolean
    users: User[]
  
    constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private formBuilder: FormBuilder,
      private theUsersService: UsersService,
    ) {
      this.mode = 0
      this.user = new User()
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
        this.user._id = this.activatedRoute.snapshot.params.id
        this.getUser(this.user._id)
      } 

      this.listUsers()
    }

    listUsers() {
      this.theUsersService.list().subscribe(users => {
        this.users = users
        console.log(JSON.stringify(users))
        console.log(users);
      })
    }
  
    getUser(id: number) {
      this.theUsersService.find(id).subscribe(data => {
        this.user = data
        console.log(`User: ${JSON.stringify(this.user)}`)
      })
    }
  
    getUserData() {
      this.user.cc = this.getFormGroup.cc.value
      this.user.name = this.getFormGroup.name.value
      this.user.email = this.getFormGroup.email.value
      this.user.password = this.getFormGroup.password.value
      this.user.role = this.getFormGroup.role.value
      this.user.firstnames = this.getFormGroup.firstnames.value
      this.user.lastnames = this.getFormGroup.lastnames.value
      this.user.country = this.getFormGroup.country.value
      this.user.city = this.getFormGroup.city.value
      this.user.address = this.getFormGroup.address.value
      this.user.holder = this.getFormGroup.holder.value
      this.user.responsibilities = this.getFormGroup.responsibilities.value
    }
    
    get getFormGroup() {
      return this.formGroup.controls
    }
  
    buildFormGroup() {
      this.formGroup = this.formBuilder.group({
        email: ['', [
          Validators.required,
          Validators.email,
        ]],
        password: ['', [
          Validators.required,
          Validators.minLength(8),
        ]],
      })
    }
  
    create() {
      if (this.formGroup.invalid) {
        this.submitAttempted = true
        Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error")
        return
      }
      this.theUsersService.create(this.user).subscribe(data => {
        Swal.fire("Creación exitosa", "Se ha creado la entrada correctamente")
        this.router.navigate(["users/list"])
      })
    }
    
    update(id: number) {
      if (this.formGroup.invalid) {
        this.submitAttempted = true
        Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error")
        return
      }
      this.theUsersService.find(id).subscribe(user => {
        this.theUsersService.update(user).subscribe(data => {
          console.log(data);
          Swal.fire("Actualzación exitosa", "Se ha actualizado la entrada correctamente")
          this.router.navigate(["users/list"])
        })
      })
    }
}
